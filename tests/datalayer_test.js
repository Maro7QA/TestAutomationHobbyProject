const landingPage = require("../src/pages/landingPage");

Scenario('Access dataLayer using executeScript', async ({ I }) => {
    I.amOnPage("/");
    landingPage.selectAcceptAllCookies();
    I.wait(2);
    const dataLayer = await I.executeScript(() => {
        // The code inside here is executed in the browser context
        return window.dataLayer; // Assuming dataLayer is a global object in the browser
    });

    // You can now work with the dataLayer in Node.js context
    console.log('dataLayer:', dataLayer);

    // Your assertions or further actions based on the dataLayer content
    // I.see('ExpectedValue', dataLayer.someProperty); // Replace 'someProperty' and 'ExpectedValue' with your actual dataLayer properties and values

});
