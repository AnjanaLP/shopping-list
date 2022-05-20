describe("Shopping List", function() {
  it("shows a heading", function() {
    cy.visit('/')
    cy.get('#shoppingList-heading').should("contain", "Shopping List")
  });
});
