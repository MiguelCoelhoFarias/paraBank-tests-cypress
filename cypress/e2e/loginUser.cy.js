import loginPage from "../support/pages/loginPage";
import dataUser from "../fixtures/dataUser.json"
import { newUser } from "../support/faker"
import registerPage from "../support/pages/registerPage"


describe('Testes de login de Usuario', () => {

    beforeEach(() => {
        cy.visit('/index.htm')
        
    })

    it('Logar com usuário válido', () => {
        loginPage.fillUserName(dataUser.userName);
        loginPage.fillPassword(dataUser.password);
        loginPage.clickOnLogin();
        loginPage.confirmLoginApp();
    });

    it('Deve falhar ao nao preencher campo senha', () => {
        loginPage.fillUserName(dataUser.userName);
        loginPage.clickOnLogin();
        loginPage.confirmErrorInformationRequired();
    })

    it('Deve falhar ao nao preencher campo nome', () => {
        loginPage.fillPassword(dataUser.password)
        loginPage.clickOnLogin();
        loginPage.confirmErrorInformationRequired();
    })


})