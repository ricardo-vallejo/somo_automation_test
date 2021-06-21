/// <reference types="cypress" />

export class commonsMethods {

    /**
     * Method to validate the URL of a page
     * @param {String} pageName part of the URL that should include
     */
    validatePage(pageName) {
        cy.url().should('include', `${pageName}`)
    }

    /**
     * Method to return to home page
     */
    returnHome() {
        cy.get('[data-testid=sidebar] > [aria-label="Jodie, Back to Home"]').click()
    }

    /**
     * Method to change the resolution
     * @param {String} breakPoint Resolution to set
     */
    changeResolution(breakPoint) {
        if (Cypress._.isArray(breakPoint)) {
            cy.viewport(breakPoint[0], breakPoint[1])
          } else {
            cy.viewport(breakPoint)
          }
    }
}

export const COMMON_METHODS = new commonsMethods();