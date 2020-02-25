<?php
 include_once $_SERVER['DOCUMENT_ROOT'] . '/config/config.php';
 include_once $_SERVER['DOCUMENT_ROOT'] . '/config/util.php';

    $conn = dbconnect($host, $dbid, $dbpass, $dbname);
    if (isset($_GET['u_email']) && isset($_GET['hash'])) {
        $u_email = $_GET['u_email'];
        $query = "select * from user where u_email = '$u_email'";
        $ret = mysqli_query($conn, $query);
        $row = mysqli_fetch_array($ret);
        $u_specify = $row['u_specify'];
        $hash = $_GET['hash'];

        if (headers_sent($file, $line)) {
            msg('Cannot create cookie');
        } else {
            setcookie('u_email_cookie', $u_email, time() + 3600 * 24 * 10, '/', 'makewebnbot.com');
            setcookie('u_pw_cookie', $hash, time() + 3600 * 24 * 10, '/', 'makewebnbot.com');
            echo '<script>location.href="/index";</script>';
        }
    } else {
        echo '<script>alert("Unknown error. Login failed");location.href="signin"</script>';
    }
