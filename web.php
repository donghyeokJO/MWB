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
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="css/web.css">
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
                xfbml: true,
                version: 'v5.0'
            });
        };

        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/ko_KR/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    </script>

    <!-- Your customer chat code -->
    <div class="fb-customerchat" attribution=setup_tool page_id="107624977408119" theme_color="#778899" logged_in_greeting="안녕하세요, 웹 사이트 & 챗봇 토탈 솔루션 Make Web & Bot입니다. " logged_out_greeting="안녕하세요, 웹 사이트 & 챗봇 토탈 솔루션 Make Web & Bot입니다. ">
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
                        <div class="bar" style="width: 100%;"></div>
                    </li>
                    <li>
                        <a href="#" onclick="location.href='about'">ABOUT US</a>
                        <div class="bar"></div>
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
                MWB Website Service
            </div>
            <div class="desc">
                홈페이지를 통해 브랜딩을 완성하세요.
            </div>
        </div>
        <!-- <div class="main_list_bg">
            <div class="main_list">
                <div class="item on">
                    <div class="item_title">
                        적은 팀원으로 최대의 업무효율!
                    </div>
                    <div class="item_contents ic1">
                        <div>✔︎ 챗봇을 통한 상담진행속도와 응대효율 개선</div>
                        <div>✔︎ [건당 처리비용] (인건비, 장비, 운영비용 포함)</div>
                        <div>채팅 1,453원 < 콜 1,840원</div> <div>✔︎ [사용시간] (동일 사용자 수 기준)</div>
                        <div>카카오톡 460억분 사용 VS 스마트폰 통화 21.5억분</div>
                    </div>
                </div>
                <div class="item on">
                    <div class="item_title">
                        고객 만족도 향상
                    </div>
                    <div class="item_contents ic2">
                        <div>✔︎ 택배배송조회, 쇼핑몰 정보조회 서비스등</div>
                        <div>API연동을 통해 다양한 정보를 고객에게 제공</div>
                        <div>✔︎ 24시간 인공지능 채팅상담으로 브랜드 가치 향상</div>
                        <div>✔︎ 다양한 서비스 제공을 통한 SNS 채널의 고객체류시간 증가</div>
                    </div>
                    <div class="m_main_list_bg"></div>
                </div>
            </div>
        </div> -->
        <div class="web">
            <div class="temp_btn" onclick="location.href='temp_list.html'">
                템플릿 보러가기 >
            </div>
            <div class="web_title">
                <div class="big">“</div>
                <div class="w_title_txt">홈페이지 제작을 위해 아래의 사항을 준비해주세요</div>
                <div class="big">”</div>
            </div>
            <div class="chatbot_bar"></div>
            <div class="chatbot_contents">
                <div class="part">
                    <div class="part_title">
                        기능 예산은 어느정도 인가요?
                    </div>
                    <div class="part_contents">
                        ✔︎&nbsp;&nbsp;예산에 가장 큰 영향을 주는 것은 페이지 수, 페이지 효과, 추가 기능입니다.
                    </div>
                </div>
                <div class="part">
                    <div class="part_title">
                        페이지수는 몇 개 정도 생각하시나요?
                    </div>
                    <div class="part_contents">
                        ✔︎&nbsp;&nbsp;원페이지 혹은 버튼 클릭시 나오는 페이지를 생각해보세요. <br>
                        ✔︎&nbsp;&nbsp;페이지에 들어갈 효과도 같이 고민해 오시면 더욱 좋습니다.
                    </div>
                </div>
                <div class="part">
                    <div class="part_title">
                        추가적으로 원하는 기능이 있으신가요?
                    </div>
                    <div class="part_contents">
                        ✔︎&nbsp;&nbsp;벤치마킹할 사이트를 제시해주시면 보다 원활한 상담이 가능합니다. <br>
                        ✔︎&nbsp;&nbsp;컨텐츠 업로드 기능, 전문분석 TOOL, 1:1 채팅상담, 다국어 버전 웹 사이트 구현 등
                        필요한 기능을 생각해오시면 더욱 좋습니다.
                    </div>
                </div>
                <div class="contact_btn" onclick="window.open('about:blank').location.href='https://m.me/makewebnbot'">문의하기 ></div>
            </div>
            <div class="chat_bar"></div>
            <div class="pay">
                <div class="pay_title">
                    정기결제 이용하기
                </div>
                <div class="vat">
                    *VAT포함
                </div>
                <div class="won">
                    <div id="starter" style = "text-decoration:none">33,000원/월</div>
                    <div id="basic" style = "text-decoration:none">55,000원/월</div>
                    <div id="pro" style = "text-decoration:none">77,000원/월</div>
                </div>
            </div>
        </div>
        <footer>
            <div id="footer_02">
                <div class="row justify-content-start align-items-between">
                    <div class="col-12 col-sm-6 font_size_xl font_weight_b"><a href="index" style="text-decoration:none; color:#FFFFFF">MAKE WEB&BOT</a></div>
                    <div class="col-12 col-sm-5" style="line-height: 1.79;">
                        Tel. 050 7343 2605<br />
                        E-mail. support@eszett.co.kr<br />
                        상호 : 에스체트(eszett)<br />
                        대표 : 이승준 <br />
                        소재지 : 서울특별시 강남구 강남대로 364 미왕빌딩 16층<br />
                        사업자등록번호 : 308-13-51102
                    </div>
                    <div class="col-12 col-sm-1 tablet" onclick="positionToTop()">
                        <svg class="cursor_pointer" style="fill: #fff;transform: rotate(270deg);width: 50px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                        </svg>
                    </div>
                    <div class="col-12 col-sm-5 margin_top_l mobile">
                        <span><a href="../member/privacy" style="color:#FFFFFF">개인정보취급방침</a></span><span style="padding: 0 10px">|</span><span><a href="../member/terms" style="color:#FFFFFF">이용약관</a></span>
                    </div>
                    <div class="col-12 col-sm-6 margin_top_l">
                        Copyright ⓒ 2019 eszett All Rights Reserved
                    </div>
                    <div class="col-12 col-sm-5 margin_top_l tablet">
                        <span><a href="../member/privacy" style="color:#FFFFFF">개인정보취급방침</a></span><span style="padding: 0 10px">|</span><span><a href="../member/terms" style="color:#FFFFFF">이용약관</a></span>
                    </div>
                </div>
                <div class="col-12 col-sm-1 mobile" onclick="positionToTop()" style="position: absolute;top: 32px;text-align: right;">
                    <svg class="cursor_pointer" style="fill: #fff;transform: rotate(270deg);width: 50px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                    </svg>
                </div>
            </div>
        </footer>
    </div>
