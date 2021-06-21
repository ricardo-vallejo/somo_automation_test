/// <reference types="cypress" />

/**
 * Class to map instagram page elements
 */

export class instagram {

    /**
     * Method to validate if a post redirect to Instagram
     */
    validateInstagramPost() {
        cy.get('.instagram-link-styles').first()
          .should('have.attr', 'href')
          .and('include', 'https://www.instagram.com')
    }

}

export const INSTAGRAM_PAGE = new instagram()