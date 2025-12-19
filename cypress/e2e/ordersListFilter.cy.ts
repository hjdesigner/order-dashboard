describe('Orders list filter', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should render orders list', () => {
    cy.get('[data-testid="order-list"]')
      .find('li')
      .should('have.length.greaterThan', 0);
  });

  it('should filter orders by status', () => {
    cy.get('[data-testid="status-filter"]').select('Delivered');

    cy.url().should('include', 'status=Delivered');

    cy.get('[data-testid="status"]').each(($status) => {
      cy.wrap($status).should('contain.text', 'Delivered');
    });
  });
});
