const baseUrl = 'https://qauto.forstudy.space';
const credentials = require('../fixtures/credentials.json');

describe('API Login Tests', () => {
  it('Should login with valid credentials via API', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/api/auth/signin`,
      body: {
        email: credentials.email,
        password: credentials.password
      }
    }).then((response) => {
     
      expect(response.status).to.eq(200);
    });
  });

  it('Should not login with invalid credentials via API', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/api/auth/signin`,
      body: {
        email: credentials.email,
        password: 'invalid_password'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(400);
    });
  });

  it('Should not login with invalid email and valid password via API', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/api/auth/signin`,
      body: {
        email: 'invalid_email@example.com',
        password: credentials.password
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(400);
    });
  });
});
