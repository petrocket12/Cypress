import LoginPage from '../../Pages/loginPage';

const loginPage = new LoginPage();

describe('Login Tests', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it('Successful login', () => {
    loginPage.enterUsername(Cypress.env('USER_NAME'));
    loginPage.enterPassword(Cypress.env('USER_PASSWORD'));
    loginPage.clickLogin();
    cy.url().should('include', '/inventory.html');
  });

  it('Unsuccessful login with wrong password', () => {
    loginPage.enterUsername(Cypress.env('USER_NAME'));
    loginPage.enterPassword('wrong_password');
    loginPage.clickLogin();
    loginPage.getErrorMessage().should('contain', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('Unsuccessful login with wrong username', () => {
    loginPage.enterUsername('wrong_user');
    loginPage.enterPassword(Cypress.env('USER_PASSWORD'));
    loginPage.clickLogin();
    loginPage.getErrorMessage().should('contain', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('Unsuccessful login with missing password', () => {
    loginPage.enterUsername(Cypress.env('USER_NAME'));
    loginPage.clickLogin();
    loginPage.getErrorMessage().should('contain', 'Epic sadface: Password is required');
  });

  it('Unsuccessful login with missing username', () => {
    loginPage.enterPassword(Cypress.env('USER_PASSWORD'));
    loginPage.clickLogin();
    loginPage.getErrorMessage().should('contain', 'Epic sadface: Username is required');
  });
});
