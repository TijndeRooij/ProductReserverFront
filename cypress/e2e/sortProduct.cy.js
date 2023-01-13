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

//Sort product
    cy.wait(500)
    cy.get('#quantitySort').click()
    cy.wait(500)
    cy.get('#ratingSort').click()
    cy.wait(500)
    cy.get('#idSort').click()
    cy.wait(500)
  })
})