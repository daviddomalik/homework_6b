// Dictionaries to match cinnamon roll types to images
var images = {
    "original": "rolls1.jpg",
    "walnut": "rolls2.png",
    "caramel pecan": "rolls3.jpg",
    "pumpkin spice": "rolls4.jpg",
    "blackberry": "rolls5.jpg",
    "gluten-free": "rolls6.jpg",
}

var image_alts = {
    "original": "Original Roll",
    "walnut": "Walnut Roll",
    "caramel pecan": "Caramel Pecan Roll",
    "pumpkin spice": "Pumpkin Spice Roll",
    "blackberry": "Blackberry Roll",
    "gluten-free": "Gluten-Free Roll",
}

// Object declaration
function Roll(type, glaze, quantity) {
    this.type = type;
    this.image = "img/" + images[type];
    this.image_alt = image_alts[type];
    this.glaze = glaze;
    this.quantity = quantity;
}

// Pulls data about new order added to cart from product details pages
function addToCart(type) {
    var glaze = $("#glaze").val();
    var quantity = $("#quantity").val();

    post(type, glaze, quantity);
}

function calculatePrice(glaze, quantity) {
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

    return price;
}

// Pushes new rolls to cart array
function post(type, glaze, quantity) {
    cart = JSON.parse(localStorage.getItem("cart"));
    cart.push(new Roll(type, glaze, quantity));
    localStorage.setItem("cart", JSON.stringify(cart));
    $("#count").text(cart.length + " items");
}

$(document).ready(function() {
    var cart = JSON.parse(localStorage.getItem("cart"));

    if (cart === null) {
        cart = Array();
        localStorage.setItem("cart", JSON.stringify(cart));
    } else {
        $("#count").text(cart.length + " items");
    }
});