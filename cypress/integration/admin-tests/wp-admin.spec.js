describe('WP admin tests', () => {
    it('Checks if user can be logged in', () => {
        cy.login(Cypress.env('username'), Cypress.env('password'));
        cy
            .request('/wp-admin/')
            .then(res => {
                const resBody = document.createElement('html')
                resBody.innerHTML = res.body;

                expect(resBody.querySelector('body.wp-admin'))
                    .to.not.be.null;
            })
    })
})