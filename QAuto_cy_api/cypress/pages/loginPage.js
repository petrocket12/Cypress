class LoginPage {
    constructor() {
      this.signInButton = 'button:contains("Sign In")';
      this.emailField = 'input[name="email"]';
      this.passwordField = 'input[name="password"]';
      this.loginButton = 'button:contains("Login")';
    }
  
    visit() {
      cy.visit('https://qauto.forstudy.space', {
        auth: {
          username: 'guest',
          password: 'welcome2qauto',
        }
      });
    }
  
    clickSignIn() {
      cy.get(this.signInButton).click();
    }
  
    enterEmail(email) {
      cy.get(this.emailField).type(email);
    }
  
    enterPassword(password) {
      cy.get(this.passwordField).type(password);
    }
  
    clickLogin() {
      cy.get(this.loginButton).click();
    }
  }
  
  export default LoginPage;