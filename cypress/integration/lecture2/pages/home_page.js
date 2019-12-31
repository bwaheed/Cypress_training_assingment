class HomePage {

    gotToLogin() {
        cy.get('.js-user-cta>a[href$="login"]').click()
        
    }
    gotToRegister() {
        cy.get('.js-user-cta>a[href$="register"]').click()
    }    
    
}

export default new HomePage