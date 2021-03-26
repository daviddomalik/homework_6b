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

function Roll(type, glaze, quantity) {
    this.type = type;
    this.image = "img/" + images[type];
    this.image_alt = image_alts[type];
    this.glaze = glaze;
    this.quantity = quantity;
}

var cart = Array();

function addToCart(type) {
    var glaze = $("#glaze").val();
    var quantity = $("#quantity").val();
    post(type, glaze, quantity);
}

function post(type, glaze, quantity) {
    cart.push(new Roll(type, glaze, quantity));
    localStorage.setItem("cart", JSON.stringify(cart));
    $("#count").text(cart.length + " items");
}

$(document).ready(function() {
    if (cart !== null) {
        cart = JSON.parse(localStorage.getItem("cart"));
        $("#count").text(cart.length + " items");
    }
});