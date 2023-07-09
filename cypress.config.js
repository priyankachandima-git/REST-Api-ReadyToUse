const { defineConfig } = require("cypress");

module.exports = defineConfig({
    "retries": 0,
    "video": false,
    "numTestsKeptInMemory": 0,
    "viewportWidth": 1535,
    "viewportHeight": 877,
    "defaultCommandTimeout":9000,
    "watchForFileChanges": false,
    "waitForAnimations": true,
    "animationDistanceThreshold": 5,
    "failOnSnapshotDiff": false,
    "experimentalStudio": true,
    "modifyObstructiveCode": false,
    "experimentalSourceRewriting": true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://api.restful-api.dev"
  },
});
