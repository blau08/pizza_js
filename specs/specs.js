describe("Pizza", function() {
  it("creates a new pizza with the given specifications", function() {
    var testPizza = new Pizza("Small", "1", "1");
    expect(testPizza.pizzaSize).to.equal("Small");
    expect(testPizza.pizzaToppings).to.equal("1");
    expect(testPizza.pizzaQuantity).to.equal("1");
  });

  it("will return the price of the pizza", function() {
    var testPizza = new Pizza("Small", "1", "1");
    expect(testPizza.pizzaPrice()).to.equal("6");
  });

  // it("clears form after submit button", function() {
  //   var testPizza = new Pizza("Small", "1", "1");
  //   expect(testPizza.pizzaPrice()).to.equal("6");
  //   expect($("select#size-list").to.equal(""));
  // });
});
