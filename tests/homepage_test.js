const landingPage = require("../src/pages/landingPage");
const productLandingPage = require("../src/pages/productLandingPage");

Feature("homepage");

Scenario("open homepage @homepage", ({ I }) => {
    I.amOnPage("/");
    landingPage.selectAcceptAllCookies();
    landingPage.selectBasketball();
    landingPage.showResults();
    I.waitForVisible(productLandingPage.offer, 10);
});