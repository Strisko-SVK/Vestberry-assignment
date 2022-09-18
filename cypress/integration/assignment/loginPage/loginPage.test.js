/// <reference types="Cypress" />
import LoginPage from './pageOjects/loginPage';
import fixtures from '/cypress/fixtures/fixtures.json'
import { ROUTES } from '../../../constants'
import { faker } from '@faker-js/faker';
  


describe('HomePage Test Suite', () => {

    beforeEach(() => {
        cy.visit('#/login')
    })


    it('The User is able to reach the Login Page', () => {
        const loginPage = new LoginPage()
        
        
        loginPage.getHeader().should('contain.text', 'Sign in')

        
    })
    before(()=>{
        cy.Register()
    })

    it('The user is able to successful log in', ()=>{
        faker.seed(123)
        const email = faker.internet.email()
        const loginPage = new LoginPage()

        loginPage.getEmail().type(email)
        loginPage.getPassword().type('12345678')
        loginPage.getSignInButton().click()

    })

    it('The user put wrong email',()=>{
        const loginPage = new LoginPage()
        const email = faker.internet.email()

        loginPage.getEmail().type(email)
        loginPage.getPassword().type('12345678')
        loginPage.getSignInButton()
        loginPage.getErrorMessage().should('contain.text', 'email or password is invalid')

    })

    it('The user put wrong password',()=>{
        const loginPage = new LoginPage()
        faker.seed(123)
        const email = faker.internet.email()

        loginPage.getEmail().type(email)
        loginPage.getPassword().type('123456')
        loginPage.getSignInButton()
        loginPage.getErrorMessage().should('contain.text', 'email or password is invalid')

    })

})