class RegisterPage {

    fillRegisterForm(email,name,username,password,country) {
        if(email!=null){
            cy.get('input[id="register-email"]').type(email)
        }
        if(name!=null){
            cy.get('input[id="register-name"]').type(name)
        }
        if(username!=null){
            cy.get('input[id="register-username"]').type(username)
        }
        if(password!=null){
            cy.get('input[id="register-password"]').type(password)
        }
        if(country!=null){
            cy.get('#register-country').select(country)
        }       
        cy.get('input[id="toggle_optional_fields"]').click()
        cy.get('#register-gender').select('Male',{force: true})
        cy.get('#register-year_of_birth').select('2014',{force: true})
        cy.get('#register-level_of_education').select('Doctorate',{force: true})
        cy.get('#register-goals').type('sajdsakdjksadjlsad',{force: true})
    }

    submitRegisterForm() {
        cy.get('button[type="submit"]').click()
    }
    errormsg() {
        return cy.get('.message-title').invoke('text')
    }
    emailerrormsg() {
        return cy.get('ul.message-copy > li').invoke('text')
    }
    emailerrormsg2(){
        return cy.get('.label-required error').invoke('text')
    }
}

export default RegisterPage
