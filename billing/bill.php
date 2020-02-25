<?php
    include_once $_SERVER['DOCUMENT_ROOT'] . '/config/header.php';
    include_once $_SERVER['DOCUMENT_ROOT'] . '/src/iamport.php';
    $login = false;
    if (isset($_SESSION['u_email'])) {
        $login = true;
        $u_email = $_SESSION['u_email'];
        $user = mysqli_query($conn, "select * from user where u_email='$u_email'");
        $user = mysqli_fetch_array($user);
        $u_id = $user['u_id'];
        $customer = $_GET['customer_uid'];
        $merchant = $_GET['merchant_uid'] . time();
        echo $merchant;
        $amount = $_GET['amount'];
        $imp_key = '9641511988571315';
        $imp_sec = 'EkJBYQ8Vxz34KbYB1woaRxJzmYBXcLPR6zt5qB0Xa31Uf0vhwTrorbXO9zLmlAesaHxAiyxsBznRzT85';
        $iamport = new Iamport($imp_key, $imp_sec);
        $data = ['customer_uid' => $customer, 'merchant_uid' => $merchant,
            'amount' => $amount, 'name' => '정기결제 -' . $amount . '원',
            'buyer_tel' => $user['u_phone'], 'buyer_email' => $u_email];
        $result = $iamport->subscribeAgain($data);
        if ($result->success) {
            /**
            *	IamportPayment 를 가리킵니다. __get을 통해 API의 Payment Model의 값들을 모두 property처럼 접근할 수 있습니다.
            *	참고 : https://api.iamport.kr/#!/subscribe/payments/again 의 Response Model
            */
            $payment_data = $result->data;

            if ($payment_data->status == 'paid') {
                $query = "insert into payment(u_id,p_money,merchant,kind) values('$u_id','$amount','$merchant','챗봇')";
                mysqli_query($conn, $query);
                s_msg('정기결제 신청이 완료되었습니다.');
                echo '<script>location.href = "/index"</script>';
            } else {
                // 결제실패
                $reason = '결제실패 : ' . $payment_data->fail_reason;
                msg($reason);
            }
        } else {
            echo $result->error['code'];
            echo $result->error['message'];
        }
    } else {
        msg('로그인 해주세요');
    }
