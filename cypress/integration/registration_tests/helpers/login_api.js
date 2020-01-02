class LoginApi {
    
    loginApi() {
        cy.request({
            method: 'GET',
            url: 'https://courses.stage.edx.org/login'
        })
        cy.getCookie('csrftoken').its('value').then(($csrfToken) => {

            cy.request({
                method: 'POST',
                url: 'https://courses.stage.edx.org/user_api/v1/account/login_session/',
                form: true,
                headers: {
                    Referer: 'https://courses.stage.edx.org/login',
                    'X-CSRFToken': $csrfToken,
                },
                body: {
                    email: 'temp_user@yopmail.com',
                    password: 'edxedxedx1',
                }
            })
        })
    }
}

export default new LoginApi