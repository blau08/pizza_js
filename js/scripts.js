function Pizza(size, toppings, quantity) {
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
  this.pizzaQuantity = quantity;
}

Pizza.prototype.pizzaPrice = function() {
  var price = 0;

  if (this.pizzaSize = 1) {
    price += 5;
  } else if (this.pizzaSize = 2) {
    price += 10;
  } else if (this.pizzaSize = 3) {
    price += 15;
  }

  if (this.pizzaToppings <= 1) {
    price += 1;
  } else if (this.pizzaToppings <= 2) {
    price += 2;
  } else if (this.pizzaToppings <= 3) {
    price += 3;
  } else if (this.pizzaToppings <= 4) {
    price += 4;
  } else {
    price += 5;
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
  var pizzaToppings = [1, 2, 3, 4, 5];
  var pizzaQuantity = [1, 2, 3, 4, 5];

  pizzaSize.forEach(function(size) {
    $("select#size-list").append("<option><span class='chosen-size'>" + size + "</span></option>");
  });

  pizzaToppings.forEach(function(toppings) {
    $("select#toppings-list").append("<option value='" + toppings + "'><span class='chosen-toppings'>" + toppings + ":00 PM" + "</span></option>");
  });

  pizzaQuantity.forEach(function(quantity) {
    $("select#quantity-list").append("<option value='" + quantity + "'><span class='chosen-quantity'>" + quantity + ":00 PM" + "</span></option>");
  });

  $("form#user-info").submit(function(event) {

    var pizzaChoice = $("#size-list option:selected").text();
    var toppingsChoice = parseInt($("#toppings-list option:selected").val());
    var quantityChoice = parseInt($("#quantity-list option:selected").val());
    debugger;
    userPizza = new Pizza(pizzaChoice, toppingsChoice, quantityChoice);

    userPrice = userPizza.pizzaPrice();

    $(".pizza-price").text(userPrice);

    $("#result").show();
    event.preventDefault();
  });
});
