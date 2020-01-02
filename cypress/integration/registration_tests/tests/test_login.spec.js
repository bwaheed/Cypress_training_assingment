import LoginPage from '../pages/login_page'
import home from '../pages/home_page'
import dashboard from '../pages/dashboard_page'

describe('Login tests', () => {
    beforeEach(()=> {
        cy.visit('/')
    })
    it('lets the user login to the application', () => {
        const login = new LoginPage()
        home.gotToLogin()
        login.fillLoginForm()
        login.submitLoginForm()
        dashboard.getButtonText().then(($btnText) => {
            expect($btnText).contains('Explore New Courses')
        })
    })
})