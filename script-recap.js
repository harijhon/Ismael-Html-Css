$("#filter-btn").click(function() {
    $(".filter-section").toggleClass("inactive");
    $(".table-section").toggleClass("pop-up_active");
    if (!$(".recap-section").hasClass("inactive")) {
        $(".recap-section").addClass("inactive");
    }
})

$("#recap-btn").click(function() {
    $(".recap-section").toggleClass("inactive");
    $(".table-section").toggleClass("pop-up_active");
    if (!$(".filter-section").hasClass("inactive")) {
        $(".filter-section").addClass("inactive");
    }
})