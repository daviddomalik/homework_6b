// JavaScript for product details pages

// Updates price listed on page based on glaze and quantity values
function updatePrice() {
    var glaze = $("#glaze").val();
    var quantity = $("#quantity").val();
    var price;
    
    switch(quantity) {
        case "1":
            price = 2;
            break;
        case "3":
            price = 5;
            break;
        case "6":
            price = 9;
            break;
        case "12":
            price = 16;
            break;
    }

    if (glaze !== 'None') {
        price += 1;
    }

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

