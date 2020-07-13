

/*function MainPage() {
    this.url = "/#/"
    this.title = "Conduit"

    this.accountButton = () => cy.contains("savva.genchevskiy")

}*/

class MainPage {
    constructor(props) {
        this.url = "/#/"
        this.title = "Conduit"
    }
    get accountButton() { return (username)=> cy.contains(username) }
    get signInButton() { return cy.contains('Sign in')}
    get signUpButton() { return cy.contains('Sign up')}
    get articles() { return cy.get("div .article-preview")}


}


module.exports = MainPage