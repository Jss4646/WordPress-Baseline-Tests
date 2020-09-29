describe('Robots.txt Tests', () => {
    it('Checks whether robots.txt exists', () => {
        cy
            .request('/robots.txt')
            .its('status')
            .should('eq', 200)
    })
})