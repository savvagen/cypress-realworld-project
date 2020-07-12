let itParam = require('mocha-param');
let expect = require('chai').expect;
let MainPage = require('../pages/main.page')
let RegistrationPage = require("../pages/registration.page")

let UserService = require('../services/user.service')
let faker = require('faker');
faker.locale = "en_US";


describe("Login Tests", ()=>{

    let registrationPage
    let mainPage

    before(()=>{
        registrationPage = new RegistrationPage()
        mainPage = new MainPage()
        let userService = new UserService("http://localhost:3000")
    })

    beforeEach(()=>{
        cy.clearCookies()
        registrationPage.open()
    })


    it('should register user', function () {
        let user = {
            username: `${faker.name.firstName()}.${faker.name.lastName()}`,
            email: faker.internet.email(),
            password: faker.internet.password()
        }
        registrationPage.register(user)
            .accountButton(user.username).should('be.visible')
        cy.url().should('include', mainPage.url)
    });


    let negativeTests = [
        {
            username: ' ',
            email: faker.internet.email(),
            password: faker.internet.password(),
            errorMessage: "username can't be blank"
        },
        {
            username: `${faker.name.findName()}testtesttesttesttesttest`,
            email: faker.internet.email(),
            password: faker.internet.password(),
            errorMessage: "username is too long (maximum is 20 characters)"
        }
    ];

    negativeTests.forEach((test)=>{
        it('should login with invalid data: ' + test.username + '; ' + test.email + '; ' + test.password, ()=> {

            registrationPage.typeUsername(test.username)
                .typeEmail(test.email)
                .typePassword(test.password)
                .submit()
                .errorMessage.should('have.text', test.errorMessage)
            cy.url().should('include', registrationPage.url)
        });
    })

})