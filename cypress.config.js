const { defineConfig } = require("cypress");
const { setup } = require("@cypress/puppeteer")
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      setup({
        on,
        onMessage: {
          async myMessageHander (browser) {
            // Utilize the Puppeteer browser instance and the Puppeteer API to interact with and automate the browser
          },
        },
      })
    },
  },
})
