describe('Admin Login Test', () => {
    it('Check that the admin page loads correctly', () => {
        cy.visit('/wp-admin');

        cy.contains('Username or Email Address').debug();
        cy.contains('Password');

        cy.log('working');
        cy
            .get('#user_login')
            .type('admin');

        cy
            .get('#user_pass')
            .type('admin');

        cy
            .get('#wp-submit')
            .click()
    })
});
