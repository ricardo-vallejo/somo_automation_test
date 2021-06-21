/// <reference types="cypress" />

/**
 * Class to map projects page elements
 */

export class projects {

    /**
     * Method to validate the number of links in the page
     */
    validateProjectsNumber() {
        cy.get('.css-jesexb-Project > .css-ylm0y-GridItem').should('have.length', 4)
    }

    /**
     * Method to validate the image of a link
     * @param {String} projectName Project Name
     */
    validateImage(projectName) {
        cy.get(`[data-testid="${projectName}"] > .gatsby-image-wrapper > img`).should('have.attr', 'src')
    }

    /**
     * Method to validate the title page
     * @param {String} titleName Title of the page
     */
    validateTitlePage(titleName) {
        cy.get('.css-1mvgnf5-Project').should('contain.text', `${titleName}`)
    }
}

export const PROJECTS_PAGE = new projects();