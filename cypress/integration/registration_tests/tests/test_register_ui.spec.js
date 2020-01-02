import home from '../pages/home_page'
import dashboard from '../pages/dashboard_page'
import RegisterPage from '../pages/register_page'
import Utils from '../helpers/utils'


//Handing Positive test-case with UI and random credentials
describe('Register test with valid credentials', () => {
    beforeEach(()=> {
        cy.visit('/')
    })
    it('lets the user register to the application with valid data', () => {
        const register = new RegisterPage()
        home.gotToRegister()
        var random_string = Utils.generate_random_string()
        var random_password = Utils.generate_random_string()
        register.fillRegisterForm(random_string+'@gamil.com',random_string,random_string,random_password,'Pakistan')
        register.submitRegisterForm()
        dashboard.getButtonText().then(($btnText) => {
            expect($btnText).contains('Explore New Courses')
        })

    })    
})

//Handing negative test-cases through UI using Fixtures. 
describe('Handing negative test-cases through UI using Fixtures', () => {
    beforeEach(()=> {
        cy.visit('/')
    })
    it('lets the user register to the application with invalid Email field', () => {
        const register = new RegisterPage()
        home.gotToRegister()
        cy.fixture('credentials').then(($userCred) => {
            register.fillRegisterForm($userCred.invalid_email.email,$userCred.invalid_email.name,$userCred.invalid_email.username,$userCred.invalid_email.pass,$userCred.invalid_email.country)
            register.submitRegisterForm()
            register.fielderrormsg().should('contain', 'is not a valid email address') 
        })
    })
    it('lets the user register to the application with invalid Username field', () => {
        const register = new RegisterPage()
        home.gotToRegister()
        cy.fixture('credentials').then(($userCred) => {
            register.fillRegisterForm($userCred.invalid_username.email,$userCred.invalid_username.name,$userCred.invalid_username.username,$userCred.invalid_username.pass,$userCred.invalid_username.country)
            register.submitRegisterForm()
            register.fielderrormsg().should('contain', 'Usernames can only contain letters (A-Z, a-z), numerals (0-9), underscores (_), and hyphens (-).') 
        })
    }) 
    it('lets the user register to the application with invalid password field', () => {
        const register = new RegisterPage()
        home.gotToRegister()
        cy.fixture('credentials').then(($userCred) => {
            register.fillRegisterForm($userCred.invalid_pass.email,$userCred.invalid_pass.name,$userCred.invalid_pass.username,$userCred.invalid_pass.pass,$userCred.invalid_pass.country)
            register.submitRegisterForm()
            register.fielderrormsg().should('contain', 'Password must have at least 8 characters') 
        })
    }) 
    it('lets the user register to the application with invalid country field', () => {
        const register = new RegisterPage()
        home.gotToRegister()
        cy.fixture('credentials').then(($userCred) => {
            register.fillRegisterForm($userCred.invalid_country.email,$userCred.invalid_country.name,$userCred.invalid_country.username,$userCred.invalid_country.pass,$userCred.invalid_country.country)
            register.submitRegisterForm()
            register.fielderrormsg().should('contain', 'Select your country or region of residence') 
        })
    })      
})













