function home() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
}
function space() {
    $('html, body').animate({
        scrollTop: $(".wrap_left_1").offset().top
    }, 1000);
}
function concept() {
    $('html, body').animate({
        scrollTop: $(".concept").offset().top
    }, 1000);
}
function contact() {
    $('html, body').animate({
        scrollTop: $(".contact").offset().top
    }, 1000);
}

var width = $(".wrap").css("width");
var height = $(".wrap").css("height");

$(window).scroll(function () {
    var scrollValue = $(document).scrollTop();
    if (scrollValue >= 0 && scrollValue < $(".wrap_left_1").offset().top - 1) {
        $(".left_side_bar > ul > li").removeClass("on");
        $(".left_side_bar > ul > li:nth-child(1)").addClass("on");
    }
    else if (scrollValue >= $(".wrap_left_1").offset().top - 1 && scrollValue < $(".concept").offset().top - 1) {
        $(".left_side_bar > ul > li").removeClass("on");
        $(".left_side_bar > ul > li:nth-child(2)").addClass("on");
    }
    else if (scrollValue >= $(".concept").offset().top - 1 && scrollValue < $(".contact").offset().top - 202) {
        $(".left_side_bar > ul > li").removeClass("on");
        $(".left_side_bar > ul > li:nth-child(3)").addClass("on");
    }
    else {
        $(".left_side_bar > ul > li").removeClass("on");
        $(".left_side_bar > ul > li:nth-child(4)").addClass("on");
    }
    $(".main_page_title > h2").css("font-size", width.replace("px", "") / 10.1);
    $(".circle > img").css({
        transform: "rotate(" + (scrollValue / (height.replace("px", "") - screen.height) * 360) + "deg)"
    });
    $(".main_image").css({
        opacity: 1 - scrollValue / 500,
        transform: "translateX(-50%) scale(" + (1 - scrollValue / 3000) + ") perspective(500px) rotateX(" + scrollValue / 40 + "deg)",
        top: 252 - scrollValue / 1.5
    });
    $(".main_image_m").css({
        opacity: 1 - scrollValue / 500,
        transform: "translateX(-50%) scale(" + (1 - scrollValue / 3000) + ") perspective(500px) rotateX(" + scrollValue / 40 + "deg)",
        top: 129 - scrollValue / 1.5
    });
    if (scrollValue < 501) {
        $(".main_txt_title").css({
            top: (450 - scrollValue / 5)
        });
        $(".main_txt_title_m").css({
            top: (280 - scrollValue / 5)
        })
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
    if (scrollValue > $(".wrap_left_1").offset().top - 900) {
        $(".wrap_left_1").addClass("active");
        countNumber(9, $(".bn1.off"), 1000);
        $(".bn1.off").removeClass("off").addClass("on");
        countNumber(100, $(".bn2.off"), 3000);
        $(".bn2.off").removeClass("off").addClass("on");
    }
    else {
        $(".wrap_left_1").removeClass("active");
        $(".bn1.on").removeClass("on").addClass("off");
        $(".bn2.on").removeClass("on").addClass("off");
    }
    if (scrollValue > $(".wrap_right_2").offset().top - 900) {
        $(".wrap_right_2").addClass("active");
    }
    else {
        $(".wrap_right_2").removeClass("active");
    }
    if (scrollValue > $(".wrap_left_3").offset().top - 900) {
        $(".wrap_left_3").addClass("active");
    }
    else {
        $(".wrap_left_3").removeClass("active");
    }
    if (scrollValue > $(".wrap_right_3").offset().top - 900) {
        $(".wrap_right_3").addClass("active");
    }
    else {
        $(".wrap_right_3").removeClass("active");
    }
    if (scrollValue > $(".contact_img").offset().top - 900) {
        $(".contact_img").addClass("active");
        $(".contact_btn_list").addClass("active");
    }
    else {
        $(".contact_img").removeClass("active");
        $(".contact_btn_list").removeClass("active");
    }
    if (scrollValue > $(".contact_img_m").offset().top - 900) {
        $(".contact_img_m").addClass("active");
        $(".contact_btn_list_m").addClass("active");
    }
    else {
        $(".contact_img_m").removeClass("active");
        $(".contact_btn_list_m").removeClass("active");
    }
    if (scrollValue > 1) {
        countNumber(9, $(".bn1_m.off"), 1000);
        $(".bn1_m.off").removeClass("off").addClass("on");
        countNumber(100, $(".bn2_m.off"), 3000);
        $(".bn2_m.off").removeClass("off").addClass("on");
        $(".main_content2_m").addClass("active");
    }
    else {
        $(".bn1_m.on").removeClass("on").addClass("off");
        $(".bn2_m.on").removeClass("on").addClass("off");
        $(".main_content2_m").removeClass("active");
    }
    if (scrollValue > $(".main_content3_m").offset().top - 900) {
        $(".main_content3_m").addClass("active");
    } else {
        $(".main_content3_m").removeClass("active");
    }
    if (scrollValue > $(".main_content4_m").offset().top - 900) {
        $(".main_content4_m").addClass("active");
    } else {
        $(".main_content4_m").removeClass("active");
    }
    if (scrollValue > $(".main_content5_m").offset().top - 900) {
        $(".main_content5_m").addClass("active");
    } else {
        $(".main_content5_m").removeClass("active");
    }
    if (scrollValue > $(".more").offset().top - 900) {
        $(".more").addClass("active");
    } else {
        $(".more").removeClass("active");
    }
    if (scrollValue > $(".more_m").offset().top - 900) {
        $(".more_m").addClass("active");
    } else {
        $(".more_m").removeClass("active");
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
    footer_close();
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

function countNumber(num, dom, time) {
    //1초에 30번 실행하며 애니메이션
    var term = num * 1000 / 50 / time;
    var now = 0;
    let timer = setInterval(() => {
        now += term;
        if (now >= num) {
            now = num;
            clearInterval(timer);
        }
        dom.html(Math.floor(now).toLocaleString());

    }, 1000 / 50);
}

var asdf1234 = true;

function conceptPrev() {
    if (asdf1234) {
        asdf1234 = false;
        $(".concept_slide_area > div:nth-child(9)").css({ width: "0", margin: "0" });
        $(".concept_slide_area > div:nth-child(9)").clone().prependTo(".concept_slide_area");
        $(".concept_slide_area > div:nth-child(1)").animate({
            "width": "389px",
            "margin": "0 39px"
        }, 300, function () {
            $("div").remove(".concept_slide_area > div:nth-child(10)");
        });
        $(".concept_slide_area_m > div:nth-child(9)").css({ width: "0", margin: "0" });
        $(".concept_slide_area_m > div:nth-child(9)").clone().prependTo(".concept_slide_area_m");
        $(".concept_slide_area_m > div:nth-child(1)").animate({
            "width": "234px",
            "margin": "0 10px"
        }, 300, function () {
            $("div").remove(".concept_slide_area_m > div:nth-child(10)");
        });
        setTimeout(function () {
            asdf1234 = true;
        }, 1000);
    }
}

function conceptNext() {
    if (asdf1234) {
        asdf1234 = false;
        $(".concept_slide_area > div:nth-child(1)").clone().appendTo(".concept_slide_area");
        $(".concept_slide_area > div:nth-child(1)").animate({
            "marginLeft": "-428px"
        }, 300, function () {
            $("div").remove(".concept_slide_area > div:nth-child(1)");
        });
        $(".concept_slide_area_m > div:nth-child(1)").clone().appendTo(".concept_slide_area_m");
        $(".concept_slide_area_m > div:nth-child(1)").animate({
            "marginLeft": "-244px"
        }, 300, function () {
            $("div").remove(".concept_slide_area_m > div:nth-child(1)");
        });
        setTimeout(function () {
            asdf1234 = true;
        }, 1000);
    }
}

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
    setTimeout(function () {
        $(".loading_page > div:nth-child(1)").css("opacity", 0.6);
    }, 1000);
    setTimeout(function () {
        $(".loading_page > div:nth-child(2)").css("opacity", 0.6);
    }, 1500);
    setTimeout(function () {
        $(".loading_page > div:nth-child(3)").css("opacity", 0.6);
    }, 2000);
    setTimeout(function () {
        $(".loading_page > div:nth-child(4)").css("opacity", 0.6);
    }, 2500);
    setTimeout(function () {
        $(".loading_page > div").css("opacity", 1);
    }, 3000);
    setTimeout(function () {
        $(".loading_page").fadeOut();
        $("html, body").css("overflow-y", "unset");
        $(".main_content1_m").addClass("active");
    }, 4000);
    // $(".loading_page").fadeOut();
    // $("html, body").css("overflow-y", "unset");
    $(".main_content1_m").addClass("active");
    $(".main_page_title > h2").css("font-size", width.replace("px", "") / 10.1);
}

function home() {
    $('html, body').animate({
        scrollTop: '0'
    }, 1000);
}