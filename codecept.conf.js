const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/**/*_test.*s',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.magentasport.de/',
      // show: true,
      headless: false, // Set to true for headless mode
    },
    REST: {
      endpoint: 'https://www.magentasport.de/',
      defaultHeaders: {
        "Content-Type": "application/json",
        //apiKey:24242424242424
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'TestAutomationHobbyProject'
}