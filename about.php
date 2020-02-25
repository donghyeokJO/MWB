<?php
    include_once $_SERVER['DOCUMENT_ROOT'] . '/config/header.php';
    $login = false;
    if (isset($_SESSION['u_email'])) {
        $login = true;
        $u_email = $_SESSION['u_email'];
        $user = mysqli_query($conn, "select * from user where u_email='$u_email'");
        $user = mysqli_fetch_array($user);
    }

?>
<!DOCTYPE html>
<html lang="en">

<head>
       <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-150475018-2"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-150475018-2');
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>MAKE WEB&BOT</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="css/about.css">
    <link rel="stylesheet" href="css/common.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/member.css">
    <link rel="stylesheet" href="css/index.css">
    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap" rel="stylesheet">
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
                <a href="#" onclick="location.href='index'">MAKE WEB&BOT</a>
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
                                    <div><a href="#" onclick="location.href='chatbot'">CHAT BOT</a></div>
                                </li>
                                <li>
                                    <div><a href="#" onclick="location.href='web'">HOMEPAGE</a></div>
                                </li>
                                <li>
                                    <div><a href="#" onclick="location.href='about'">ABOUT US</a></div>
                                </li>
                                <li>
                                    <div><a href="#" onclick="location.href='contact'">CONTACT</a></div>
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
                        <a href="#" onclick="location.href='chatbot'">CHAT BOT</a>
                        <div class="bar"></div>
                    </li>
                    <li>
                        <a href="#" onclick="location.href='web'">HOMEPAGE</a>
                        <div class="bar"></div>
                    </li>
                    <li>
                        <a href="#" onclick="location.href='about'">ABOUT US</a>
                        <div class="bar" style="width: 100%;"></div>
                    </li>
                    <li>
                        <a href="#" onclick="location.href='contact'">CONTACT</a>
                        <div class="bar"></div>
                    </li>
                </ul>
            </div>
            <?php
            if (!$login) {
                echo "<div class=\"user\">
                            <div class=\"login\" onclick=\"location.href='signin'\">
                                LOGIN
                            </div>
                        </div>";
            } else {
                echo '<div class="user">
                <div class="user_menu">
                <a href="logout">LOGOUT</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<a href="/mypage/mypage">MY PAGE</a>
             </div>
            </div>';
            }
            ?>
        </header>
        <div class="main_image"></div>
        <div class="main_txt">
            <div class="title">
                Make Web&Bot
            </div>
            <div class="desc">
                Expert Development company
            </div>
        </div>
        <div class="main_list">
            <div class="check">
                <div class="check_item"></div>
                <div class="filter_g">전담 PM <br>직접관리</div>

                <div class="check_item"></div>
                <div class="filter_b">체계적인 <br>팀 단위 운영</div>

                <div class="check_item"></div>
                <div class="filter_g">프로그램 개발자 <br>출신 PM</div>

                <div class="check_item"></div>
                <div class="filter_b">정부투자유치 <br>전문기술기업</div>

                <div class="check_item"></div>
                <div class="filter_b">독자적인 <br>솔루션 빌딩 시스템</div>

                <div class="check_item"></div>
                <div class="filter_g">맞춤형 솔루션</div>

                <div class="check_item"></div>
                <div class="filter_b">적극적인 <br>커뮤니케이션</div>

                <div class="check_item"></div>
                <div class="filter_g">인공지능 빅데이터 <br>기술 기업</div>
            </div>
            <div class="txt_bar">
                최신형 고급 챗봇 전문 (인공지능 모델 적용)
            </div>
            <div class="txt_bar">
                카카오톡, 페이스북, 라인 등 토탈 챗봇 솔루션 제공
            </div>
            <div class="txt_bar">
                전문가 상담을 통한 웹사이트 및 복잡한 부가기능 맞춤형 구현
            </div>
            <div class="txt_bar">
                홈페이지, 챗봇, SNS 등 다양한 매체를 최적화 연결(SEO최적화, 백링크설정 포함)
            </div>
            <div class="txt_bar_bot">
                매이크웹앤봇은 제작시 내게 맞는 매체를 선택, <asd class="red">최적화된 솔루션</asd> 을 제안합니다 .
            </div>
            <div class="map">
                <div class="map_title" style="top: 294px; left: 400px; text-align: center;">
                    Make Web&Bot <br>통합솔루션
                </div>
                <div class="map_circle" style="top: 62px; left: 334px;">
                    Chatbot
                </div>
                <div class="map_circle" style="top: 252px; left: 222px;">
                    Web Design
                </div>
                <div class="map_circle" style="top: 436px; left: 344px;">
                    Media Content
                </div>
                <div class="map_circle" style="top: 436px; left: 560px;">
                    SNS최적화
                </div>
                <div class="map_circle" style="top: 252px; left: 666px;">
                    Homepage
                </div>
                <div class="map_circle" style="top: 62px; left: 560px;">
                    Website
                </div>
                <div class="map_txt" style="top: 86px; left: 196px; text-align: right;">
                    카카오톡 <br>라인 <br>페이스북 <br> 인공지능 챗봇
                </div>
                <div class="map_txt" style="top: 284px; left: 20px; text-align: right;">
                    홈페이지 제작 <br>로고/CI/BI <br>상세페이지 <br>배너/팝업/SNS 콘텐츠
                </div>
                <div class="map_txt" style="top: 484px; left: 186px; text-align: right;">
                    영상촬영 <br>영상편집 <br>모션그래픽 영상
                </div>
                <div class="map_txt" style="top: 484px; left: 758px; text-align: left;">
                    페이스북 <br>인스타그램 <br>카카오스토리 <br>네이버 밴드 <br>SNS 체험단
                </div>
                <div class="map_txt" style="top: 284px; left: 866px; text-align: left;">
                    반응형 웹사이트 <br>고급퍼블리싱 <br>소셜로그인 <br>결제연동
                </div>
                <div class="map_txt" style="top: 86px; left: 758px; text-align: left;">
                    반응형 웹사이트 <br>복잡기능 구현 <br>소셜로그인 <br>API 연동
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
<script src="js/script.js"></script>

</html>