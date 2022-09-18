/// <reference types="Cypress" />
import fixtures from '/cypress/fixtures/fixtures.json'
import { ROUTES } from '../../../constants'
import { faker } from '@faker-js/faker'
import RegisterPage from '../registerPage/pageObjects/registerPage'



describe('RegisterPage Test Suite', () => {

    beforeEach(() => {
        cy.visit('#/register')
    })


    it('The user is able to register', () => {
        const registerPage = new RegisterPage()
        faker.seed(123)
        const name = faker.internet.userName()
        const email = faker.internet.email()
        const password = faker.internet.password()

        registerPage.getName().type(name)
        registerPage.getEmail().type(email)
        registerPage.getPassword().type(password)
        registerPage.getSignUpButton()
        faker.seed(123)
        registerPage.getProfil().should('contain.text',faker.internet.userName())
    })
    
})