const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //to add base url
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});