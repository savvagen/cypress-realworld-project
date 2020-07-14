const MainPage = require('./main.page')


/*let LoginPage = function() {
    this.url = "/#/login"
    this.title = "Conduit"

    /!*this.emailField = () => cy.get("input[type='email']")
    this.passwordField = () => cy.get("input[type='password']")
    this.submitButton = () => cy.get("button[type='submit']")
    this.errorMessage = () => cy.get(".error-messages li")

    this.open = ()=> {
        cy.visit(this.url)
        return this
    }

    /!**
     * @param email {String}
     * @param password {String}
     * @returns {MainPage}
     **!/
    this.loginWith = (email, password) => {
        this.emailField().should('be.visible').type("savva.genchevskiy@gmail.com", {delay: 1})
        this.passwordField().should('be.visible').type("S.gench19021992", {force: true, delay: 1})
        this.submitButton().click()
        return new MainPage()
    }*!/
}*/

/*LoginPage.prototype = Object.create({}, {

    // getters
    //url: "/#/login",
    //title: "Conduit",
    emailField :   { get: ()=> cy.get("input[type='email']") },
    passwordField: { get: ()=> cy.get("input[type='password']") },
    submitButton:  { get: ()=> cy.get("button[type='submit']") },
    errorMessage:  { get: ()=> cy.get(".error-messages li") },

    open: { value: function () {
        cy.visit(this.url).title().should('eq', this.title)
        return this
    }},

    loginWith: { value: function(email, password) {
        this.emailField.should('be.visible').type(email, {delay: 1})
        this.passwordField.should('be.visible').type(password, {force: true, delay: 1})
        this.submitButton.click()
        return new MainPage()
    }}
})*/


class LoginPage {
    constructor() {
        this.url = "/#/login"
        this.title = "Conduit"
    }
    get loginForm() { return new LoginForm(cy.get(".auth-page *[class='container page']"))}

    open(){
        cy.visit(this.url).title().should('eq', this.title)
        return this
    }

    loginWith(email, password){
        this.loginForm.el.should('be.visible')
        return this.loginForm.login(email, password)
    }

    /*get emailField(){ return cy.get("input[type='email']") }
    get passwordField(){ return  cy.get("input[type='password']") }
    get submitButton() { return cy.get("button[type='submit']") }
    get errorMessage() { return cy.get(".error-messages li") }
    get loginForm() { return new LoginForm(cy.get(".auth-page *[class='container page']"))}


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

    open(){
        cy.visit(this.url).title().should('eq', this.title)
        return this
    }

    loginWith(email, password){
        this.typeEmail(email).typePassword(password)
        this.submitButton.click()
        return new MainPage()
    }*/

}

class LoginForm {
    /**
     * @param el {cy}
     */
    constructor(el) {
        this.el = el
    }

    get emailField(){ return cy.get("input[type='email']") }
    get passwordField(){ return  cy.get("input[type='password']") }
    get submitButton() { return cy.get("button[type='submit']") }
    get errorMessage() { return cy.get(".error-messages li") }
    get loginForm() { return new LoginForm(cy.get(".auth-page *[class='container page']"))}


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

    login(email, password){
        this.typeEmail(email).typePassword(password)
        this.submitButton.click()
        return new MainPage()
    }


}

module.exports = { LoginPage }




