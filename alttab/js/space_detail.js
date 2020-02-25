function home() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
}
function space() {
    $('html, body').animate({
        scrollTop: $(".gallery_area").offset().top
    }, 1000);
}

function price() {
    $('html, body').animate({
        scrollTop: $(".info_detail").offset().top - 200
    }, 1000);
}
function satisfy() {
    $('html, body').animate({
        scrollTop: $(".banner").offset().top
    }, 1000);
}

var height = $(".wrap").css("height");

$(window).scroll(function () {
    var width = $(".wrap").css("width");
    $(".main_txt_title h2").css("font-size", width.replace("px", "") / 10.1);
    var scrollValue = $(document).scrollTop();
    if (scrollValue >= 0 && scrollValue < $(".gallery_area").offset().top - 1) {
        $(".left_side_bar > ul > li").removeClass("on");
        $(".left_side_bar > ul > li:nth-child(1)").addClass("on");
    }
    else if (scrollValue >= $(".gallery_area").offset().top - 1 && scrollValue < $(".info_detail").offset().top - 201) {
        $(".left_side_bar > ul > li").removeClass("on");
        $(".left_side_bar > ul > li:nth-child(2)").addClass("on");
    }
    else if (scrollValue >= $(".info_detail").offset().top - 201 && scrollValue < $(".banner").offset().top - 712) {
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
    if (scrollValue > $(".info_detail").offset().top - 700) {
        $(".info_detail").addClass("active");
    } else {
        $(".info_detail").removeClass("active");
    }
    if (scrollValue > $(".info_detail_m").offset().top - 700) {
        $(".info_detail_m").addClass("active");
    } else {
        $(".info_detail_m").removeClass("active");
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

    $(".gallery_area_left > .gallery_img_area > .img_area:last-child").clone().prependTo(".gallery_area_left > .gallery_img_area");
    $("div").remove(".gallery_area_left > .gallery_img_area > .img_area:last-child");

    $(".gallery_area_right > .gallery_img_area > .img_area:first-child").clone().appendTo(".gallery_area_right > .gallery_img_area");
    $("div").remove(".gallery_area_right > .gallery_img_area > .img_area:first-child");

    var img1 = $(".pc_wrap .gallery_area_main > .gallery_img_area > .img_area > img");
    var img2 = $(".mobile_wrap .gallery_area_main > .gallery_img_area > .img_area > img");
    for (var i = 0; i < img1.length; i++) {
        if (i == 0) {
            $(img1[i]).addClass((1) + "");
            $(img2[i]).addClass((1) + "");
        } else {
            $(img1[i]).addClass((i + 1) + "");
            $(img2[i]).addClass((i + 1) + "");
        }
    }
}

var asdf1234 = true;
var tab_num;

function conceptPrev() {
    if (asdf1234) {
        asdf1234 = false;
        $(".gallery_area_left > .gallery_img_area > .img_area:last-child").css("width", "0");
        $(".gallery_area_left > .gallery_img_area > .img_area:last-child").clone().prependTo(".gallery_area_left > .gallery_img_area");
        $(".gallery_area_left > .gallery_img_area > .img_area:first-child").animate({
            "width": "71.22vw"
        }, 300, function () {
            $("div").remove(".gallery_area_left > .gallery_img_area > .img_area:last-child");
        });
        $(".gallery_area_main > .gallery_img_area > .img_area:last-child").css("width", "0");
        $(".pc_wrap .gallery_area_main > .gallery_img_area > .img_area:last-child").clone().prependTo(".pc_wrap .gallery_area_main > .gallery_img_area");
        $(".mobile_wrap .gallery_area_main > .gallery_img_area > .img_area:last-child").clone().prependTo(".mobile_wrap .gallery_area_main > .gallery_img_area");
        $(".pc_wrap .gallery_area_main > .gallery_img_area > .img_area:first-child").animate({
            "width": "71.22vw"
        }, 300, function () {
            $("div").remove(".pc_wrap .gallery_area_main > .gallery_img_area > .img_area:last-child");
        });
        $(".mobile_wrap .gallery_area_main > .gallery_img_area > .img_area:first-child").animate({
            "width": "100vw"
        }, 300, function () {
            $("div").remove(".mobile_wrap .gallery_area_main > .gallery_img_area > .img_area:last-child");
        });
        $(".gallery_area_right > .gallery_img_area > .img_area:last-child").css("width", "0");
        $(".gallery_area_right > .gallery_img_area > .img_area:last-child").clone().prependTo(".gallery_area_right > .gallery_img_area");
        $(".gallery_area_right > .gallery_img_area > .img_area:first-child").animate({
            "width": "71.22vw"
        }, 300, function () {
            $("div").remove(".gallery_area_right > .gallery_img_area > .img_area:last-child");
        });
        setTimeout(function () {
            tab_num = $(".gallery_area_main > .gallery_img_area > .img_area:first-child > img").attr("class");
            console.log(tab_num)
            $(".gallery_tab > .gallery_tab_btn > .gallery_tab_btn_bg").removeClass("on");
            $(".gallery_tab > .gallery_tab_btn:nth-child(" + tab_num + ") > .gallery_tab_btn_bg").addClass("on");
        }, 350);
        setTimeout(function () {
            asdf1234 = true;
        }, 1000);
    }
}

function conceptNext() {
    if (asdf1234) {
        asdf1234 = false;
        $(".gallery_area_left > .gallery_img_area > .img_area:first-child").clone().appendTo(".gallery_area_left > .gallery_img_area");
        $(".gallery_area_left > .gallery_img_area > .img_area:first-child").animate({
            "width": "0"
        }, 300, function () {
            $("div").remove(".gallery_area_left > .gallery_img_area > .img_area:first-child");
        });
        $(".pc_wrap .gallery_area_main > .gallery_img_area > .img_area:first-child").clone().appendTo(".pc_wrap .gallery_area_main > .gallery_img_area");
        $(".mobile_wrap .gallery_area_main > .gallery_img_area > .img_area:first-child").clone().appendTo(".mobile_wrap .gallery_area_main > .gallery_img_area");
        $(".pc_wrap .gallery_area_main > .gallery_img_area > .img_area:first-child").animate({
            "width": "0"
        }, 300, function () {
            $("div").remove(".pc_wrap .gallery_area_main > .gallery_img_area > .img_area:first-child");
        });
        $(".mobile_wrap .gallery_area_main > .gallery_img_area > .img_area:first-child").animate({
            "width": "0"
        }, 300, function () {
            console.log(1)
            $("div").remove(".mobile_wrap .gallery_area_main > .gallery_img_area > .img_area:first-child");
        });
        $(".gallery_area_right > .gallery_img_area > .img_area:first-child").clone().appendTo(".gallery_area_right > .gallery_img_area");
        $(".gallery_area_right > .gallery_img_area > .img_area:first-child").animate({
            "width": "0"
        }, 300, function () {
            $("div").remove(".gallery_area_right > .gallery_img_area > .img_area:first-child");
        });
        setTimeout(function () {
            tab_num = $(".gallery_area_main > .gallery_img_area > .img_area:first-child > img").attr("class");
            console.log(tab_num)
            $(".gallery_tab > .gallery_tab_btn > .gallery_tab_btn_bg").removeClass("on");
            $(".gallery_tab > .gallery_tab_btn:nth-child(" + tab_num + ") > .gallery_tab_btn_bg").addClass("on");
        }, 350);
        setTimeout(function () {
            asdf1234 = true;
        }, 1000);
    }
}