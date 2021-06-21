/**
 *Projects page test cases
 */

import { COMMON_METHODS } from "../page_objects/common"
import { HOME_PAGE } from "../page_objects/home"
import { PROJECTS_PAGE } from "../page_objects/projects"

context('Projects Page', () => {

    beforeEach(() => {
        cy.visit('/projects')
    })

    describe('Projects Page Test Cases', () => {

        it('Check number of projects in the page', () => {
            PROJECTS_PAGE.validateProjectsNumber()
        })

        it('Validate Color project', () => {
            PROJECTS_PAGE.validateImage('Color')
            HOME_PAGE.openColorProject()
            COMMON_METHODS.validatePage('color')
            PROJECTS_PAGE.validateTitlePage('Color - In all its glory')
        })

        it('Validate Extrem Neon project', () => {
            PROJECTS_PAGE.validateImage('Extreme Neon')
            HOME_PAGE.openExtremNeonProject()
            COMMON_METHODS.validatePage('extrem')
            PROJECTS_PAGE.validateTitlePage('Extreme Neon - What is this trend about?')
        })

        it('Validate Breakfast project', () => {
            PROJECTS_PAGE.validateImage('Breakfast')
            HOME_PAGE.openBreakfastProject()
            COMMON_METHODS.validatePage('breakfast')
            PROJECTS_PAGE.validateTitlePage('Breakfast - The most important time of the day')
        })

        it('Validate Black & White project', () => {
            PROJECTS_PAGE.validateImage('Black & White')
            HOME_PAGE.openBlackWhiteProject()
            COMMON_METHODS.validatePage('black')
            PROJECTS_PAGE.validateTitlePage('Black & White - Superb art')
        })
    })

    afterEach(() => {
        COMMON_METHODS.returnHome()
    })
})