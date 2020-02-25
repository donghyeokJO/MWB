<?php
    session_start();

    setcookie('u_email_cookie', '', time() - 3600 * 24 * 10, '/', 'makewebnbot.com');
    setcookie('u_pw_cookie', '', time() - 3600 * 24 * 10, '/', 'makewebnbot.com');
    $res = session_destroy();

    if ($res) {
        echo '<script>location.href="/index"</script>';
    }
