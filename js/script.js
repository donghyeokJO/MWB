var lastScrollTop = 0;
let count1 = true;
let count2 = true;

$(window).scroll(function (event) {
    didScroll = true;
});

$(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 0);
    
});

window.onload = function() {
    $(".main_image").css({
        transform: "scale(1)",
        opacity: "1"
    });
}

$(window).on("mousewheel", (e) => {
    var st = $(this).scrollTop();
    if (st >= 0 && e.originalEvent.wheelDelta == -120) {
        $('.menu').addClass('hidden');
    } else if(st < 199 && e.originalEvent.wheelDelta == 120) {
        $('.menu').removeClass('hidden');
    }

    // if (st > 99) {
    //     $('.item:nth-child(1)').addClass('on');
    //     $('.item:nth-child(2)').addClass('on');
    // } else {
    //     $('.item:nth-child(1)').removeClass('on');
    //     $('.item:nth-child(2)').removeClass('on');
    // }
});

function m_openMenu() {
    $(".m_search, .m_menu").animate({
        top: "-10vw"
    }, 200, function() {
        $(".m_open_menu").css({
            marginLeft: "0vw"
        });
    });
}

function m_closeMenu() {
    $(".m_search, .m_menu").animate({
        top: "4vw"
    }, 200, function() {
        $(".m_open_menu").css({
            marginLeft: "-100vw"
        });
    });
}

function positionToTop() {
    $('html, body').animate({
        scrollTop: '0'
      }, 1000);
}