const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://app.cymulate.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
