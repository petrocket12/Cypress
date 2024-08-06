class InventoryPage {
    constructor() {
      this.burgerMenuButton = '#react-burger-menu-btn';
      this.cartIcon = '#shopping_cart_container > a';
      this.sortDropdown = '#header_container > div.header_secondary_container > div > span > select';
    }
  
    getItemSelector(index) {
      return `#item_${index}_title_link > div`;
    }
  
    clickCart() {
      cy.get(this.cartIcon).click();
    }
  
    clickItem(index) {
      cy.get(this.getItemSelector(index)).click();
    }
  
    verifyUiElements() {
      cy.get(this.burgerMenuButton).should('be.visible');
      cy.get(this.cartIcon).should('be.visible');
      cy.get(this.sortDropdown).should('be.visible');
    }
  
    verifySortOptions() {
      const options = [
        '#header_container > div.header_secondary_container > div > span > select > option:nth-child(1)',
        '#header_container > div.header_secondary_container > div > span > select > option:nth-child(2)',
        '#header_container > div.header_secondary_container > div > span > select > option:nth-child(3)',
        '#header_container > div.header_secondary_container > div > span > select > option:nth-child(4)'
      ];
  
      options.forEach(option => {
        cy.get(option).should('exist');
      });
    }
  }
  
  export default InventoryPage;
  