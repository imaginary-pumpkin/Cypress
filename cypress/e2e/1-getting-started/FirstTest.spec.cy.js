// test suite name
describe('Tutorialspoint Test', function () {
    // Test case
    it('Scenario 1', function (){
    // test step for URL launching
    cy.visit("https://www.centricconsulting.com/")
    cy.contains('Technology')
    cy.contains('Technology').click()
    cy.contains('Technology').click()
    cy.url().should('include','/technology-solutions')

    })

    it('Scenario 2', function(){
        expect(true).to.equal(false)
    })
    });