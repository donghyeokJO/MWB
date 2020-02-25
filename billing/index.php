<?php
    include_once $_SERVER['DOCUMENT_ROOT'] . '/config/config.php';
    include_once $_SERVER['DOCUMENT_ROOT'] . '/config/util.php';
    include_once $_SERVER['DOCUMENT_ROOT'] . '/src/iamport.php';
    if ($json = json_decode(file_get_contents('php://input'), true)) {
        $data = $json;
    } else {
        $data = $_POST;
    }
    $conn = dbconnect($host, $dbid, $dbpass, $dbname);
    $merchant = $data['merchant_uid'];
    function add_months($months, DateTime $dateObject)
    {
        $next = new DateTime($dateObject->format('Y-m-d'));
        $next->modify('last day of +' . $months . ' month');

        if ($dateObject->format('d') > $next->format('d')) {
            return $dateObject->diff($next);
        } else {
            return new DateInterval('P' . $months . 'M');
        }
    }

    function endCycle($d1, $months)
    {
        $date = new DateTime($d1);

        // call second function to add the months
        $newDate = $date->add(add_months($months, $date));

        // goes back 1 day from date, remove if you want same day of month
        $newDate->sub(new DateInterval('P1D'));

        //formats final date to Y-m-d form
        $dateReturned = $newDate->format('Y-m-d');

        return $dateReturned;
    }
    if ($data['status'] != 'paid') {
        echo 'Not a correct request. Only paid cases can be send to this server.';
        return 400;
    } else {
        $query = "select * from payment where merchant = '$merchant' order by pid desc limit 1";
        $pay = mysqli_query($conn, $query);
        if (mysqli_num_rows($pay) == 0) {
            echo 'Not a correct request. Only paid cases can be send to this server.';
            exit();
        }
        $pay = mysqli_fetch_array($pay);
        $u_id = $pay['u_id'];
        $kind = $pay['kind'];

        $customer = 'customer_' . $u_id;
        $amount = $pay['p_money'];
        $query = "select * from user where u_id = '$u_id'";
        $user = mysqli_fetch_array(mysqli_query($conn, $query));
        $merchant = 'merchant_' . $u_id . date('Y-m-d', time());
        $imp_key = '9641511988571315';
        $imp_sec = 'EkJBYQ8Vxz34KbYB1woaRxJzmYBXcLPR6zt5qB0Xa31Uf0vhwTrorbXO9zLmlAesaHxAiyxsBznRzT85';
        $iamport = new Iamport($imp_key, $imp_sec);
        $curdate = date('Y-m-d', time());
        $m = 1;
        $final = endCycle($curdate, $m);

        $scheduledAt = strtotime($final);
        $data = ['customer_uid' => $customer];
        $data['schedules'] = [['merchant_uid' => $merchant, 'schedule_at' => $scheduledAt,
            'amount' => $amount, 'name' => '정기결제 -' . $amount . '원', 'buyer_name' => $user['u_name']
        ]];
        $result = $iamport->subscribeSchedule($data);
        if ($result->success) {
            echo 'success';
            $query = "insert into payment(u_id,p_money,merchant,kind) values('$u_id','$amount','$merchant','$kind')";
            mysqli_query($conn, $query);
        } else {
            echo $result->error['code'];
            echo$result->error['message'];
        }
    }
