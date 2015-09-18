describe("Pizza", function() {
  it("creates a new pizza with the given specifications", function() {
    var testPizza = new Pizza("small", "1", "1");
    expect(testPizza.pizzaName).to.equal("small");
    expect(testPizza.pizzaTime).to.equal("1");
    expect(testPizza.userAge).to.equal("1");
  });

  it("will return the price of the pizza", function() {
    var testPizza = new Pizza("small", "1", "1");
    expect(testPizza.pizzaPrice()).to.equal("6");
  });
});
