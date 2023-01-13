describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080')

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    
//LogIn
    cy.get('#login').click()
    cy.get('#username').type('Tijn')
    cy.get('#password').type('4567')
    cy.get('#submit').click()
    cy.wait(100)
    cy.get('#token').click()
    cy.get('#home').click()

//Create
    cy.get('#createbutton').click({force: true})
    cy.get('#name').type('test', {force: true})
    cy.get('#discription').type('Test', {force: true})
    cy.get('#quantity').type('10', {force: true})
    cy.get('#guideLine1').click({force: true})
    cy.get('#submitButton').click({force: true})
  })
})