describe('Product Tests', () => {
    before(function() {
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
        cy.addProductToCart(this.productPage);

        cy.visit(Cypress.env('cartUrl'));

        cy
            .get('.woocommerce-cart-form')
            .within(() => {
                cy.contains(this.productTitle);
            });
    })

    it('Checks that you can access the checkout page from the cart', function () {
        cy.addProductToCart(this.productPage);

        cy.visit(Cypress.env('cartUrl'));

        cy
            .get('.checkout-button')
            .click();

        cy
            .url()
            .should('include', 'checkout')
    })

    it('Checks that you can remove a product from the cart', function() {
        cy.addProductToCart(this.productPage);

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