describe('Console Error Test', () => {
    it('Checks to see if there are any errors in the console', () => {
        cy.visit('/', {
            onBeforeLoad: (win) => {
                cy
                    .spy(win.console, 'error')
                    .as('consoleErrors')
            }
        })
            .then(function(win) {
                console.log(win.console.error)
                expect(this.consoleErrors).to.have.callCount(0);
            })
    })
});
