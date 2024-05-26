const { defineConfig } = require("cypress");
require("dotenv").config();
module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  viewportHeight: 1080,
  viewportWidth: 1920,
  chromeWebSecurity: false,
  env: {
    SITE_URL: process.env.SITE_URL,

    grepFilterSpecs: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      require("@cypress/grep/src/plugin")(config);
      return config;
      // implement node event listeners here
    },
    baseUrl: "https://techglobal-training.com",
    video: true,
  },
});
