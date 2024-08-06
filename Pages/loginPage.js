class LoginPage {
    constructor() {
      this.usernameField = '#user-name';
      this.passwordField = '#password';
      this.loginButton = '#login-button';
      this.errorMessage = '.error-message-container';
    }
  
    visit() {
      cy.visit('/');
    }
  
    enterUsername(username) {
      cy.get(this.usernameField).type(username);
    }
  
    enterPassword(password) {
      cy.get(this.passwordField).type(password);
    }
  
    clickLogin() {
      cy.get(this.loginButton).click();
    }
  
    getErrorMessage() {
      return cy.get(this.errorMessage);
    }
  }
  
  export default LoginPage;