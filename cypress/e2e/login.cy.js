/// <reference types ="Cypress" />
const credential = require ('../fixtures/userdate.json')


describe ("Login page", ()=>{

    before (() =>{
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();

    });
    beforeEach(() => {
        cy.visit ('/login');

    });

    it("Positive case - Successful login", () =>{
        cy.get("input[type='email']").type("malicaaa3@gmail.com");
        cy.get("input[type='password']").type("Kornjaca.9");
        cy.get("button[type='submit']").click();

        cy.url().should('contains', '/my-organizations');
        cy.get(('button[type="submit"]')).should('not.exist');
        
    });

    it("Negative case - Unseccesful login" , () =>{
        cy.visit ('/login');
         cy.get("input[type='email']").type("malicaaa33@gmail.com ");
         cy.get("input[type='password']").type("Kornjaca.9");
         cy.get("button[type='submit']").click();
         
         cy.url().should('contains', '/login');
         cy.get(('button[type="submit"]')).should('be.visible');
         cy.get('span[class="vs-c-user-name"]').should('not.exist');
         cy.get('span[class="el-form-item__error"]').should('be.visible');
    });

})