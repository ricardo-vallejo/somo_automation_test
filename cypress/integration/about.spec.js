/**
 * Home page test cases
 */

import { ABOUT_PAGE } from "../page_objects/about"
import { COMMON_METHODS } from "../page_objects/common"
import { HOME_PAGE } from "../page_objects/home"

context('About Page', () => {

    beforeEach(() => {
        cy.visit('/about')
        HOME_PAGE.validateSideBar()
    })

    describe('About Page Test Cases', () => {

        it('Validate about page', () => {
            ABOUT_PAGE.validetePageContent()
            ABOUT_PAGE.validateTitle()
        })
    })

    afterEach(() => {
        COMMON_METHODS.returnHome()
    })
})