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

  it("can toggle a line through an item via a checkbox", function() {
    cy.visit('/');
    cy.get('#item-textbox').type("Milk");
    cy.get('#addItem-button').click();
    cy.get('#item-0-checkbox').click();
    cy.get('#item-0').should('have.css', 'text-decoration', 'line-through solid rgb(0, 0, 0)');
  });

  it("can clear all the items", function() {
    cy.visit('/');
    cy.get('#item-textbox').type("Milk");
    cy.get('#addItem-button').click();
    cy.get('#shoppingList-clearLink').click();
    cy.get('#item-0').should('not.exist');
  });
});
