export const config: CodeceptJS.MainConfig = {
  tests: "",
  output: "./output",
  helpers: {
    Playwright: {
      tests: "./tests/**/*_test.*s",
      browser: "chromium",
      url: "https://www.magentasport.de",
      show: true,
    },
  },
  include: {
    I: "./steps_file",
  },
  name: "TestAutomationHobbyProject",
};
