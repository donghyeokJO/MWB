<?php
    include_once $_SERVER['DOCUMENT_ROOT'] . '/config/config.php';
    include_once $_SERVER['DOCUMENT_ROOT'] . '/config/util.php';
    session_start();
    $conn = dbconnect($host, $dbid, $dbpass, $dbname);

    $user = mysqli_query($conn, 'select * from user');

    $u_email = $_POST['u_email'];
    $u_pw = $_POST['u_pw'];
    // echo $u_email;

    $query = "select * from user where u_email = '$u_email'";
    $ans = mysqli_query($conn, $query);

    if ($ans->num_rows == 1) {
        $row = $ans->fetch_array(MYSQLI_ASSOC);
        if (password_verify($u_pw, $row['u_pw'])) {
            $_SESSION['u_email'] = $u_email;
            if (isset($_SESSION['u_email'])) {
                if (isset($_POST['auto_login'])) {
                    $pass = $u_pw;
                    $key = 'medi180615';

                    $hash = Encrypt($pass, $secret_key, $secret_iv);
                    echo "<script>location.href='set_cookie.php?u_email=$u_email&hash=$hash';</script>";
                } else {
                    echo "<meta http-equiv='refresh' content='0;url=/index'>";
                }
            }
        } else {
            msg('비밀번호가 잘못 되었습니다.');
        }
    } else {
        msg('가입되지 않은 이메일입니다. 다시 확인해주세요');
    }