</body>
<script src="https://kit.fontawesome.com/c3089a3225.js" crossorigin="anonymous"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="js/script.js"></script>
<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
</script>
<script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"></script>
<script>
    $("#starter").click(function() {

        var IMP = window.IMP;
        var login = "<?php echo $login; ?>";
        // alert(login)
        if (!login) {
            alert('로그인 해주세요.')
            window.location.href= 'signin';

        } else {
            var merchant = 'merchant_' + new Date().getTime();
            var customer = 'customer_' + "<?php echo $user['u_id']; ?>";
            IMP.init('imp78205218');
            IMP.request_pay({
                pg: "html5_inicis.MOImakbill", // 실제 계약 후에는 실제 상점아이디로 변경
                pay_method: 'card', // 'card'만 지원됩니다.
                merchant_uid: merchant,
                name: '정기결제 - 33000원',
                amount: 0, // 결제창에 표시될 금액. 실제 승인이 이뤄지지는 않습니다. (모바일에서는 가격이 표시되지 않음)
                customer_uid: customer, //customer_uid 파라메터가 있어야 빌링키 발급을 시도합니다.

            }, function(rsp) {
                console.log(rsp);
                if (rsp.success) {
                    window.location.href = "/billing/bill.php?customer_uid=" + customer + "amount=" + 33000 + "merchant_uid=" + merchant;
                } else {
                    alert(rsp.error_msg);
                    console.error(rsp)
                }
            });
        }
    });

    $("#basic").click(function() {

        var IMP = window.IMP;
        var login = "<?php echo $login; ?>";
        // alert(login)
        if (!login) {
            alert('로그인 해주세요.')
            window.location.href= 'signin';

        } else {
            var merchant = 'merchant_' + new Date().getTime();
            var customer = 'customer_' + "<?php echo $user['u_id']; ?>";
            IMP.init('imp78205218');
            IMP.request_pay({
                pg: "html5_inicis.MOImakbill", // 실제 계약 후에는 실제 상점아이디로 변경
                pay_method: 'card', // 'card'만 지원됩니다.
                merchant_uid: merchant,
                name: '정기결제 - 0원',
                amount: 55000, // 결제창에 표시될 금액. 실제 승인이 이뤄지지는 않습니다. (모바일에서는 가격이 표시되지 않음)
                customer_uid: customer, //customer_uid 파라메터가 있어야 빌링키 발급을 시도합니다.

            }, function(rsp) {
                console.log(rsp);
                if (rsp.success) {
                    window.location.href = "/billing/bill.php?customer_uid=" + customer + "amount=" + 55000 + "&merchant_uid=" + merchant;
                } else {
                    alert(rsp.error_msg);
                    console.error(rsp)
                }
            });
        }
    });

    $("#pro").click(function() {

        var IMP = window.IMP;
        var login = "<?php echo $login; ?>";
        // alert(login)
        if (!login) {
            alert('로그인 해주세요.')
            window.location.href= 'signin';

        } else {
            var merchant = 'merchant_' + new Date().getTime();
            var customer = 'customer_' + "<?php echo $user['u_id']; ?>";
            IMP.init('imp78205218');
            IMP.request_pay({
                pg: "html5_inicis.MOImakbill", // 실제 계약 후에는 실제 상점아이디로 변경
                pay_method: 'card', // 'card'만 지원됩니다.
                merchant_uid: merchant,
                name: '정기결제 - 77000원',
                amount: 0, // 결제창에 표시될 금액. 실제 승인이 이뤄지지는 않습니다. (모바일에서는 가격이 표시되지 않음)
                customer_uid: customer, //customer_uid 파라메터가 있어야 빌링키 발급을 시도합니다.

            }, function(rsp) {
                console.log(rsp);
                if (rsp.success) {
                    window.location.href = "/billing/bill.php?customer_uid=" + customer + "amount=" + 77000 + "&merchant_uid=" + merchant;
                } else {
                    alert(rsp.error_msg);
                    console.error(rsp)
                }
            });
        }
    });
</script>

</html>