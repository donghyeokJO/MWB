function home() {
  $('html, body').animate({
    scrollTop: '0'
  }, 1000);
}

$(window).scroll(function () {
  var scrollValue = $(document).scrollTop();
  if (scrollValue < 450) {
    $(".wrap > i").css({
      color: "#fff"
    });
  }
  else {
    $(".wrap > i").css({
      color: "#000"
    });
  }
});

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
    $(".menu_close").addClass("on");
    $(".menu_close").css("display", "block");
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
    $(".menu_open").css("display", "block");
  }, 500);
  setTimeout(function () {
    $(".left_bg_txt").css("display", "none");
  }, 1000);
  $(".left_menu_btn_m").removeClass("active");
}

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
  }, 500)
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