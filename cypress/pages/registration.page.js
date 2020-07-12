const MainPage = require('./main.page')


class RegistrationPage {

    constructor() {
        this.url = "/#/register"
        this.title = "Conduit"
    }

    get usernameField() { return cy.get("input[type='text']")}
    get emailField(){ return cy.get("input[type='email']") }
    get passwordField(){ return  cy.get("input[type='password']") }
    get submitButton() { return cy.get("button[type='submit']") }
    get errorMessage() { return cy.get("ul.error-messages > li") }

    open(){
        cy.visit(this.url).title().should('eq', this.title)
        return this
    }

    typeUsername(username){
        this.usernameField.should('be.visible').type(username, {delay: 5})
        return this
    }

    typeEmail(email){
        this.emailField.should('be.visible').type(email, {delay: 1})
        return this
    }

    typePassword(password){
        this.passwordField.should('be.visible').type(password, {delay: 1})
        return this
    }

    submit(){
        this.passwordField.type('{enter}')
        return this
    }

    register(user){
        this.typeUsername(user.username)
            .typeEmail(user.email)
            .typePassword(user.password)
        this.submitButton.click()
        return new MainPage()
    }

}

module.exports = RegistrationPage