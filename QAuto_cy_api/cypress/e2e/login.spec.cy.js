import LoginPage from '../pages/loginPage';
const credentials = require('../fixtures/credentials.json');

describe('Login Tests', () => {
  const loginPage = new LoginPage();

  it('Login with valid credentials', () => {
    loginPage.visit();
    loginPage.clickSignIn();
    loginPage.enterEmail(credentials.email);
    loginPage.enterPassword(credentials.password);
    loginPage.clickLogin();
    cy.url().should('include', '/garage');
  });
});
