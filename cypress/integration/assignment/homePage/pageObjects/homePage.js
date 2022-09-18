class HomePage{

    getLogo(){
        return cy.get('h1[class="logo-font"]')
    }

    getSignIn(){
        return cy.get('a[aria-label="login"]')
    }

    getSignUp(){
        return cy.get('a[aria-label="register"]')
    }

    getAuthor(){
        return cy.get('.author')
    }

    getArticle(){
        return cy.get('.article-preview')
    }

    getLike(){
        return cy.get('button[aria-label$="Favorite article"]')
    }

}
export default HomePage