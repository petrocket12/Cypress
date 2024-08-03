import LoginPage from '../../Pages/loginPage';
import InventoryPage from '../../Pages/inventoryPage';
const credentials = require('../../fixtures/credentials.json');
const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

describe('Inventory Page Tests', () => {
  beforeEach(() => {
    loginPage.visit();
    loginPage.enterUsername(credentials.username);
    loginPage.enterPassword(credentials.password);
    loginPage.clickLogin();
    cy.url().should('include', '/inventory.html');
  });

  it('Verify UI elements on inventory page', () => {
    inventoryPage.verifyUiElements();
  });

  it('Verify sort options on inventory page', () => {
    inventoryPage.verifySortOptions();
  });

  it('Verify cart redirection', () => {
    inventoryPage.clickCart();
    cy.url().should('include', '/cart.html');
  });

  it('Verify item redirection', () => {
    inventoryPage.clickItem(4);
    cy.url().should('include', '/inventory-item.html?id=4');
  });
});