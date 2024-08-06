import LoginPage from '../../Pages/loginPage';
import InventoryPage from '../../Pages/inventoryPage';
import ItemPage from '../../Pages/itemPage';
const credentials = require('../../fixtures/credentials.json');
const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const itemPage = new ItemPage();

describe('Item Page Tests', () => {
  beforeEach(() => {
    
    loginPage.visit();
    loginPage.enterUsername(credentials.username);
    loginPage.enterPassword(credentials.password);
    loginPage.clickLogin();
    cy.url().should('include', '/inventory.html');

    inventoryPage.clickItem(4);
    cy.url().should('include', '/inventory-item.html?id=4');
  });

  it('Verify UI elements on item page', () => {
    itemPage.verifyItemElements();
  });

  it('Verify add to cart button changes to remove', () => {
   
    cy.get('#add-to-cart').should('be.visible').and('have.text', 'Add to cart').as('addToCartButton');
    
    cy.get('@addToCartButton').click();
    cy.get('#remove', { timeout: 10000 }).should('be.visible').and('have.text', 'Remove');
  });

  it('Verify remove button changes to add to cart', () => {
    cy.get('#add-to-cart').should('be.visible').and('have.text', 'Add to cart').as('addToCartButton');
   
    cy.get('@addToCartButton').click();
    cy.get('#remove', { timeout: 10000 }).should('be.visible').and('have.text', 'Remove').as('removeButton');
    
    cy.get('@removeButton').click();
    cy.get('#add-to-cart', { timeout: 10000 }).should('be.visible').and('have.text', 'Add to cart');
  });
});