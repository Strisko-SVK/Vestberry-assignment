/// <reference types="Cypress" />
import HomePage from './pageObjects/homePage'
import FeedPage from '../feedPage/pageObjects/feedPage'
import LoginPage from '../loginPage/pageOjects/loginPage'
import RegisterPage from '../registerPage/pageObjects/registerPage'
import fixtures from '/cypress/fixtures/fixtures.json'
import { ROUTES } from '../../../constants'


describe('HomePage Test Suite', () => {

    beforeEach(() => {
        cy.visit('#/')
    })


    it('The User is able to reach the HomePage', () => {
        const homePage = new HomePage()

        homePage.getLogo().should('be.visible').and('contain.text', 'conduit')
    })

    it('The User is able to click on Feed in global feed section and redirected', () => {
        const homePage = new HomePage()
        const feedPage = new FeedPage()

        homePage.getArticle().find('.preview-link').each(($el, index, $list) => {
            const text = $el.find('h1').text()
            if (text.includes(fixtures.feed)) {
                cy.wrap($el).click()
            }
        })
        feedPage.getHeader().should('be.visible').and('contain.text', fixtures.feed)
    })

    it('The User is able to navigate to the Sign in page', () => {
        const homePage = new HomePage()
        const loginPage = new LoginPage()


        homePage.getSignIn().should('be.visible').click()
        loginPage.getHeader().should('be.visible').and('contain.text', fixtures.loginHeader)
    })

    it('The User is able to navigate to the Sign up page', () => {
        const homePage = new HomePage()
        const registerPage = new RegisterPage()

        homePage.getSignUp().should('be.visible').click()
        registerPage.getHeader().should('be.visible').and('contain.text', fixtures.registerHeader)
    })

    it('The User is able to choose from Popular tags on the Home Page', () => {

    })
})