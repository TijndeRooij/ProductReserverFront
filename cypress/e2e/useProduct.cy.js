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

//Use product
    cy.get('#plus').click()
    cy.get('#plus').click()
    cy.get('#plus').click()
    cy.get('#min').click()
    cy.get('#use').click()
  })
})