<?php
    include_once $_SERVER['DOCUMENT_ROOT'] . '/config/header.php';
    $login = false;
    if (isset($_SESSION['u_email'])) {
        $login = true;
        $u_email = $_SESSION['u_email'];
        $user = mysqli_query($conn, "select * from user where u_email='$u_email'");
        $user = mysqli_fetch_array($user);
        $u_id = $user['u_id'];
        $query = "select * from payment where u_id='$u_id' order by pid desc limit 1";
        $pay = mysqli_query($conn, $query);
        $pay = mysqli_fetch_array($pay);
    }
    if (!$login) {
        msg('로그인 해주세요');
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>MAKE WEB&BOT</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/mypay.css">
    <link rel="stylesheet" href="../css/common.css">
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/member.css">
    <link rel="stylesheet" href="../css/index.css">
    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans&display=swap" rel="stylesheet">
</head>

<body>
<div id="fb-root"></div>
            <script>
                window.fbAsyncInit = function() {
                FB.init({
                    xfbml            : true,
                    version          : 'v5.0'
                });
                };

                (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/ko_KR/sdk/xfbml.customerchat.js';
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));</script>

            <!-- Your customer chat code -->
            <div class="fb-customerchat"
                attribution=setup_tool
                page_id="107624977408119"
                theme_color="#778899"
                logged_in_greeting="안녕하세요, 웹 사이트 & 챗봇 토탈 솔루션 Make Web & Bot입니다. "
                logged_out_greeting="안녕하세요, 웹 사이트 & 챗봇 토탈 솔루션 Make Web & Bot입니다. ">
            </div>
    <div class="wrapper">
        <header>
            <div class="logo">
                <a href="#" onclick="location.href='/index'">MAKE WEB&BOT</a>
            </div>
            <div class="slogan">
                BE TOGETHER, BE HEALTHEIR
            </div>
            <div class="m_util">
                <div class="m_btn">
                    <i class="m_menu fas fa-bars" onclick="m_openMenu();"></i>
                </div>
                <div class="m_open_menu">
                    <div class="m_menulist">
                        <div class="m_category">
                            <ul class="m_category_list">
                                <li>
                                    <div><a href="#" onclick="location.href='/chatbot'">CHAT BOT</a></div>
                                </li>
                                <li>
                                    <div><a href="#" onclick="location.href='/web'">HOMEPAGE</a></div>
                                </li>
                                <li>
                                    <div><a href="#" onclick="location.href='/about'">ABOUT US</a></div>
                                </li>
                                <li>
                                    <div><a href="#" onclick="location.href='/contact'">CONTACT</a></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="menu_close" onclick="m_closeMenu();"><i class="fas fa-times"></i></div>
                </div>
            </div>
            <div class="menu">
                <ul class="menu_box">
                    <li>
                        <a href="#" onclick="location.href='/chatbot'">CHAT BOT</a>
                        <div class="bar"></div>
                    </li>
                    <li>
                        <a href="#" onclick="location.href='/web'">HOMEPAGE</a>
                        <div class="bar"></div>
                    </li>
                    <li>
                        <a href="#" onclick="location.href='/about'">ABOUT US</a>
                        <div class="bar"></div>
                    </li>
                    <li>
                        <a href="#" onclick="location.href='/contact'">CONTACT</a>
                        <div class="bar"></div>
                    </li>
                </ul>
            </div>
            <div class="user">
                <!-- <div class="login" onclick="location.href='signin'">
                    LOGIN
                </div> -->
                <div class="user_menu">
                    <a href="/logout">LOGOUT</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<a href="mypage">MY PAGE</a>
                </div>
            </div>
        </header>
        <div class="info">
            <div class="user_tab">
                <div class="user_info">
                    <div class="user_link" onclick="location.href='mypage'">회원정보</div>
                    <div class="link_bar"></div>
                </div>
                <div class="pay_info">
                    <div class="pay_link" onclick="location.href='mypay'">결제정보</div>
                    <div class="link_bar"></div>
                </div>
            </div>
            <div class="gudok_title">
                정기구독 서비스
            </div>
            <div class="gudok_list">
                <div class="gudok_list_title">
                    <asd><?php echo $pay['kind']?></asd> (<?php echo $pay['p_money']?>원/월)
                </div>
                <div class="gudok_list_reset">
                    <a href="http://m.me/makewebnbot">정기구독 해지하기</a>
                </div>
            </div>
        </div>
        <footer>
            <div id="footer_02">
                <div class="row justify-content-start align-items-between">
                    <div class="col-12 col-sm-6 font_size_xl font_weight_b"><a href="index"
                            style="text-decoration:none; color:#FFFFFF">MAKE WEB&BOT</a></div>
                    <div class="col-12 col-sm-5" style="line-height: 1.79;">
                        Tel. 050 7343 2605<br />
                        E-mail. support@eszett.co.kr<br />
                        상호 : 에스체트(eszett)<br />
                        대표 : 이승준 <br />
                        소재지 : 서울특별시 강남구 강남대로 364 미왕빌딩 16층<br />
                        사업자등록번호 : 308-13-51102
                    </div>
                    <div class="col-12 col-sm-1 tablet" onclick="positionToTop()">
                        <svg class="cursor_pointer" style="fill: #fff;transform: rotate(270deg);width: 50px;"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                        </svg>
                    </div>
                    <div class="col-12 col-sm-5 margin_top_l mobile">
                        <span><a href="../member/privacy" style="color:#FFFFFF">개인정보취급방침</a></span><span
                            style="padding: 0 10px">|</span><span><a href="../member/terms"
                                style="color:#FFFFFF">이용약관</a></span>
                    </div>
                    <div class="col-12 col-sm-6 margin_top_l">
                        Copyright ⓒ 2019 eszett All Rights Reserved
                    </div>
                    <div class="col-12 col-sm-5 margin_top_l tablet">
                        <span><a href="../member/privacy" style="color:#FFFFFF">개인정보취급방침</a></span><span
                            style="padding: 0 10px">|</span><span><a href="../member/terms"
                                style="color:#FFFFFF">이용약관</a></span>
                    </div>
                </div>
                <div class="col-12 col-sm-1 mobile" onclick="positionToTop()"
                    style="position: absolute;top: 32px;text-align: right;">
                    <svg class="cursor_pointer" style="fill: #fff;transform: rotate(270deg);width: 50px;"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                    </svg>
                </div>
            </div>
        </footer>
    </div>
</body>
<script src="https://kit.fontawesome.com/c3089a3225.js" crossorigin="anonymous"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="../js/script.js"></script>

</html>