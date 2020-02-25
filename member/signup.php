<?php
    include_once $_SERVER['DOCUMENT_ROOT'] . '/config/config.php';
    include_once $_SERVER['DOCUMENT_ROOT'] . '/config/util.php';

    $conn = dbconnect($host, $dbid, $dbpass, $dbname);

    $u_pw = $_POST['u_pw'];
    $u_pwc = $_POST['u_pwc'];
    $u_email = $_POST['u_email'];
    $u_phone = $_POST['u_phone'];
    $u_name = $_POST['u_name'];
    $corp = $_POST['enterprise'];

    mysqli_query($conn, 'set autocommit = 0');
    mysqli_query($conn, 'set transation isolation level serializable');
    mysqli_query($conn, 'begin');

    if ($u_pw != $u_pwc) {
        msg('비밀번호와 비밀번호 확인이 서로 다릅니다.');
    }
    if ($u_pw == '' || $u_email == '' || $u_email == '' || $u_phone == '' || $u_name == '') {
        msg('모든 항목을 입력하여 주세요');
    }
    $u_pw = password_hash($u_pw, PASSWORD_DEFAULT);
    $query = "insert into user(u_pw,u_email,u_phone,u_name,corp) values('$u_pw','$u_email','$u_phone','$u_name','$corp')";

    $ret = mysqli_query($conn, $query);

    if (!$ret) {
        mysqli_query($conn, 'rollback');
        echo mysqli_error($conn);
        msg('잘못된 요청 입니다.');
    } else {
        mysqli_query($conn, 'commit');
        s_msg('성공적으로 회원가입 되었습니다');
        echo "<meta http-equiv='refresh' content='0;url=http://makewebnbot.com/signin'>";
    }
