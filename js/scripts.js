function Pizza(size, toppings, quantity) {
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
  this.pizzaQuantity = quantity;
}

Pizza.prototype.pizzaPrice = function() {
  var price = 0;

  if (this.pizzaSize == "Small") {
    price += 5;
  } else if (this.pizzaSize == "Medium") {
    price += 10;
  } else if (this.pizzaSize == "Large") {
    price += 15;
  }

  if (this.pizzaToppings == "Combo") {
    price += 1;
  } else if (this.pizzaToppings == "Pepperoni") {
    price += 2;
  } else if (this.pizzaToppings == "Vegetarian") {
    price += 3;
  }

  if (this.pizzaQuantity <= 1) {
    price *= 1;
  } else if (this.pizzaQuantity <= 2) {
    price *= 2;
  } else if (this.pizzaQuantity <= 3) {
    price *= 3;
  } else if (this.pizzaQuantity <= 4) {
    price *= 4;
  } else {
    price *= 5;
  }

  return price.toString();
};

$(document).ready(function() {

  var pizzaSize = ["Small", "Medium", "Large"];
  var pizzaToppings = ["Combo", "Pepperoni", "Vegetarian"];
  var pizzaQuantity = [1, 2, 3, 4, 5];

  pizzaSize.forEach(function(size) {
    $("select#size-list").append("<option value='" + size + "'><span class='chosen-size'>" + size + "</span></option>");
  });

  pizzaToppings.forEach(function(toppings) {
    $("select#toppings-list").append("<option value='" + toppings + "'><span class='chosen-toppings'>" + toppings + "</span></option>");
  });

  pizzaQuantity.forEach(function(quantity) {
    $("select#quantity-list").append("<option value='" + quantity + "'><span class='chosen-quantity'>" + quantity + "</span></option>");
  });

  $("form#user-info").submit(function(event) {

    var pizzaChoice = $("#size-list option:selected").text();
    var toppingsChoice = $("#toppings-list option:selected").text();
    var quantityChoice = parseInt($("#quantity-list option:selected").val());
    userPizza = new Pizza(pizzaChoice, toppingsChoice, quantityChoice);

    var userPrice = userPizza.pizzaPrice();

    $(".sizeChoice").text(pizzaChoice);
    $(".toppingsChoice").text(toppingsChoice);
    $(".quantityChoice").text(quantityChoice);
    $(".pizza-price").text(userPrice);

    $("#result").show();
    event.preventDefault();
    $("select#size-list").val("");
    $("select#toppings-list").val("");
    $("select#quantity-list").val("");
  });
});
