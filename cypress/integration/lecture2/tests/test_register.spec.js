import home from '../pages/home_page'
import dashboard from '../pages/dashboard_page'
import RegisterPage from '../pages/register_page'
import register from '../helpers/register_api'
import Utils from '../helpers/utils'


// //Handing Positive test-case
// describe('Register tests', () => {
//     beforeEach(()=> {
//         cy.visit('/')
//     })
//     it('lets the user register to the application', () => {
//         const register = new RegisterPage()
        
//         home.gotToRegister()
//         register.fillRegisterForm()
//         register.submitRegisterForm()
//         dashboard.getButtonText().then(($btnText) => {
//             expect($btnText).contains('Explore New Courses')
//         })

//     })
// })


// // handing negative test-case through Api 
// describe('register without filling Email field with Api', () => {
//     var globalvar
//     function test_methon(response) {
//         cy.log('test_methon')
//         globalvar = JSON.stringify(response)
        
//     }
//     before(() => {
//         register.registerApi('sakjdskadj@dfasfj.com','sakjdskadj','usrsdfdsdfdffdfdfsname','aksjdaksjssdfsdfdfsdfdsddsd4444444','Pakistan',test_methon)


//     })

//     beforeEach(()=> {
//         Cypress.Cookies.preserveOnce('stage-edx-sessionid', 'edxloggedin', 'stage-edx-user-info', 'csrftoken')
//     })



//     it('lets the user register to the application', () => {
//         cy.log(globalvar)
//         expect(globalvar).not.have.string('A properly formatted e-mail is required')
//     })

// })

// //Handling negative test-cases through UI
// describe('Register test without filling any field', () => {
//     beforeEach(()=> {
//         cy.visit('/')
//     })
//     it('lets the user register to the application without filling form', () => {
//         const register = new RegisterPage()
//         home.gotToRegister()
//         register.submitRegisterForm()
//         register.errormsg().should('contain', 'We couldn\'t create your account.')        
//     })
//     it('lets the user register to the application without filling email_field', () => {
//         const register = new RegisterPage()
//         home.gotToRegister()
//         register.submitRegisterForm()
//         register.errormsg().should('contain', 'We couldn\'t create your account.')        
//     })     
// })

describe('Register test without filling Email field', () => {
    beforeEach(()=> {
        cy.visit('/')
    })
    it('lets the user register to the application without Email field', () => {
        const register = new RegisterPage()
        home.gotToRegister()
        var random_string = Utils.generate_random_string()
        var random_password = Utils.generate_random_string()

        register.fillRegisterForm(null,random_string,random_string,random_password,'Pakistan')
        register.submitRegisterForm()

        register.errormsg().should('contain', 'We couldn\'t create your account.')        
    })    
})

describe('Register test without filling name field', () => {
    beforeEach(()=> {
        cy.visit('/')
    })
    it('lets the user register to the application without name field', () => {
        const register = new RegisterPage()
        home.gotToRegister()
        var random_string = Utils.generate_random_string()
        var random_password = Utils.generate_random_string()

        register.fillRegisterForm(random_string+'@gamil.com',null,random_string,random_password,'Pakistan')
        register.submitRegisterForm()

        register.errormsg().should('contain', 'We couldn\'t create your account.')        
    })    
})

