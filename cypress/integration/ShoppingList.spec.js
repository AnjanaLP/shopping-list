describe("Shopping List", function() {
  beforeEach(() => {
    cy.visit('/');
  })

  it("shows a heading", function() {
    cy.get('#heading').should("contain", "Shopping List");
  });

  it("can add and show an item", function() {
    addMilk();
    cy.get('#item-0').should("contain", "Milk");
  });

  it("can toggle a line through an item via a checkbox", function() {
    addMilk();
    cy.get('#item-0-checkbox').click();
    cy.get('#item-0').should('have.css', 'text-decoration', 'line-through solid rgb(128, 128, 128)');
  });

  it("can clear all the items", function() {
    addMilk();
    addMilk();
    cy.get('#shoppingList-clearLink').click();
    cy.get('#item-0').should('not.exist');
    cy.get('#item-1').should('not.exist');
  });

  const addMilk = () => {
    cy.get('#item-textbox').type("Milk");
    cy.get('#addItem-button').click();
  }
});
