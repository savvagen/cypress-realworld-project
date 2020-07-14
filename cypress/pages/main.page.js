const EditorPage = require('./editor.page')


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
    get yourFeedButton() { return cy.contains("Your Feed")}
    get globalFeedButton() { return cy.contains("Global Feed")}
    get articles() { return new Articles(cy.get("div .article-preview"))}
    get newPostButton() { return cy.get("a[href*='editor']")}

    open(){
        cy.visit(this.url).title().should('eq', this.title)
        return this
    }

    newPost(){
        this.newPostButton.should('be.visible').click()
        return new EditorPage()
    }
}


class Articles {

    constructor(els) {
        this.els = els
    }

    eq(index){
        return new Article(this.els.eq(index))
    }

}

class Article {

    constructor(el) {
        this.el = el;
    }

    get previewLink() { return this.el.find('a.preview-link')}
    get title() { return this.el.find("h1") }
    get description() { return this.el.find('.preview-link p')}


}

module.exports = MainPage