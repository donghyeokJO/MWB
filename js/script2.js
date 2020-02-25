function m_menu_open() {
    $(".m_menu_page").animate({
        left: "0"
    }, 500);
}

function m_menu_close() {
    $(".m_menu_page").animate({
        left: "-100vw"
    }, 500);
}

function positionToBottom() {
    $('html, body').animate({
        scrollTop: '13000px'
    }, 1000);
}

function positionToBottom_m() {
    $('html, body').animate({
        scrollTop: '4630px'
    }, 1000);
}

function positionToTop() {
    $('html, body').animate({
        scrollTop: '0'
    }, 1000);
}