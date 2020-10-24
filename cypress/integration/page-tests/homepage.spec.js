describe('Homepage tests', () => {
    it("Checks that there's no x-axis scrolling", () => {
        cy.visit('/');
        cy
            .document()
            .then(document => {
                expect(document.scrollingElement.scrollWidth)
                    .to.eq(Cypress.config("viewportWidth"))
            })
    })
})