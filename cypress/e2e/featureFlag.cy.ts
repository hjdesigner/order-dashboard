describe('Feature flag - hasFilter', () => {
  it('should disable filter via feature flag and hide it on orders page', () => {
    cy.visit('http://localhost:3000/manage-feature-flag');

    cy.contains('[data-testid="feature-flag-name"]', 'hasFilter')
      .should('be.visible')
      .parents('[data-testid="feature-flag-item"]')
      .as('hasFilterItem');

    cy.get('@hasFilterItem')
      .find('[data-testid="feature-flag-toggle"]')
      .click();

    cy.wait(500);

    cy.visit('http://localhost:3000');

    cy.get('[data-testid="status-filter"]').should('not.exist');
  });
});
