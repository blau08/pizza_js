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

  if (this.pizzaToppings == "Pepperoni") {
    price += 1;
  } else if (this.pizzaToppings == "Sausage") {
    price += 1
  } else if (this.pizzaToppings == "Pineapple") {
    price += 1;
  } else if (this.pizzaToppings == "Bacon") {
    price += 1;
  } else if (this.pizzaToppings == "Olives") {
    price += 1;
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
  var pizzaToppings = ["Pepperoni", "Sausage", "Pineapple", "Bacon", "Olives"];
  var pizzaQuantity = [1, 2, 3, 4, 5];

  pizzaSize.forEach(function(size) {
    $("select#size-list").append("<option value='" + size + "'>" + size + "</option>");
  });

  pizzaToppings.forEach(function(toppings) {
    $("div#toppings-list").append("<label class='checkbox-inline'><input class='checkbox' name='interested' type='checkbox' value='" + toppings +"'>" + toppings + "" + "</label>");
  });

  pizzaQuantity.forEach(function(quantity) {
    $("select#quantity-list").append("<option value='" + quantity + "'>" + quantity + "</option>");
  });

  $("form#user-info").submit(function(event) {

    var pizzaChoice = $("#size-list option:selected").text();
    // var toppingsChoice = parseInt($("#toppings-list option:selected").val());
    var toppingsChoice = $("input:checkbox[name=interested]:checked").each(function() {
      ($(this).val());
    });
    debugger;
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
