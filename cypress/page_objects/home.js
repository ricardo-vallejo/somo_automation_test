/// <reference types="cypress" />

/**
 * Class to map home page elements
 */

export class home {

    /**
     * Method to validate the sidebar menu
     */
    validateSideBar() {
        cy.get('[data-testid=sidebar]').should('exist').and('be.visible')
    }

    openProjectsMenu() {
        cy.get(':nth-child(1) > .css-1ongf96').click()
    }

    openInstagramMenu() {
        cy.get('ul > :nth-child(2) > .css-1ongf96').click()
    }

    openAboutMenu() {
        cy.get(':nth-child(3) > .css-1ongf96').click()
    }

    openAbout() {
        cy.get('[data-testid=About]').click()
    }

    openInstagram() {
        cy.get('[data-testid=Instagram]').click()
    }

    openColorProject() {
        cy.get('[data-testid=Color]').click()
    }

    openExtremNeonProject() {
        cy.get('[data-testid="Extreme Neon"]').click()
    }

    openBreakfastProject() {
        cy.get('[data-testid=Breakfast]').click()
    }

    openBlackWhiteProject() {
        cy.get('[data-testid="Black & White"]').click()
    }

}

export const HOME_PAGE = new home();