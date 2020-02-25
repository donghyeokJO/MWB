function home() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
}
function rules() {
    $('html, body').animate({
        scrollTop: $(".content_guide_1").offset().top
    }, 1000);
}
function amenites() {
    $('html, body').animate({
        scrollTop: $(".content_guide_2").offset().top
    }, 1000);
}

var height = $(".wrap").css("height");

$(window).scroll(function () {
    var width = $(".wrap").css("width");
    var scrollValue = $(document).scrollTop();
    if (scrollValue >= 0 && scrollValue < $(".content_guide_1").offset().top - 1) {
        $(".left_side_bar > ul > li").removeClass("on");
        $(".left_side_bar > ul > li:nth-child(1)").addClass("on");
    }
    else if (scrollValue >= $(".content_guide_1").offset().top - 1 && scrollValue < $(".content_guide_2").offset().top - 1) {
        $(".left_side_bar > ul > li").removeClass("on");
        $(".left_side_bar > ul > li:nth-child(2)").addClass("on");
    }
    else {
        $(".left_side_bar > ul > li").removeClass("on");
        $(".left_side_bar > ul > li:nth-child(3)").addClass("on");
    }
    $(".circle > img").css({
        transform: "rotate(" + (scrollValue / (height.replace("px", "") - screen.height) * 360) + "deg)"
    });
    $(".main_image").css({
        opacity: 1 - scrollValue / 500,
        transform: "translateX(-50%) scale(" + (1 - scrollValue / 3000) + ") perspective(500px) rotateX(" + scrollValue / 40 + "deg)",
        top: 252 - scrollValue / 1.5
    });
    $(".main_page_title").css({
        opacity: 1 - scrollValue / 500,
        transform: "scale(" + (1 - scrollValue / 3000) + ") perspective(500px) rotateX(" + scrollValue / 40 + "deg)",
        top: width.replace("px", "") * 0.26 - scrollValue / 1.5
    });
    if (scrollValue < 501) {
        $(".main_txt_title").css({
            top: (700 * (width.replace("px", "") / 1920) - scrollValue / 5)
        });
        $(".main_txt_title_m").css({
            top: (500 - scrollValue / 5)
        });
    }
    $(".main_txt_title>.white").css({
        opacity: 1 - scrollValue / 500
    });
    $(".main_txt_title>.black").css({
        opacity: scrollValue / 500
    });
    $(".main_txt_title_m>.white").css({
        opacity: 1 - scrollValue / 500
    });
    $(".main_txt_title_m>.black").css({
        opacity: scrollValue / 500
    });

    if (scrollValue > $(".content_guide_1").offset().top - 700) {
        $(".content_guide_1").addClass("active");
    } else {
        $(".content_guide_1").removeClass("active");
    }
    if (scrollValue > $(".content_guide_2").offset().top - 700) {
        $(".content_guide_2, .content_guide_3").addClass("active");
    } else {
        $(".content_guide_2, .content_guide_3").removeClass("active");
    }

    if (scrollValue > $(".m_content1").offset().top - 400) {
        $(".m_content1").addClass("active");
    } else {
        $(".m_content1").removeClass("active");
    }
    if (scrollValue > $(".m_content2").offset().top - 400) {
        $(".m_content2").addClass("active");
    } else {
        $(".m_content2").removeClass("active");
    }
    if (scrollValue > $(".m_content3").offset().top - 400) {
        $(".m_content3").addClass("active");
    } else {
        $(".m_content3").removeClass("active");
    }
    if (scrollValue > $(".m_content4").offset().top - 400) {
        $(".m_content4").addClass("active");
    } else {
        $(".m_content4").removeClass("active");
    }
    if (scrollValue > $(".m_content5").offset().top - 400) {
        $(".m_content5").addClass("active");
    } else {
        $(".m_content5").removeClass("active");
    }
});

