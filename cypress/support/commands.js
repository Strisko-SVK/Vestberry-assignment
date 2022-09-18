// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import { faker } from '@faker-js/faker';

//import { faker } from '@faker-js/faker/locale/de';


Cypress.Commands.add('Register',()=>{
  faker.seed(123)
  const userName = faker.internet.userName()
  faker.seed(123)
  const email = faker.internet.email()

  cy.visit(ROUTES.REGISTER)
  cy.get('a[aria-label="register"]').click()
  cy.get('input[placeholder="Your Name"]').type(userName)
  cy.get('input[placeholder="Email"]').type(email)
  cy.get('input[placeholder="Password"]').type('12345678')
  cy.get('button[type="submit"]').click()
  cy.wait(1000)
})


import { ROUTES } from '../constants'

// Cypress.Commands.add('login', (username = 'plumrx') => {
//   cy.fixture('user.json').then(authResponse => {
//     authResponse.user.username = username
//     cy.intercept('POST', /users\/login$/, { statusCode: 200, body: authResponse })
//   })

//   // click sign in button in home page
//   //cy.visit(ROUTES.LOGIN)
//   cy.get('a[aria-label="login"]').click()
  
//   cy.get('[type="email"]').type('foo@example.com')
//   cy.get('[type="password"]').type('12345678')
//   cy.get('[type="submit"]').contains('Sign in').click()

//   cy.url().should('match', /#\/$/)
// })

// Cypress.Commands.add('singleLogin', ()=>{
//   cy.get('a[aria-label="login"]').click()
  
//   cy.get('[type="email"]').type('foo@example.com')
//   cy.get('[type="password"]').type('12345678')
//   cy.get('[type="submit"]').contains('Sign in').click()

//   cy.url().should('match', /#\/$/)
// })


// Cypress.Commands.add('Register', (username = 'plumrx')=>{
//   cy.intercept('POST', /users$/, { fixture: 'user.json' }).as('registerRequest')
//       cy.visit(ROUTES.REGISTER)

//       cy.get('[placeholder="Your Name"]').type('foo')
//       cy.get('[placeholder="Email"]').type('foo@example.com')
//       cy.get('[placeholder="Password"]').type('12345678')

//       cy.get('[type="submit"]').click()

//       cy.wait('@registerRequest')
//       cy.url().should('match', /\/#\/$/)
//       // cy.get(`[href="${ROUTES.SETTINGS}"]`).click()
//       // cy.get('button.btn-outline-danger')
//       //   .contains('logout')
//       //   .click()
// })

Cypress.Commands.add('Post', ()=>{
  cy.get('a[aria-label="create-article"]').click()
  cy.get(':nth-child(1) > .form-control').type('Hook')
  cy.get(':nth-child(2) > .form-control').type('About Hooks')
  cy.get(':nth-child(3) > .form-control').type('More Hooks...')
  cy.get('.btn').click()


  // cy.get(`[href="${ROUTES.SETTINGS}"]`).click()

  //     cy.get('button.btn-outline-danger')
  //       .contains('logout')
  //       .click()


})
