export const config: CodeceptJS.MainConfig = {
  tests: "./tests/**/*_test.*s",
  output: "./output",
  helpers: {
    Playwright: {
      browser: "chromium",
      url: "http://localhost",
      show: true,
    },
  },
  include: {
    I: "./steps_file",
  },
  name: "TestAutomationHobbyProject",
};
