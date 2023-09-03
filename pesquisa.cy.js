describe("Teste Cypress - Pesquisa de Produtos", () => {
  it("Pesquisa por um produto existente", () => {

    cy.visit("http://automationexercise.com/products");
    cy.contains('All Products').should('be.visible');
    cy.get('#search_product').type('TShirt');
    cy.get('#submit_search').click();
    cy.contains("Searched Products").should('be.visible');
    cy.contains('p', 'shirt', { matchCase: false }).should('be.visible');
  });

  it("Pesquisa por um produto inexistente", () => {

    cy.visit("http://automationexercise.com/products");
    cy.contains('All Products').should('be.visible');
    cy.get('#search_product').type('QualquerCoisaQueEuSeiQueNaoExiste');
    cy.get('#submit_search').click();
    cy.contains("Searched Products").should('be.visible');
    cy.contains("View Product").should('not.exist');

  });
});
