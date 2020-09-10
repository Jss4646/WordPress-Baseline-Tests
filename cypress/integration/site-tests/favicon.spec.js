describe('Favicon tests', () => {
    it('Checks if the favicon exists', () => {
        cy.visit('/');
        cy
            .get('link[rel="icon"]')
            .should('have.attr', 'href')
            .then(href => {
                cy
                    .request(href)
                    .its('status')
                    .should('eq', 200)
            })
    })
})