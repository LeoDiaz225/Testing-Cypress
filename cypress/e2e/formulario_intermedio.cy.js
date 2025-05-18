describe('Formulario de contacto', () => {
  it('Envía el formulario correctamente', () => {
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.get('#firstName').type('Juan')
    cy.get('#lastName').type('Pérez')
    cy.get('#userEmail').type('juan.perez@email.com')
    cy.get('input[name="gender"][value="Male"]').check({force: true})
    cy.get('#userNumber').type('1234567890')
    cy.get('#submit').click()
    cy.get('.modal-content').should('contain', 'Thanks for submitting the form')
  })
})