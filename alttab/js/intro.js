function home() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
}
function space() {
    $('html, body').animate({
        scrollTop: $(".wrap_content_1").offset().top
    }, 1000);
}
function review() {
    $('html, body').animate({
        scrollTop: $(".slide_bar").offset().top
    }, 1000);
}
function contact() {
    $('html, body').animate({
        scrollTop: $(".contact_area").offset().top
    }, 1000);
}

var height = $(".wrap").css("height");

$(window).scroll(function () {
    var width = $(".wrap").css("width");
    $(".main_page_title > h2").css("font-size", width.replace("px", "") / 10.1);
    var scrollValue = $(document).scrollTop();
    if (scrollValue >= 0 && scrollValue < $(".wrap_content_1").offset().top - 1) {
        $(".left_side_bar > ul > li").removeClass("on");
        $(".left_side_bar > ul > li:nth-child(1)").addClass("on");
    }
    else if (scrollValue >= $(".wrap_content_1").offset().top - 1 && scrollValue < $(".slide_bar").offset().top - 1) {
        $(".left_side_bar > ul > li").removeClass("on");
        $(".left_side_bar > ul > li:nth-child(2)").addClass("on");
    }
    else if (scrollValue >= $(".slide_bar").offset().top - 1 && scrollValue < $(".contact_area").offset().top - 302) {
        $(".left_side_bar > ul > li").removeClass("on");
        $(".left_side_bar > ul > li:nth-child(3)").addClass("on");
    }
    else {
        $(".left_side_bar > ul > li").removeClass("on");
        $(".left_side_bar > ul > li:nth-child(4)").addClass("on");
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
    if (scrollValue > $(".wrap_content_1").offset().top - 700) {
        $(".wrap_content_1").addClass("active");
    } else {
        $(".wrap_content_1").removeClass("active");
    }
    if (scrollValue > $(".wrap_content_2").offset().top - 700) {
        $(".wrap_content_2").addClass("active");
    } else {
        $(".wrap_content_2").removeClass("active");
    }
    if (scrollValue > $(".wrap_content_3").offset().top - 700) {
        $(".wrap_content_3").addClass("active");
    } else {
        $(".wrap_content_3").removeClass("active");
    }
    if (scrollValue > $(".wrap_content_4").offset().top - 700) {
        $(".wrap_content_4").addClass("active");
    } else {
        $(".wrap_content_4").removeClass("active");
    }
    if (scrollValue > $(".wrap_content_5").offset().top - 700) {
        $(".wrap_content_5").addClass("active");
    } else {
        $(".wrap_content_5").removeClass("active");
    }
    if (scrollValue > $(".tel_plz").offset().top - 700) {
        $(".tel_plz").addClass("active");
    } else {
        $(".tel_plz").removeClass("active");
    }
    if (scrollValue > $(".contact_area").offset().top - 700) {
        $(".contact_area").addClass("active");
    } else {
        $(".contact_area").removeClass("active");
    }
    if (scrollValue > $(".end_txt").offset().top - 700) {
        $(".end_txt").addClass("active");
    } else {
        $(".end_txt").removeClass("active");
    }

    if (scrollValue > $(".m_content_1").offset().top - 500) {
        $(".m_content_1").addClass("active");
    } else {
        $(".m_content_1").removeClass("active");
    }
    if (scrollValue > $(".m_content_2").offset().top - 500) {
        $(".m_content_2").addClass("active");
    } else {
        $(".m_content_2").removeClass("active");
    }
    if (scrollValue > $(".m_content_3").offset().top - 500) {
        $(".m_content_3").addClass("active");
    } else {
        $(".m_content_3").removeClass("active");
    }
    if (scrollValue > $(".m_content_4").offset().top - 500) {
        $(".m_content_4").addClass("active");
    } else {
        $(".m_content_4").removeClass("active");
    }
    if (scrollValue > $(".tel_plz_m").offset().top - 500) {
        $(".tel_plz_m").addClass("active");
    } else {
        $(".tel_plz_m").removeClass("active");
    }
    if (scrollValue > $(".contact_area_m").offset().top - 500) {
        $(".contact_area_m").addClass("active");
    } else {
        $(".contact_area_m").removeClass("active");
    }
    if (scrollValue > $(".end_txt_m").offset().top - 700) {
        $(".end_txt_m").addClass("active");
    } else {
        $(".end_txt_m").removeClass("active");
    }
});

setInterval(function () {
    $(".slide_area > div:nth-child(1)").clone().appendTo(".slide_area");
    $(".slide_area > div:nth-child(1)").animate({
        "marginLeft": "-486.5px"
    }, 300, function () {
        $("div").remove(".slide_area > div:nth-child(1)");
    });
    $(".slide_area_m > div:nth-child(1)").clone().appendTo(".slide_area_m");
    $(".slide_area_m > div:nth-child(1)").animate({
        "marginLeft": "-486.5px"
    }, 300, function () {
        $("div").remove(".slide_area_m > div:nth-child(1)");
    });
}, 3000);

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
    $(".main_content1_m").addClass("active");
    $(".main_page_title > h2").css("font-size", width.replace("px", "") / 10.1);
}