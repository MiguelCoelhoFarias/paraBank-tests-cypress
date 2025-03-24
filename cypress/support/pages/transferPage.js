class transferPage {

    elements = {
        menuOptionTransfer: () => cy.get('#leftPanel > ul > :nth-child(3) > a'),
        titleTransferPage: () => cy.get('#showForm > h1'),
        inputValueTransfer: () => cy.get('#amount'),
        buttonTransfer: () => cy.get(':nth-child(4) > .button'),
        titleTransferMessage: () => cy.get('#showResult > .title'),
        errorMessage: () => cy.get('#showError > .title')
    }

    selectTransferOptionMenu() {
        this.elements.menuOptionTransfer().click();
    }

    confirmTransferPage() {
        this.elements.titleTransferPage().should('be.visible');
    }

    fillValueTransfer(transferValue) {
        this.elements.inputValueTransfer().type(transferValue);
    }

    confirmTransferPressButton() {
        this.elements.buttonTransfer().click();
    }

    confirmMessageSuccess() {
        this.elements.titleTransferMessage().should('be.visible');
    }

    confirmErrorMessage() {
        this.elements.errorMessage().should('be.visible');
    }

} export default new transferPage();


