/// <reference types ="Cypress" />
import {loginPage} from '../page_object/loginPage'

describe ("Create Board" , () => {

    it.only('Positive case - successful created board', () =>{
        cy.visit('/login');
        cy.get('malicaaa3@gmail.com', 'Kornjaca.9');
        cy.wait(2000);
        cy.visit('/boards/15866');
        loginPage.submitBtn.click();
      

    })
})