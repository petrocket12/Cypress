class ItemPage {
  constructor() {
    this.itemImage = '#inventory_item_container > div > div > div.inventory_details_img_container > img';
    this.itemDescription = '#inventory_item_container > div > div > div.inventory_details_desc_container > div.inventory_details_desc.large_size';
    this.itemPrice = '#inventory_item_container > div > div > div.inventory_details_desc_container > div.inventory_details_price';
    this.itemName = '#inventory_item_container > div > div > div.inventory_details_desc_container > div.inventory_details_name.large_size';
    this.addToCartButton = '#add-to-cart';
    this.removeButton = '#remove';
  }

  verifyItemElements() {
    cy.get(this.itemImage).should('be.visible');
    cy.get(this.itemDescription).should('be.visible');
    cy.get(this.itemPrice).should('be.visible');
    cy.get(this.itemName).should('be.visible');
  }

  clickAddToCart() {
    cy.get(this.addToCartButton).click();
  }

  clickRemove() {
    cy.get(this.removeButton).click();
  }
}

export default ItemPage;