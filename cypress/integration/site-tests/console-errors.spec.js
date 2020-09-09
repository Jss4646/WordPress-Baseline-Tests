describe('Console Error Test', () => {
    it('Checks to see if there are any errors in the console', () => {
        cy.visit('/', {
            onBeforeLoad(win) {
                cy.spy(win.console, 'error');
            }
        });

        cy.window().then((win) => {
            expect(win.console.error).to.have.callCount(0);
        });
    })
});
