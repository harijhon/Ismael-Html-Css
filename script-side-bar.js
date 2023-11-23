$(".sidebar-menu > ul > li").click(function(e) {
    // remove menu-open from already menu-open
    $(this).siblings().removeClass("menu-open");
    // add menu-open to clicked
    $(this).toggleClass("menu-open");

    // menu-open sub menu open/close
    $(this).find("ul").slideToggle();
    // close other sub menu if any open
    $(this).siblings().find("ul").slideUp();
    // remove menu-open class of sub menu items
    $(this).siblings().find("ul").find("li").removeClass("menu-open");
})

$(".menu-btn").click(function() {
    $(".main-sidebar").toggleClass("menu-open");
})