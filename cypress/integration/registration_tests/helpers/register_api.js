class RegisterApi {
    
    registerApi(emial,name,username,password,country, callback) {
        cy.request({
            
            method: 'GET',
            url: 'https://courses.stage.edx.org/register'
        })
        cy.getCookie('csrftoken').its('value').then(($csrfToken) => {
            cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: 'https://courses.stage.edx.org/user_api/v1/account/registration/',
                form: true,
                headers: {
                    Referer: 'https://courses.stage.edx.org/register',
                    'X-CSRFToken': $csrfToken,
                },
                body: {
                    email: emial,
                    name: name,
                    username: username,
                    password: password,
                    country: country
                }
            }).then((response) =>{
                if(callback!= null){
                    callback(response)
                }
                
                
                // cy.log('callback')
                // callback(response)
                // cy.log(JSON.stringify(response))
            })
        })
    }
}

export default new RegisterApi