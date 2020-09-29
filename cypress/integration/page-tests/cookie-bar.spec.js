describe('Cookie Bar Tests', () => {
    before(() => {
        cy.visit('/');
        cy
            .get(Cypress.env('cookieButtonSelector'))
            .as('cookieButton')
    })

    it('Checks that a cookie bar appears on first load but not after accepted', () => {
        cy
            .get('@cookieButton')
            .click();

        cy.wait(200);
        cy.reload();

        cy
            .get('@cookieButton')
            .should('not.be.visible')
    })
});
