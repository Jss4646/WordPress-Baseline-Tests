describe('Default login tests', () => {
    it('Checks that you can login with email and password', () => {
        cy.visit('/wp-admin')
        cy
            .get('#user_login')
            .type(Cypress.env('username'));
        cy
            .get('#user_pass')
            .type(Cypress.env('password'));
        cy
            .get('#wp-submit')
            .click();

        cy
            .get('body')
            .should('have.class', 'wp-admin')
    })
})