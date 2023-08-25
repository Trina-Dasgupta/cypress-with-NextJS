describe('Fundamental Tests', () => {
  beforeEach(() => {
    cy.visit('/fundamentals')
  })
  it('Contains correct header text', () => {
    
    // cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i)
    cy.getDataTest('fundamentals-header').should('contain.text', 'Testing Fundamentals')
    // cy.get('[data-test="fundamentals-header"]').should('contain.text','Testing Fundamentals')
  })
  it.only('Accordion Works Correctly', () => {
    
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    // cy.get('[data-test="accordion-item-1"]').click().pause()
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')

  })
})