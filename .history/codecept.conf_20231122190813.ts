export const config: CodeceptJS.MainConfig = {
  tests: '',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost',
      show: true
    }
  },
  include: {
    I: './steps_file'
  },
  name: 'TestAutomationHobbyProject'
}