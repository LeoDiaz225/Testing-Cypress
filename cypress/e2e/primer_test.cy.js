describe('Mi primer test', () => {
  it('Visita la página de ejemplo', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
  })
})