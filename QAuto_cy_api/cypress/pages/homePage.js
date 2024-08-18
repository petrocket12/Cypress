class HomePage {
    constructor() {
      this.addCarButton = 'button:contains("Add car")';
      this.brandSelect = 'select[name="brand"]';
      this.modelSelect = 'select[name="model"]';
      this.mileageField = 'input[name="mileage"]';
      this.addButton = 'button:contains("Add")';
      this.carImage = 'img[alt="X5"]';
    }
  
    clickAddCar() {
      cy.get(this.addCarButton).click();
    }
  
    selectBrand(brandValue) {
      cy.get(this.brandSelect).select(brandValue);
    }
  
    selectModel(modelValue) {
      cy.get(this.modelSelect).select(modelValue);
    }
  
    enterMileage(mileage) {
      cy.get(this.mileageField).type(mileage);
    }
  
    clickAdd() {
      cy.get(this.addButton).click();
    }
  
    clickCarImage() {
      cy.get(this.carImage).click();
    }
  }
  
  export default HomePage;
  