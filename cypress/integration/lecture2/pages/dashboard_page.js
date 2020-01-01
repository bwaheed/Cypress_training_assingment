class DashboardPage {

    getButtonText() {
        return cy.get('.btn-neutral').invoke('text')
    }    
    
}
export default new DashboardPage