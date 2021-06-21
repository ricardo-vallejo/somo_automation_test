/**
 * Home page test cases
 */

import { COMMON_METHODS } from "../page_objects/common"
import { HOME_PAGE } from "../page_objects/home"

context('Home Page', () => {

    const RESOLUTIONS = [[1920, 1080], 'macbook-13', [960, 540], 'ipad-mini', [480, 854], 'samsung-s10', 'iphone-5']

    beforeEach(() => {
        cy.visit('/')
        HOME_PAGE.validateSideBar()
    })

    describe('Home Page Test Cases', () => {

        it('Open project option sidebar', () => {
            HOME_PAGE.openProjectsMenu()
            COMMON_METHODS.validatePage('projects')
        })

        it('Open instagram option sidebar', () => {
            HOME_PAGE.openInstagramMenu()
            COMMON_METHODS.validatePage('instagram')
        })

        it('Open about option sidebar', () => {
            HOME_PAGE.openAboutMenu()
            COMMON_METHODS.validatePage('about')
        })

        it('Open about page', () => {
            HOME_PAGE.openAbout()
            COMMON_METHODS.validatePage('about')
        })

        it('Open instagram page', () => {
            HOME_PAGE.openInstagram()
            COMMON_METHODS.validatePage('instagram')
        })

        it('Open color page', () => {
            HOME_PAGE.openColorProject()
            COMMON_METHODS.validatePage('color')
        })

        it('Open extrem neon page', () => {
            HOME_PAGE.openExtremNeonProject()
            COMMON_METHODS.validatePage('extrem')
        })

        it('Open breakfast page', () => {
            HOME_PAGE.openBreakfastProject()
            COMMON_METHODS.validatePage('breakfast')
        })

        RESOLUTIONS.forEach((screenSize) => {
            it(`Validate responsive in ${screenSize} resolution`, () => {
                COMMON_METHODS.changeResolution(screenSize)
            })
        })

    })

    afterEach(() => {
        COMMON_METHODS.returnHome()
    })
})