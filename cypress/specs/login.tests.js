let itParam = require('mocha-param');
let expect = require('chai').expect;
let MainPage = require('../pages/main.page')
let { LoginPage } = require("../pages/login.page")
let UserService = require('../services/user.service')
let faker = require('faker');
faker.locale = "en_US";


describe("Login Tests", ()=>{

    let loginPage
    let mainPage

    let myUser = {
        username: 'savva.genchevskiy',
        email: 'savva.genchevskiy@gmail.com',
        password: 'S.gench19021992'
    }
    let newUser = {
        username: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }

    before(()=>{
        loginPage = new LoginPage()
        mainPage = new MainPage()
        let userService = new UserService("http://localhost:3000")
        /*userService.registerUser(newUser)
            .its('status').should('eq', 200)*/
    })

    beforeEach(()=>{
        cy.clearCookies({log: true})
        loginPage.open()
    })


    it('should login user', function () {
        loginPage.loginWith(myUser.email, myUser.password)
            .accountButton("savva.genchevskiy").should('be.visible')
        cy.url().should('include', myUser.url)
    });

    let negativeTests = [
        { email: 'savva.genchevsk@gmail.com', password: 'S.gench19021992'},
        { email: 'savva.genchevskiy@gmail.com', password: 'S.gench19021993'}
    ];

    negativeTests.forEach((test)=>{
        it('should login with invalid data: ' + test.email + '; ' + test.password, ()=> {
            loginPage.loginForm.typeEmail(test.email).typePassword(test.password).submit()
                .errorMessage.should('have.text', 'email or password is invalid')
            cy.url().should('include', loginPage.url)
        });
    })

    /*itParam('should login with invalid data', negativeTests, (test)=> {
        cy.get("input[type='email']").should('be.visible').type(test.email, {delay: 1})
        cy.get("input[type='password']").should('be.visible').type(test.password, {force: true, delay: 1})
        cy.get("button[type='submit']").click()
        cy.get(".error-messages li").should('have.text', 'email or password is invalid')
        cy.url().should('include', '/#/')
    });*/


})