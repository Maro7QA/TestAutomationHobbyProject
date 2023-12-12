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
      url: 'https://www.magentasport.de',
      show: true,
      headless: false, // Set to true for headless mode
    },
    MailSlurp: {
      require: '@codeceptjs/mailslurp-helper',
      apiKey: '49d342d7e2c74c4061c2ce775af3d50b741298416f7ba7ae97b2f9acfc08e2e3'
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