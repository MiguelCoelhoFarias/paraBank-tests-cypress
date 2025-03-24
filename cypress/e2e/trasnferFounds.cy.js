import accountServicePage from "../support/pages/accountServicePage";
import loginPage from "../support/pages/loginPage";
import dataUser from "../fixtures/dataUser.json"
import transferPage from "../support/pages/transferPage";

describe('Testes de transferencia', () => {

beforeEach(() => {
    cy.visit('/index.htm')
    loginPage.fillUserName(dataUser.userName);
    loginPage.fillPassword(dataUser.password);
    loginPage.clickOnLogin();
})

it('Realizar transferencia de fundos com sucesso', () => {
    transferPage.selectTransferOptionMenu();
    transferPage.confirmTransferPage();
    transferPage.fillValueTransfer('100');
    transferPage.confirmTransferPressButton();
    transferPage.confirmMessageSuccess();
});

it('Deve falhar ao nao preencher valor de transferencia', () => {
    transferPage.selectTransferOptionMenu();
    transferPage.confirmTransferPage();
    transferPage.confirmTransferPressButton();
    transferPage.confirmErrorMessage();
});

})