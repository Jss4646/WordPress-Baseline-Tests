describe('SEO Tests', () => {
    it('Checks whether robots.txt exists', () => {
        cy
            .request('/robots.txt')
            .its('status')
            .should('eq', 200)
    })

    it('Checks if a sitemap exists', () => {
        cy
            .request('/sitemap.xml')
            .its('status')
            .should('eq', 200);
    })

    it('Checks that noindex tags does not exist', () => {
        cy.visit('/')

        cy
            .get('head')
            .then($head => {
                let $metaTag = $head.find('meta[name="robots"]')

                if ($metaTag.length) {
                    cy.wrap($metaTag)
                        .invoke('attr', 'content')
                        .should('not.include', 'noindex, follow')
                }
            })
    })
})