class accountServicePage {

    elements = {
        accountsTable: () => cy.get('thead > tr > :nth-child(1)'),
        ballanceTable: () => cy.get('thead > tr > :nth-child(2)'),
        avaliableTable: () => cy.get('thead > tr > :nth-child(3)'),
        buttonOptionNewAccount: () => cy.get('#leftPanel > ul > :nth-child(1) > a'),
        typeAccountList: () => cy.get('#type'),
        accountIdList: () => cy.get('#fromAccountId'),
        buttonConfirmNewAccount: () => cy.get('form > div > .button'),
        titleNewAccount: () => cy.get('#openAccountForm > .title'),
        messageConfirmCreateAccount: () => cy.get('#openAccountResult > :nth-child(2)')


    }

    confirmTableAccounts() {
        this.elements.accountsTable().should('be.visible');
    }

    confirmBallanceTable() {
        this.elements.ballanceTable().should('be.visible');
    }

    confirmAvaliableTable() {
        this.elements.avaliableTable().should('be.visible');
    }

    selectMenuNewAccount() {
        this.elements.buttonOptionNewAccount().click();
    }

    confirmNewAccountPage() {
        this.elements.titleNewAccount().should('be.visible');
    }

    confirmCreateANewAccount() {
        cy.wait(2500)
        this.elements.buttonConfirmNewAccount().click();
    }

    messageConfirmCreateAccount() {
        this.elements.messageConfirmCreateAccount().contains('Congratulations, your account is now open.');
    }

    selectTypeNewAccount() {
        this.elements.typeAccountList().select('SAVINGS');
    }

} export default new accountServicePage();
