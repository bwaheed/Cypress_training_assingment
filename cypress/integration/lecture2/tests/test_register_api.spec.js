import register from '../helpers/register_api'

describe('register tests', () => {
    before(() => {
        register.registerApi('sjddsja@aksjdddhsa.com','sadjashdjsddda33','skjhdshdddj','aksjdaksjd4444444','Afghanistan', null)

    })
    beforeEach(()=> {
        Cypress.Cookies.preserveOnce('stage-edx-sessionid', 'edxloggedin', 'stage-edx-user-info', 'csrftoken')
        cy.visit('/')
    })

    it('lets the user register to the application', () => {
        cy.title().should('contain', 'Free Online Courses by Harvard')
    })

    it('lets the user register to the application', () => {
        cy.title().should('contain', 'Free Online Courses by Harvard')
        
    })
})