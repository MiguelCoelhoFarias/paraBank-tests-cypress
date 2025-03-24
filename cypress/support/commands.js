import loginPage from "./pages/loginPage";
import registerPage from "./pages/registerPage";
import { newUser } from "../support/faker"


Cypress.Commands.add('getUserValidRegistered', () => {
        cy.visit('/index.htm')
            loginPage.clickButtonRegisterUser();
            registerPage.confirmRegisterPage();
            const user = newUser();
                cy.writeFile('cypress/fixtures/dataUser.json', user);
                registerPage.fillFirstName(user.firstName);
                registerPage.fillLastName(user.lastName);
                registerPage.fillAddress(user.address);
                registerPage.fillCity(user.city);
                registerPage.fillState(user.state);
                registerPage.fillZipCode(user.zipCode);
                registerPage.fillPhoneNumber(user.phoneNumber);
                registerPage.fillSSN(user.ssn);
                registerPage.fillUserName(user.userName);
                registerPage.fillUserPassword(user.password);
                registerPage.fillRepeatPassword(user.password);
                registerPage.clickOnRegisterUser();
                registerPage.confirmCreatedAccount();
                loginPage.clickOnLoggout();
})