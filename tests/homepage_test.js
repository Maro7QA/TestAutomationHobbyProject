const landingPage = require("../src/pages/landingPage");
const productLandingPage = require("../src/pages/productLandingPage");

Feature("homepage");

Scenario("open homepage @homepage", ({ I }) => {
    I.amOnPage("/");
     // Maximize the browser window
    I.resizeWindow(1920, 1080); // Set a large resolution to simulate maximizing
    landingPage.selectAcceptAllCookies();
    landingPage.selectBasketball();
    landingPage.showResults();
    I.waitForVisible(productLandingPage.offer, 10);
});