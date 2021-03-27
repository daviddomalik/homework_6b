// JavaScript for the menu page

$(document).ready(function() {
    // Apply active class to hovered item
    $(".item").hover(function() {
        $(this).toggleClass("active");
    })
});