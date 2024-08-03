import LoginPage from '../../Pages/loginPage';
const credentials = require('../../fixtures/credentials.json');
const loginPage = new LoginPage();

describe('Login Tests', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it('Successful login', () => {
    loginPage.enterUsername(credentials.username);
    loginPage.enterPassword(credentials.password);
    loginPage.clickLogin();
    cy.url().should('include', '/inventory.html');
  });

  it('Unsuccessful login with wrong password', () => {
    loginPage.enterUsername(credentials.username);
    loginPage.enterPassword('wrong_password');
    loginPage.clickLogin();
    loginPage.getErrorMessage().should('contain', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('Unsuccessful login with wrong username', () => {
    loginPage.enterUsername('wrong_user');
    loginPage.enterPassword(credentials.password);
    loginPage.clickLogin();
    loginPage.getErrorMessage().should('contain', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('Unsuccessful login with missing password', () => {
    loginPage.enterUsername(credentials.username);
    loginPage.clickLogin();
    loginPage.getErrorMessage().should('contain', 'Epic sadface: Password is required');
  });

  it('Unsuccessful login with missing username', () => {
    loginPage.enterPassword(credentials.password);
    loginPage.clickLogin();
    loginPage.getErrorMessage().should('contain', 'Epic sadface: Username is required');
  });
});