class ArticlePage {

    constructor() {
        this.url = "/#/article"
    }

    get title(){ return cy.get('h1') }

}
module.exports = ArticlePage