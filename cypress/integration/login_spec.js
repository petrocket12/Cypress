describe('Login Tests', () => {
    const baseUrl = 'https://www.saucedemo.com';
  
    beforeEach(() => {
      cy.visit(baseUrl);
    });
  
    it('Successful login', () => {
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
      cy.url().should('eq', `${baseUrl}/inventory.html`);
    });
  
    it('Unsuccessful login with wrong password', () => {
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('wrong_password');
      cy.get('#login-button').click();
      cy.get('.error-message-container').should('contain', 'Epic sadface: Username and password do not match any user in this service');
    });
  
    it('Unsuccessful login with wrong username', () => {
      cy.get('#user-name').type('wrong_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
      cy.get('.error-message-container').should('contain', 'Epic sadface: Username and password do not match any user in this service');
    });
  
    it('Unsuccessful login with missing password', () => {
      cy.get('#user-name').type('standard_user');
      cy.get('#login-button').click();
      cy.get('.error-message-container').should('contain', 'Epic sadface: Password is required');
    });
  
    it('Unsuccessful login with missing username', () => {
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
      cy.get('.error-message-container').should('contain', 'Epic sadface: Username is required');
    });
  });