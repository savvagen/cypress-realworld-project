const ArticlePage = require('./article.page')

class EditorPage {

    constructor() {
        this.url = "/#/editor"
        this.title = "Conduit"
    }

    get articleTitleField() { return cy.get("input[placeholder='Article Title']") }
    get descriptionField() { return cy.get("input[placeholder*='article about']") }
    get bodyField() { return  cy.get("textarea")}
    get tagsField() { return  cy.get("input[placeholder='Enter tags']")}
    get publishButton(){ return  cy.contains("Publish Article")}

    publishArticle(article){
        this.articleTitleField.should('be.visible').type(article.title)
        this.descriptionField.type(article.description)
        this.bodyField.type(article.body)
        this.tagsField.type(article.tag)
        this.publishButton.should('be.visible').click()
        return new ArticlePage()
    }

}
module.exports = EditorPage