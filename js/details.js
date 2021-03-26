$(document).ready(function() {
    $(".accordion").each(function() {
        $(this).click(function() {
            $(this).toggleClass("active-accordion");
            $(this).next(".panel").toggleClass("open");
        })
    })
});