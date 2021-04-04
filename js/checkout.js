// JavaScript for the checkout page

// Adds a row to the table body listing items in the cart
function createTableRow(type, glaze, quantity, price, settings) {
    var table = document.getElementById("items"); // Select table
    var row = table.insertRow(-1); // Insert row

    // Prepare cells for each column
    var rowType = row.insertCell(0);
    var rowGlaze = row.insertCell(1);
    var rowQuantity = row.insertCell(2);
    var rowPrice = row.insertCell(3);
    var rowSettings = row.insertCell(4);

    // Add content to each cell
    rowType.innerHTML = type;
    rowGlaze.innerHTML = glaze;
    rowQuantity.innerHTML = quantity;
    rowPrice.innerHTML = price;
    rowSettings.innerHTML = settings;
}

// Removes an item from the cart
function removeItem(index) {
    var cart = JSON.parse(localStorage.getItem("cart"));
    index = parseInt(index);

    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadTable();
}

function loadTable() {
    var cart = JSON.parse(localStorage.getItem("cart"));

    if (cart === null || cart.length == 0) {
        // Show link to the menu if the cart is empty
        $("#left-col table").remove();
        $("#left-col h1").after("<p>No items in your cart! </p>");
        $("#left-col p").append("<a href='menu.html'>Go to the menu.</a>");
    } else {
        // Generate table of items in cart
        $("#items tr").remove();
        var totalCost = 0;
    
        // For each item in the cart, create a new row
        for (var i = 0; i < cart.length; i++) {
            var type = cart[i].type;
            var glaze = cart[i].glaze;
            var quantity = cart[i].quantity;
            var price = calculatePrice(glaze, quantity);
    
            createTableRow(type, glaze, quantity, "$" + price, "<h6 onclick='removeItem(" + i + ")'>DELETE</h6>");
            totalCost += price;
        }
    
        // Insert rows for tax and total cost
        tax = totalCost * 0.07;
        tax = tax.toFixed(2);
        createTableRow("", "", "<span class='sumHeader'>Tax</span>", "$" + tax, "");
        totalCost += parseFloat(tax);
        createTableRow("", "", "<span class='sumHeader'>Total</span>", "<span id='total'>$" + totalCost + "</span>", "");
    }
}

$(document).ready(function() {
    loadTable();
});