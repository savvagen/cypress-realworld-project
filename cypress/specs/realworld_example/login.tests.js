

describe("Login Tests", ()=>{
    before(()=>{

    })

    beforeEach(()=>{
        cy.clearCookies()
        cy.visit("/#/login")
    })

    it('should login with valid email and password', function () {
        //cy.contains("Sign in").click()
        cy.get("input[type='email']").should('be.visible').type("savva.genchevskiy@gmail.com", {delay: 1})
        cy.get("input[type='password']").should('be.visible').type("S.gench19021992", {force: true, delay: 1})
        cy.get("button[type='submit']").click()
        cy.contains("savva.genchevskiy").should('be.visible')
        cy.url().should('include', '/#/')
    });

    let negativeTests = [
        { email: 'savva.genchevsk@gmail.com', password: 'S.gench19021992'},
        { email: 'savva.genchevskiy@gmail.com', password: 'S.gench19021993'}
    ];

    /*negativeTests.forEach((test)=>{
        it('should login with invalid data: ' + test.email + '; ' + test.password, ()=> {
            cy.get("input[type='email']").should('be.visible').type(test.email, {delay: 1})
            cy.get("input[type='password']").should('be.visible').type(test.password, {force: true, delay: 1})
            cy.get("button[type='submit']").click()
            cy.get(".error-messages li").should('have.text', 'email or password is invalid')
            cy.url().should('include', '/#/')
        });
    })*/


})