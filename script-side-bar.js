$(".menu > ul > li").click(function(e) {
    // remove active from already active
    $(this).siblings().removeClass("active");
    // add active to clicked
    $(this).toggleClass("active");

    // active sub menu open/close
    $(this).find("ul").slideToggle();
    // close other sub menu if any open
    $(this).siblings().find("ul").slideUp();
    // remove active class of sub menu items
    $(this).siblings().find("ul").find("li").removeClass("active");
})

$(".menu-btn").click(function() {
    $(".sidebar").toggleClass("active");
})