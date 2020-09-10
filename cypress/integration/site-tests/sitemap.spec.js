describe('Sitemap tests', () => {
    it('Checks if a sitemap exists', () => {
        cy
            .request('/sitemap.xml')
            .its('status')
            .should('eq', 200);
    })
})