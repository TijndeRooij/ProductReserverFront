describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080')

//LogIn
    cy.get('#login').click()
    cy.get('#username').type('Tijn')
    cy.get('#password').type('4567')
    cy.get('#submit').click()
    cy.wait(100)
    cy.get('#token').click()
    cy.get('#home').click()

//Search product
    cy.wait(100)
    cy.get('#search').type('test')
    cy.get('#searchButton').click()

//Edit
    cy.get('#edit').click()
    cy.wait(100)
    cy.get('#form')
    cy.get('#discriptionEdit').clear({force: true}).type('Test', {force: true})
    cy.get('#quantityEdit').clear({force: true}).type('10', {force: true})
    cy.get('#guideLine2Edit').click({force: true})
    cy.get('#submitButtonEdit').click({force: true})
  })
})