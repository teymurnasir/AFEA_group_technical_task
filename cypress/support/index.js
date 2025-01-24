Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('Script error')) {
      return false; // Prevent Cypress from failing the test
    }
  });
   