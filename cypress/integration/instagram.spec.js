/**
 *Projects page test cases
 */

import { COMMON_METHODS } from "../page_objects/common"
import { INSTAGRAM_PAGE } from "../page_objects/instagram"

 context('Instagram Page', () => {

    beforeEach(() => {
        cy.visit('/instagram')
    })

    describe('Instagram Page Test Cases', () => {

        it('Validate instagram post', () => {
            INSTAGRAM_PAGE.validateInstagramPost()
        })
    })

    afterEach(() => {
        COMMON_METHODS.returnHome()
    })
 })