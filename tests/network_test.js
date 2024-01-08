const landingPage = require("../src/pages/landingPage");

Feature('Example Feature');

xScenario('Execute Script Example', async ({ I }) => {
    I.amOnPage('https://example.com');

    // Example of using executeScript to change the page title
    I.executeScript(() => {
        document.title = 'New Page Title';
    });

    // You can also use executeScript to return a value
    const pageTitle = I.executeScript(() => {
        return document.title;
    });

    I.say(`The new page title is: ${pageTitle}`);

    // Use page.evaluate to execute script in browser context
    const networkTraffic = await I.executeScript(() => {
        // The code inside here is executed in the browser context
        return window.performance.getEntries();
    });

    console.log(networkTraffic);
});

Scenario('Tracking', async ({ I }) => {
    I.amOnPage('/');
    landingPage.selectAcceptAllCookies();
    // Example of using executeScript to change the page title
    I.scrollTo('[class="showcase-calendar"]');
    I.wait(1);
    I.scrollTo('(//*[@class="lane-event js-metadata-container"])[1]',0,-200);
    I.wait(1);
    I.click('(//*[@class="lane-event js-metadata-container"])[1]');
    I.wait(3);

    // Use page.evaluate to execute script in browser context
    const networkTraffic = await I.executeScript(() => {
        // The code inside here is executed in the browser context
        return window.performance.getEntries();
    });

    function containsSubstring(networkTraffic, substring) {
        return networkTraffic.filter(item => item.name.includes(substring));
      }
      
      // Check if the substring exists in the "name" field
      const result = containsSubstring(networkTraffic, "https://pix.telekom.de/");
      
      // Display the result
      console.log(result);
});
