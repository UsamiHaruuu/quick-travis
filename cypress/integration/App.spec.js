describe('Test App', () => {

    it('launches', () => {
        cy.visit('/');
    });

 it ('shows listpage', () => {
    cy.visit ('/');
     cy.get('[data-cy=list-page]').should('be.visible');
  });

  it ('shows banner', () => {
    cy.visit ('/');
    cy.get('[data-cy=banner]').should('be.visible');
  });
});