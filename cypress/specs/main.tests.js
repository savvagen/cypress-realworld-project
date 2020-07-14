let itParam = require('mocha-param');
let expect = require('chai').expect;
let MainPage = require('../pages/main.page')
let EditorPage = require('../pages/editor.page')
let ArticlePage = require('../pages/article.page')
let { LoginPage } = require("../pages/login.page")

describe("Main Page Tests", ()=>{

    let mainPage
    let loginPage
    let editorPage
    let articlePage
    before(()=>{
        mainPage = new MainPage()
        loginPage = new LoginPage()
        editorPage = new EditorPage()
        articlePage = new ArticlePage()
    })

    beforeEach(()=>{
        cy.clearCookies({log: true})
        //mainPage.open()
    })

    let myArticle = {
        title: 'Cypress Test Article',
        description: 'for testing',
        body: '## Hello World',
        tag: 'test'
    }

    it('should publish new article', function () {
        loginPage.open().loginWith('savva.genchevskiy@gmail.com', 'S.gench19021992')
            .newPost()
            .publishArticle(myArticle)
            .title.should('be.visible').should('have.text', myArticle.title)
        cy.url().should('contain', `${articlePage.url}/cypress-test-article`)

    });

    it('should open main page articles', function () {
        mainPage.open().articles.els.should((arts)=>{ expect(arts).to.have.length(10) })
        mainPage.globalFeedButton.click()
        mainPage.articles.eq(0).title.should('have.text', myArticle.title)
        mainPage.articles.eq(0).description.should('have.text', myArticle.description)
        cy.url().should('include', mainPage.url)
    });


})