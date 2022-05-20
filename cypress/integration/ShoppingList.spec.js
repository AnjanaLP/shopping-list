describe("Shopping List", function() {
  it("shows a heading", function() {
    cy.visit('/');
    cy.get('#heading').should("contain", "Shopping List");
  });

  it("can add and show an item", function() {
    cy.visit('/');
    cy.get('#item-textbox').type("Milk");
    cy.get('#addItem-button').click();
    cy.get('#item-0').should("contain", "Milk");
  });
});
