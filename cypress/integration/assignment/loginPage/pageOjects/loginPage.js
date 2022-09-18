class LoginPage{

    getHeader(){
        return cy.get('h1')
    }

    getEmail(){
        return cy.get('[type="email"]')
    }

    getPassword(){
        return cy.get('[type="password"]')
    }

    getSignInButton(){
        return cy.get('[type="submit"]').click()
    }

    getErrorMessage(){
        return cy.get('ul[class="error-messages"] li')
    }

}
export default LoginPage