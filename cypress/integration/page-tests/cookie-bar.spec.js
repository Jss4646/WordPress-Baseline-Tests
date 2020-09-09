describe('Cookie Bar Appears', () => {
    it('Checks that a cookie bar appears on first load but not after accepted', () => {
        cy.visit('/');

        cy.contains(Cypress.env('cookieMessage'));
        cy
            .get(Cypress.env('cookieButtonSelector'))
            .click({ force: true });
        cy.wait(100);

        cy.reload();
        cy.contains('This website uses cookies').should('not.exist')
    })
});
