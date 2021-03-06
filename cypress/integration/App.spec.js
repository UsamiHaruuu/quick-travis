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
  it('shows Log in', () => {
    cy.visit('/');
    cy.get('[data-cy=sign-in]').should('contain', 'Sign in with Google');
  });
  it('opens navbar', () => {
    cy.visit('/');
    cy.get('.navbar-burger').click();
    cy.get('[data-cy=sign-in]').should('be.visible');
  });
});
