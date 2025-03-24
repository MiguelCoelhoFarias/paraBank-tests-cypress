import accountServicePage from "../support/pages/accountServicePage";
import loginPage from "../support/pages/loginPage";
import dataUser from "../fixtures/dataUser.json"
import transferPage from "../support/pages/transferPage";
import requestLoanPage from "../support/pages/requestLoanPage";



describe('Teste de solicitação de emprestimo', () => {
    beforeEach(() => {
        cy.visit('/index.htm')
        loginPage.fillUserName(dataUser.userName);
        loginPage.fillPassword(dataUser.password);
        loginPage.clickOnLogin();
    })


    it('Realizar solicitação de transferencia com sucesso', () => {
        requestLoanPage.selectMenuOptionLoan();
        requestLoanPage.fillLoanAmount('100');
        requestLoanPage.fillDownPayment('100');
        requestLoanPage.confirmLoanButton();
        requestLoanPage.confirmMessageDone();
    });

    it('Deve falhar com primeiro campo vazio', () => {
        requestLoanPage.selectMenuOptionLoan();
        requestLoanPage.fillDownPayment('100');
        requestLoanPage.confirmLoanButton();
        requestLoanPage.confirmMessageError();
    });

    
    it('Deve falhar com segundo campo vazio', () => {
        requestLoanPage.selectMenuOptionLoan();
        requestLoanPage.fillLoanAmount('100');
        requestLoanPage.confirmLoanButton();
        requestLoanPage.confirmMessageError();
    });
})