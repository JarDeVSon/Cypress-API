const { tr } = require("@faker-js/faker");
const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Cypress API Testing Report',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    env: {
      requestMode: true,
    },
    baseUrl: 'https://serverest.dev', 
    video: true,
    waitForAnimations: true,
    pageLoadTimeout: 10000,
    defaultCommandTimeout: 10000,
    requestTimeout: 6000,
    responseTimeout: 6000,
    retries: 1,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
