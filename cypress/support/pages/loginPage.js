class LoginPage {

    elements = {
        titleLoginPage: () => cy.get('h2'),
        buttonNewUser: () => cy.get('#loginPanel > :nth-child(3) > a'),
        inputUserName: () => cy.get('form > :nth-child(2) > .input'),
        inputPassword: () => cy.get(':nth-child(4) > .input'),
        buttonLogin: () => cy.get(':nth-child(5) > .button'),
        loggoutButton: () => cy.get('#leftPanel > ul > :nth-child(8) > a'),
        confirmLoginUser: () => cy.get('#showOverview > .title'),
        errorMessage: () => cy.get('.error'),
        
    }
    
    
    clickButtonRegisterUser() {
        this.elements.buttonNewUser().click();
    }

    confirmLoginPage() {
        this.elements.titleLoginPage().should('be.visible');
    }

    fillUserName(userName) {
        this.elements.inputUserName().type(userName);
    }

    fillPassword(password) {
        this.elements.inputPassword().type(password);
    }

    clickOnLogin() {
        this.elements.buttonLogin().click();
    }

    clickOnLoggout() {
        this.elements.loggoutButton().click();
    }

    confirmLoginApp () {
        this.elements.confirmLoginUser().should('be.visible');
    }

    confirmErrorInformationRequired() {
        this.elements.errorMessage().contains('Please enter a username and password.')
    }


} export default new LoginPage();