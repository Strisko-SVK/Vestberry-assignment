
class RegisterPage{

    getHeader(){
        return cy.get('h1')
    }

    getName(){
        return cy.get('input[placeholder="Your Name"]')
    }

    getEmail(){
        return cy.get('input[placeholder="Email"]')
    }

    getPassword(){
        return cy.get('input[placeholder="Password"]')
    }

    getSignUpButton(){
        return cy.get('button[type="submit"]').click()
    }

    getProfil(){
        return cy.get(':nth-child(4) > .nav-link')
    }

}
export default RegisterPage