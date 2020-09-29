describe('Product Tests', () => {
    before(function() {
        Cypress.Cookies.debug(true)
        cy.visit(Cypress.env('shopUrl'));

        cy
            .get('.product')
            .first()
            .within(() => {
                cy
                    .get('.woocommerce-LoopProduct-link')
                    .should('have.attr', 'href')
                    .as('productPage');

                cy
                    .get('.woocommerce-loop-product__title')
                    .invoke('text')
                    .as('productTitle');
            });
    })

    it('Checks that you can add a product to the cart', function() {
        cy.visit(this.productPage);
        cy
            .get('.single_add_to_cart_button')
            .click();

        cy.wait(300);

        cy.visit(Cypress.env('cartUrl'));

        cy
            .get('.woocommerce-cart-form')
            .within(() => {
                cy.contains(this.productTitle);
            });
    })

    it('Checks that you can remove a product from the cart', function() {
        cy.visit(this.productPage);
        cy
            .get('.single_add_to_cart_button')
            .click();

        cy.wait(300);

        cy.visit(Cypress.env('cartUrl'));

        cy
            .get('.woocommerce-cart-form__cart-item .remove')
            .click()
            .then(removeButton => {
                cy
                    .wrap(removeButton)
                    .should('not.exist')
            })
    })
})