class requestLoanPage {

    elements = {
        buttonMenuOptionLoan: () => cy.get('#leftPanel > ul > :nth-child(7) > a'),
        inputLoanAmount: () => cy.get('#amount'),
        inputDownPayment: () => cy.get('#downPayment'),
        buttonConfirmLoan: () => cy.get('[colspan="2"] > .button'),
        confirmMessage: () => cy.get('#requestLoanResult > .title'),
        errorMessage: () => cy.get('#requestLoanError > .title')

    }

    selectMenuOptionLoan() {
        this.elements.buttonMenuOptionLoan().click();
    }

    fillLoanAmount(amount) {
        this.elements.inputLoanAmount().type(amount);
    }

    fillDownPayment(payment) {
        this.elements.inputDownPayment().type(payment);
    }

    confirmLoanButton() {
        this.elements.buttonConfirmLoan().click();
    }

    confirmMessageDone() {
        this.elements.confirmMessage().should('be.visible');
    }

    confirmMessageError() {
        this.elements.errorMessage().should('be.visible')
    }

} export default new requestLoanPage();