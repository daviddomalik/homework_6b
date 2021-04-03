// JavaScript for product details pages

// Updates price listed on page based on glaze and quantity values
function updatePrice() {
    var glaze = $("#glaze").val();
    var quantity = $("#quantity").val();
    var price = calculatePrice(glaze, quantity);

    $("#price").text("$" + price);
}

$(document).ready(function() {
    // Update price on page load
    updatePrice();

    // Open accordion when clicked
    $(".accordion").each(function() {
        $(this).click(function() {
            $(this).toggleClass("active-accordion");
            $(this).next(".panel").toggleClass("open");
        });
    });

    // Update price whenever the glaze is changed
    $("#glaze").change(function() {
        updatePrice();
    });
    
    // Update price whenever the quantity is changed
    $("#quantity").change(function() {
        updatePrice();
    });
});

