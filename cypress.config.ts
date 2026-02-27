import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: 'app/tests/e2e/support/e2e.{js,jsx,ts,tsx}',
    specPattern: 'app/tests/e2e/**/*.cy.{js,jsx,ts,tsx}',
    fixturesFolder: 'app/tests/e2e/fixtures',
    downloadsFolder: 'app/tests/e2e/downloads',
    screenshotsFolder: 'app/tests/e2e/screenshots',
    videosFolder: 'app/tests/e2e/videos',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    }
  }
})
