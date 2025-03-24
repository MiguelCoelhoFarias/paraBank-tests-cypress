class RegisterPage {

    elements = {
        titleRegisterPage: () => cy.get('.title'),
        inputFirstName: () => cy.get('input[id="customer.firstName"]'),
        inputLastName: () => cy.get('input[id="customer.lastName"]'),
        inputAddress: () => cy.get('input[id="customer.address.street"]'),
        inputCity: () => cy.get('input[id="customer.address.city"]'),
        inputState: () => cy.get('input[id="customer.address.state"]'),
        inputZipCode: () => cy.get('input[id="customer.address.zipCode"]'),
        inputPhoneNumber: () => cy.get('input[id="customer.phoneNumber"]'),
        inputSSN: () => cy.get('input[id="customer.ssn"]'),
        inputUserName: () => cy.get('input[id="customer.username"]'),
        inputPassword: () => cy.get('input[id="customer.password"]'),
        inputRepeatPassword: () => cy.get('#repeatedPassword'),
        buttonConfirmRegister: () => cy.get('[colspan="2"] > .button'),
        messageConfirmCreatedAccount: () => cy.get('#rightPanel > p'),
        messageErrorFirstNameRequired: () => cy.get('#customer\\.firstName\\.errors'),
        messageErrorLastNameRequired: () => cy.get('#customer\\.lastName\\.errors'),
        messageErrorAddressRequired: () => cy.get('#customer\\.address\\.street\\.errors'),
        messageErrorCityRequired: () => cy.get('#customer\\.address\\.city\\.errors'),
        messageErrorStateRequired: () => cy.get('#customer\\.address\\.state\\.errors'),
        messageErrorZipCodeRequired: () => cy.get('#customer\\.address\\.zipCode\\.errors'),
        messageErrorSSNRequired: () => cy.get('#customer\\.ssn\\.errors'),
        messageErrorUserNameRequired: () => cy.get('#customer\\.username\\.errors'),
        messageErrorPasswordRequired: () => cy.get('#customer\\.password\\.errors'),
        messageErrorPasswordRepeatedRequired: () => cy.get('#repeatedPassword\\.errors'),

    }

    confirmRegisterPage() {
        this.elements.titleRegisterPage().should('be.visible');
    }

    fillFirstName(firstName) {
        this.elements.inputFirstName().type(firstName);
    }

    fillLastName(lastName) {
        this.elements.inputLastName().type(lastName);
    }
    fillAddress(address) {
        this.elements.inputAddress().type(address);
    }
    fillCity(city) {
        this.elements.inputCity().type(city);
    }
    fillState(state) {
        this.elements.inputState().type(state);
    }
    fillZipCode(zipCode) {
        this.elements.inputZipCode().type(zipCode);
    }
    fillPhoneNumber(phoneNumber) {
        this.elements.inputPhoneNumber().type(phoneNumber);
    }
    fillSSN(ssn) {
        this.elements.inputSSN().type(ssn);
    }
    fillUserName(userName) {
        this.elements.inputUserName().type(userName);
    }
    fillUserPassword(password) {
        this.elements.inputPassword().type(password);
    }
    fillRepeatPassword(password) {
        this.elements.inputRepeatPassword().type(password);
    }
    clickOnRegisterUser() {
        this.elements.buttonConfirmRegister().click();
    }

    confirmCreatedAccount() {
        this.elements.messageConfirmCreatedAccount().should('be.visible');
    }

    confirmErrorFirstNameRequired() {
        this.elements.messageErrorFirstNameRequired().contains('First name is required.');
    }
    confirmErrorLastNameRequired() {
        this.elements.messageErrorLastNameRequired().contains('Last name is required.');
    }
    confirmErrorAddressRequired() {
        this.elements.messageErrorAddressRequired().contains('Address is required.');
    }

    confirmErrorCityRequired() {
        this.elements.messageErrorCityRequired().contains('City is required.');
    }

    confirmErrorStateRequired() {
        this.elements.messageErrorStateRequired().contains('State is required.')
    }

    confirmErrorZipCodeRequired() {
        this.elements.messageErrorZipCodeRequired().contains('Zip Code is required.')
    }

    confirmErrorSSNRequired() {
        this.elements.messageErrorSSNRequired().contains('Social Security Number is required.');
    }

    confirmErrorUserNameRequired() {
        this.elements.messageErrorUserNameRequired().contains('Username is required.')
    }

    confirmErrorPasswordRequired() {
        this.elements.messageErrorPasswordRequired().contains('Password is required.')
    }

    confirmErrorPasswordRepeatedRequired() {
        this.elements.messageErrorPasswordRepeatedRequired().contains('Password confirmation is required.')
    }
    confirmErrorDiferentPasswords() {
        this.elements.messageErrorPasswordRepeatedRequired().contains('Passwords did not match.')
    }


} export default new RegisterPage();