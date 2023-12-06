import '@cypress/puppeteer/support'
it('switches to a new tab', () => {
    cy.visit('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo')
    cy.get('[title="Follow @Lambdatesting on Twitter"]').click()
    cy.puppeteer('myMessageHander').should('equal', 'Profile')
  })