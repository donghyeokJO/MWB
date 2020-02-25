<?php
    include_once $_SERVER['DOCUMENT_ROOT'] . '/config/header.php';

    $name = $_POST['name'];
    $corp = $_POST['corp'];
    $num1 = $_POST['num1'];
    $num2 = $_POST['num2'];
    $num3 = $_POST['num3'];
    $email = $_POST['email'];
    $content = $_POST['content'];
    //$content = nl2br($content);
    $num = $num1 . '-' . $num2 . '-' . $num3;
    $query = "insert into ask(name,corp,tel,email,content) values('$name','$corp','$num','$email','$content')";
    if (mysqli_query($conn, $query)) {
        s_msg('문의해주셔서 감사합니다. 곧 답변드리도록 하겠습니다.');
        echo "<script>location.href='/index'</script>";
    } else {
        msg('잘못된 접근입니다. 오류가 반복될 시 고객센터에 문의해주세요');
    }
