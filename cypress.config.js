const { defineConfig } = require("cypress");



module.exports = defineConfig({
  e2e: {
    // supportFile: 'cypress/support/index.js',
 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    screenshotsFolder: 'cypress/screenshots', // Folder to save screenshots
    video: true, // Enable video recording
    videosFolder: 'cypress/videos', // Folder to save videos
    videoCompression: 32, // Compress videos (set to false for no compression)
    screenshotOnRunFailure: true, // Automatically capture screenshots on test failures

    baseUrl: 'https://new.bakuelectronics.az',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports', // Directory for the reports
      overwrite: false,
      html: true,
      json: true,
    },

  },
});
