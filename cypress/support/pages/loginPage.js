class LoginPage {

    elements = {
        buttonNewUser: () => cy.get('#loginPanel > :nth-child(3) > a')
    }


    clickButtonRegisterUser() {
        this.elements.buttonNewUser().click();
    }


} export default new LoginPage();