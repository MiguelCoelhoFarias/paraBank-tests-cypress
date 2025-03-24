import { newUser } from "../support/faker"
import loginPage from "../support/pages/loginPage"
import registerPage from "../support/pages/registerPage"


describe('testes de registrar Usuario', () => {

  beforeEach(() => {
    cy.visit('/index.htm')
    loginPage.clickButtonRegisterUser();
    registerPage.confirmRegisterPage();
  })

  it('Registrar usuário com sucesso', () => {
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
  })

  it('Falhar ao tentar criar usuário sem primeiro nome', () => {
    const user = newUser();
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
    registerPage.confirmErrorFirstNameRequired();
  })

  it('Falhar ao tentar criar usuário sem ultimo nome', () => {
    const user = newUser();
    registerPage.fillFirstName(user.firstName);
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
    registerPage.confirmErrorLastNameRequired();
  })

  it('Falhar ao tentar criar usuário sem passar endereço', () => {
    const user = newUser();
    registerPage.fillFirstName(user.firstName);
    registerPage.fillLastName(user.lastName);
    registerPage.fillCity(user.city);
    registerPage.fillState(user.state);
    registerPage.fillZipCode(user.zipCode);
    registerPage.fillPhoneNumber(user.phoneNumber);
    registerPage.fillSSN(user.ssn);
    registerPage.fillUserName(user.userName);
    registerPage.fillUserPassword(user.password);
    registerPage.fillRepeatPassword(user.password);
    registerPage.clickOnRegisterUser();
    registerPage.confirmErrorAddressRequired();
  })

  
  it('Falhar ao tentar criar usuário sem passar sua Cidade', () => {
    const user = newUser();
    registerPage.fillFirstName(user.firstName);
    registerPage.fillLastName(user.lastName);
    registerPage.fillAddress(user.address)
    registerPage.fillState(user.state);
    registerPage.fillZipCode(user.zipCode);
    registerPage.fillPhoneNumber(user.phoneNumber);
    registerPage.fillSSN(user.ssn);
    registerPage.fillUserName(user.userName);
    registerPage.fillUserPassword(user.password);
    registerPage.fillRepeatPassword(user.password);
    registerPage.clickOnRegisterUser();
    registerPage.confirmErrorCityRequired();
  })

  
  it('Falhar ao tentar criar usuário sem passar seu Estado', () => {
    const user = newUser();
    registerPage.fillFirstName(user.firstName);
    registerPage.fillLastName(user.lastName);
    registerPage.fillAddress(user.address);
    registerPage.fillCity(user.city);
    registerPage.fillZipCode(user.zipCode);
    registerPage.fillPhoneNumber(user.phoneNumber);
    registerPage.fillSSN(user.ssn);
    registerPage.fillUserName(user.userName);
    registerPage.fillUserPassword(user.password);
    registerPage.fillRepeatPassword(user.password);
    registerPage.clickOnRegisterUser();
    registerPage.confirmErrorStateRequired();
  })

  it('Falhar ao tentar criar usuário sem passar seu código postal', () => {
    const user = newUser();
    registerPage.fillFirstName(user.firstName);
    registerPage.fillLastName(user.lastName);
    registerPage.fillAddress(user.address);
    registerPage.fillCity(user.city);
    registerPage.fillState(user.state);
    registerPage.fillPhoneNumber(user.phoneNumber);
    registerPage.fillSSN(user.ssn);
    registerPage.fillUserName(user.userName);
    registerPage.fillUserPassword(user.password);
    registerPage.fillRepeatPassword(user.password);
    registerPage.clickOnRegisterUser();
    registerPage.confirmErrorZipCodeRequired();
  })

  it('Falhar ao tentar criar usuário sem passar seu SSN', () => {
    const user = newUser();
    registerPage.fillFirstName(user.firstName);
    registerPage.fillLastName(user.lastName);
    registerPage.fillAddress(user.address);
    registerPage.fillCity(user.city);
    registerPage.fillState(user.state);
    registerPage.fillZipCode(user.zipCode);
    registerPage.fillPhoneNumber(user.phoneNumber);
    registerPage.fillUserName(user.userName);
    registerPage.fillUserPassword(user.password);
    registerPage.fillRepeatPassword(user.password);
    registerPage.clickOnRegisterUser();
    registerPage.confirmErrorSSNRequired();
  })

  it('Falhar ao criar usuario sem passar nome para Perfil', () => {
    const user = newUser();
    registerPage.fillFirstName(user.firstName);
    registerPage.fillLastName(user.lastName);
    registerPage.fillAddress(user.address);
    registerPage.fillCity(user.city);
    registerPage.fillState(user.state);
    registerPage.fillZipCode(user.zipCode);
    registerPage.fillPhoneNumber(user.phoneNumber);
    registerPage.fillSSN(user.ssn);
    registerPage.fillUserPassword(user.password);
    registerPage.fillRepeatPassword(user.password);
    registerPage.clickOnRegisterUser();
    registerPage.confirmErrorUserNameRequired();
  })

  it('Falhar ao criar usuario sem passar senha para conta', () => {
    const user = newUser();
    registerPage.fillFirstName(user.firstName);
    registerPage.fillLastName(user.lastName);
    registerPage.fillAddress(user.address);
    registerPage.fillCity(user.city);
    registerPage.fillState(user.state);
    registerPage.fillZipCode(user.zipCode);
    registerPage.fillPhoneNumber(user.phoneNumber);
    registerPage.fillSSN(user.ssn);
    registerPage.fillUserName(user.userName);
    registerPage.fillRepeatPassword(user.password);
    registerPage.clickOnRegisterUser();
    registerPage.confirmErrorPasswordRequired();
  })

  it('Falhar ao criar usuario sem preencher campo de confirmação de senha', () => {
    const user = newUser();
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
    registerPage.clickOnRegisterUser();
    registerPage.confirmErrorPasswordRepeatedRequired();
  })

  it('Falhar ao criar usuario com campo senha e campo confirmar senha com dados diferentes', () => {
    const user = newUser();
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
    registerPage.fillRepeatPassword(user.firstName);
    registerPage.clickOnRegisterUser();
    registerPage.confirmErrorDiferentPasswords();
  })
})