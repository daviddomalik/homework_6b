function createTableRow(type, glaze, quantity, price, settings) {
    var table = document.getElementById("items");
    var row = table.insertRow(-1);
    var rowType = row.insertCell(0);
    var rowGlaze = row.insertCell(1);
    var rowQuantity = row.insertCell(2);
    var rowPrice = row.insertCell(3);
    var rowSettings = row.insertCell(4);
    rowType.innerHTML = type;
    rowGlaze.innerHTML = glaze;
    rowQuantity.innerHTML = quantity;
    rowPrice.innerHTML = price;
    rowSettings.innerHTML = settings;
}

function removeItem(index) {
    var cart = JSON.parse(localStorage.getItem("cart"));
    index = parseInt(index);
    cart.splice(index, 1);
    console.log(index);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadTable();
}

function loadTable() {
    var cart = JSON.parse(localStorage.getItem("cart"));

    if (cart === null || cart.length == 0) {
        $("#left-col table").remove();
        $("#left-col h1").after("<p>No items in your cart! </p>");
        $("#left-col p").append("<a href='menu.html'>Go to the menu.</a>");
    } else {
        $("#items tr").remove();
        var totalCost = 0;
    
        for (var i = 0; i < cart.length; i++) {
            var type = cart[i].type;
            var glaze = cart[i].glaze;
            var quantity = cart[i].quantity;
            var price = calculatePrice(glaze, quantity);
    
            createTableRow(type, glaze, quantity, "$" + price, "<h6 onclick='removeItem(" + i + ")'>DELETE</h6>");
            totalCost += price;
        }
    
        tax = totalCost * 0.07;
        tax = tax.toFixed(2);
        createTableRow("", "", "<span class='sumHeader'>Tax</span>", "$" + tax, "");
        totalCost += tax;
        createTableRow("", "", "<span class='sumHeader'>Total</span>", "<span id='total'>$" + totalCost + "</span>", "");
    }
}

$(document).ready(function() {
    loadTable();
});