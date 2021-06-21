/// <reference types="cypress" />

/**
 * Class to map about page elements
 */

export class about {

    /**
     * Method to validate the content of the page
     */
    validetePageContent() {
        cy.get('[data-testid=page-content]').should('exist').and('be.visible')
    }

    /**
     * Method to validate the title of the page
     */
    validateTitle() {
        cy.get('[data-testid=page-content] > :nth-child(1)')
          .should('be.visible')
          .and('contain', 'About')
    }

}

export const ABOUT_PAGE = new about()