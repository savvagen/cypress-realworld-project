

class UserService {
    constructor(baseUrl= "http://localhost:3000", basePath = "/api/users") {
        this.baseUrl = baseUrl
        this.basePath = basePath
    }

    loginUser(user){
        return cy.request('POST', `${this.baseUrl}${this.basePath}/login`, {user: user})
            //.then((resp)=>{ expect(resp.status).to.eq(200) })
            //.as("login")

            //.should((response) => {
            //    expect(response.status).to.equal(200)
            //}).its('body.user.username').should('eq', user.username)

            // .its('body').then((body)=>{
            //     expect(body.user.username).to.eq(user.username)
            // })
    }

    registerUser(user){
        return cy.request('POST', `${this.baseUrl}${this.basePath}`, {user})
            //.its('status').should('eq', 200)
            // .then((response)=>{
            //     expect(response.status).to.be.equal(200)
            //     expect(response.body.user.username).to.eq(user.username.toLowerCase())
            //  })
    }

}

module.exports = UserService