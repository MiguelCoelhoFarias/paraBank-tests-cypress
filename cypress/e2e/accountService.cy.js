import accountServicePage from "../support/pages/accountServicePage";
import loginPage from "../support/pages/loginPage";
import dataUser from "../fixtures/dataUser.json"
describe('Account Service Testes', () => {

    beforeEach(() => {
        cy.visit('/index.htm')
        loginPage.fillUserName(dataUser.userName);
        loginPage.fillPassword(dataUser.password);
        loginPage.clickOnLogin();
    })


    it('Visualizar extrato e conta com sucesso', () => {
        accountServicePage.confirmTableAccounts();
        accountServicePage.confirmAvaliableTable();
        accountServicePage.confirmTableAccounts();
    })

    it('Abrir nova conta com sucesso - tipo checking', () => {
        accountServicePage.selectMenuNewAccount();
        accountServicePage.confirmNewAccountPage();
        accountServicePage.confirmCreateANewAccount();
        accountServicePage.messageConfirmCreateAccount();
    });

    it('Abrir nova conta com sucesso - tipo saving', () => {
        accountServicePage.selectMenuNewAccount();
        accountServicePage.confirmNewAccountPage();
        accountServicePage.selectTypeNewAccount();
        accountServicePage.confirmCreateANewAccount();
        accountServicePage.messageConfirmCreateAccount();
    });
})