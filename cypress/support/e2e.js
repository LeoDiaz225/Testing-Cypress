Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false previene que Cypress falle el test
    return false
  })

// Import commands.js using ES2015 syntax:
import './commands'