function footer_open() {
    $("footer").css("width", "90%");
    $(".right_side_bar").css("transform", "rotate(0deg)");
    $(".right_side_bar>ul>li>ul>li").css("transform", "rotate(0deg)");
    $(".f_logo").css("display", "block");
    $(".f_logo").animate({
        opacity: "1"
    }, 500);
    setTimeout(function () {
        $(".footer_open").css("display", "none");
        $(".footer_close").css("display", "block");
    }, 250)
    $(".footer_close").addClass("on")
    $(".footer_content").css({
        display: "block"
    });
    setTimeout(function () {
        $(".footer_left_content > *").css({
            transform: "translateY(0)",
            opacity: 1
        });
        $(".footer_right_content").css({
            transform: "translateY(0)",
            opacity: 1
        });
        $(".footer_bg_txt").css("right", "-170px");
    }, 500);
}

function footer_close() {
    $("footer").css("width", "34px");
    $(".right_side_bar").css("transform", "rotate(-90deg)");
    $(".right_side_bar>ul>li>ul>li").css("transform", "rotate(90deg)");
    $(".f_logo").animate({
        opacity: "0"
    }, 400, function () {
        $(".f_logo").css("display", "none");
    })
    setTimeout(function () {
        $(".footer_close").css("display", "none");
        $(".footer_open").css("display", "block");
    }, 250)
    $(".footer_close").removeClass("on");
    $(".footer_content").css({
        display: "none"
    });
    setTimeout(function () {
        $(".footer_left_content > *").css({
            transform: "translateY(40px)",
            opacity: 0
        });
        $(".footer_right_content").css({
            transform: "translateY(-40px)",
            opacity: 0
        });
        $(".footer_bg_txt").css("right", "-300px");
    }, 500);
}

function left_menu_open() {
    $(".menu_logo").css("display", "block");
    setTimeout(function () {
        $(".menu_logo").css("opacity", "1");
    }, 1000)
    $(".left_menu_btn").css({
        width: "100%"
    });
    $(".left_menu_btn_m").css({
        left: "0"
    });
    $(".left_bg_txt").css({
        display: "block"
    });
    $(".menu_open").css("display", "none");
    $(".menu_close").addClass("on");
    $(".menu_close").css("display", "block");
    $(".menu_list").css("display", "block");
    $(".left_menu_link").css("display", "block");
    setTimeout(function () {
        $(".menu_list > li").css({
            transform: "translateY(0)",
            opacity: 1
        });
        $(".left_menu_link > div").css({
            transform: "translateY(0)",
            opacity: 1
        });
    }, 500);
    $(".left_menu_btn_m").addClass("active");
}

function left_menu_close() {
    $(".menu_logo").css({
        display: "none",
        opacity: "0"
    });
    $(".left_menu_btn").css("width", "0");
    $(".left_menu_btn_m").css("left", "-245px");
    $(".menu_open").css("display", "block");
    $(".menu_close").removeClass("on");
    setTimeout(function () {
        $(".menu_close").css("display", "none");
    }, 500);
    $(".menu_list").css("display", "none");
    $(".left_menu_link").css("display", "none");
    setTimeout(function () {
        $(".menu_list > li").css({
            transform: "translateY(-40px)",
            opacity: 0
        });
        $(".left_menu_link > div").css({
            transform: "translateY(40px)",
            opacity: 0
        });
    }, 500);
    setTimeout(function () {
        $(".left_bg_txt").css("display", "none");
    }, 1000);
    $(".left_menu_btn_m").removeClass("active");
}

window.onload = function () {
    // setTimeout(function () {
    //     $(".loading_page > div:nth-child(1)").css("opacity", 0.6);
    // }, 1000);
    // setTimeout(function () {
    //     $(".loading_page > div:nth-child(2)").css("opacity", 0.6);
    // }, 1500);
    // setTimeout(function () {
    //     $(".loading_page > div:nth-child(3)").css("opacity", 0.6);
    // }, 2000);
    // setTimeout(function () {
    //     $(".loading_page > div:nth-child(4)").css("opacity", 0.6);
    // }, 2500);
    // setTimeout(function () {
    //     $(".loading_page > div").css("opacity", 1);
    // }, 3000);
    // setTimeout(function () {
    //     $(".loading_page").fadeOut();
    //     $("html, body").css("overflow-y", "unset");
    //     $(".main_content1_m").addClass("active");
    // }, 4000);
    var width = $(".wrap").css("width");
    $(".loading_page").fadeOut();
    $("html, body").css("overflow-y", "unset");
    $(".main_page_title > h2").css("font-size", width.replace("px", "") / 10.1);
}