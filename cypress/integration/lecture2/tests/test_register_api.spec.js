import register from '../helpers/register_api'
import Utils from '../helpers/utils'

// handing positive test-case through Api and random credentials 
describe('register without filling Email field with Api', () =>{
    var globalvar
    var random_string = Utils.generate_random_string()
    var random_password = Utils.generate_random_string()
    function test_methon(response) {
        cy.log('test_methon')
        globalvar = JSON.stringify(response)
        
    }
    before(() => {
        register.registerApi(random_string+'@gamil.com',random_string,random_string,random_password,'Pakistan',test_methon)

    })
    beforeEach(()=> {
        Cypress.Cookies.preserveOnce('stage-edx-sessionid', 'edxloggedin', 'stage-edx-user-info', 'csrftoken')
    })
    it('lets the user register to the application', () => {
        if(globalvar!=null){
            expect(globalvar).have.string('To enroll, you must follow the honor code.')
        }
        else{
            expect(globalvar!=null).to.be.true 
        }  
    })

})

// handing negative test-case through Api and using fixtures 
describe('lets the user register to the application with invalid email field using api', () => {
    var globalvar
    function test_methon(response) {
        cy.log('test_methon')
        globalvar = JSON.stringify(response)
        
    }
    before(() => {
        cy.fixture('credentials').then(($userCred) => {
            register.registerApi($userCred.invalid_email.email,$userCred.invalid_email.name,$userCred.invalid_email.username,$userCred.invalid_email.pass,$userCred.invalid_email.country,test_methon)
        })
    })

    beforeEach(()=> {
        Cypress.Cookies.preserveOnce('stage-edx-sessionid', 'edxloggedin', 'stage-edx-user-info', 'csrftoken')
    })
    it('lets the user register to the application', () => {
        if (globalvar!=null){
            expect(globalvar).have.string('A properly formatted e-mail is required')
        }
        
    })

})

describe('lets the user register to the application with invalid username using api and fixtures', () => {
    var globalvar
    function test_methon(response) {
        cy.log('test_methon')
        globalvar = JSON.stringify(response)
        
    }
    before(() => {
        cy.fixture('credentials').then(($userCred) => {
            register.registerApi($userCred.invalid_username.email,$userCred.invalid_username.name,$userCred.invalid_username.username,$userCred.invalid_username.pass,$userCred.invalid_username.country,test_methon)
        })

    })

    beforeEach(()=> {
        Cypress.Cookies.preserveOnce('stage-edx-sessionid', 'edxloggedin', 'stage-edx-user-info', 'csrftoken')
    })
    it('lets the user register to the application', () => {
        if (globalvar!=null){
            expect(globalvar).have.string('Usernames can only contain letters (A-Z, a-z), numerals (0-9), underscores (_), and hyphens (-)')
        }
        
    })

})

describe('lets the user register to the application with invalid password using api and fixtures', () => {
    var globalvar
    function test_methon(response) {
        cy.log('test_methon')
        globalvar = JSON.stringify(response)
        
    }
    before(() => {
        cy.fixture('credentials').then(($userCred) => {
            register.registerApi($userCred.invalid_pass.email,$userCred.invalid_pass.name,$userCred.invalid_pass.username,$userCred.invalid_pass.pass,$userCred.invalid_pass.country,test_methon)
        })

    })

    beforeEach(()=> {
        Cypress.Cookies.preserveOnce('stage-edx-sessionid', 'edxloggedin', 'stage-edx-user-info', 'csrftoken')
    })
    it('lets the user register to the application', () => {
        if (globalvar!=null){
            // cy.log(globalvar)
            expect(globalvar).have.string('This password is too short. It must contain at least 8 characters.')
        }
        
    })

})

describe('lets the user register to the application with invalid country using api and fixtures', () => {
    var globalvar
    function test_methon(response) {
        cy.log('test_methon')
        globalvar = JSON.stringify(response)
        
    }
    before(() => {
        cy.fixture('credentials').then(($userCred) => {
            register.registerApi($userCred.invalid_country.email,$userCred.invalid_country.name,$userCred.invalid_country.username,$userCred.invalid_country.pass,$userCred.invalid_country.country,test_methon)
        })

    })

    beforeEach(()=> {
        Cypress.Cookies.preserveOnce('stage-edx-sessionid', 'edxloggedin', 'stage-edx-user-info', 'csrftoken')
    })
    it('lets the user register to the application', () => {
        if (globalvar!=null){
            expect(globalvar).have.string('A country is required')
        }
        
    })

})