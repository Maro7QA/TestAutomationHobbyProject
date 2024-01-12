const landingPage = require("../src/pages/landingPage");

const expect = require("chai").expect;

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

let runs = new DataTable(["run"]);

const numbRuns = 1

for (let i = 1; i <= numbRuns; i++) {
  runs.add([i]);
}

Data(runs).Scenario('Tracking @window', async ({ I }) => {
    I.amOnPage('/');
    landingPage.selectAcceptAllCookies();
    // Example of using executeScript to change the page title
    I.wait(2);
    I.scrollPageToBottom();
    I.wait(2);
    I.scrollTo('[class="showcase-calendar"]');
    I.wait(1);
    I.scrollTo('(//*[@class="lane-event js-metadata-container"])[1]',0,-200);
    I.wait(4);
    I.click('(//*[@class="lane-event js-metadata-container"])[1]');
    I.wait(4);
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
        console.log(result[result.length-1].name);
        console.log(result.length-1);
      expect(JSON.stringify(result[result.length-1].name)).to.contain("ct=www.magenta");
});

Data(runs).Scenario('Tracking @home', async ({ I }) => {
    I.amOnPage('/home');
    landingPage.selectAcceptAllCookies();
    // Example of using executeScript to change the page title
    I.scrollTo('(//*[@class="epg-element__link"])[1]',0,-200);
    I.wait(2);
    I.click('(//*[@class="epg-element__link"])[1]');
    I.wait(7);

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
      //  console.log(result[result.length-1].name);
        console.log(result.length-1);
     expect(JSON.stringify(result)).to.contain("ct=content.video.epg.www.magentasport");
});

Data(runs).Scenario('Tracking @hockey', async ({ I }) => {
    I.amOnPage('/del');
    landingPage.selectAcceptAllCookies();
    I.wait(5);
     I.scrollTo('(//*[@class="content-group__header"])[8]');
     I.wait(2);
    I.wait(2);
    I.scrollTo('(//*[@class="wrapper lane-wrapper"])[8]');
    I.wait(1);
    // Example of using executeScript to change the page title
    I.scrollTo('((//*[@class="wrapper lane-wrapper"])[8]//*[@class="lane-event js-metadata-container"])[1]',0,-200);
    I.wait(2);
    I.click('((//*[@class="wrapper lane-wrapper"])[8]//*[@class="lane-event js-metadata-container"])[1]');
    I.wait(5);

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
     //   console.log(result[result.length-1].name);
        console.log(result.length-1);
    //  expect(JSON.stringify(result)).to.contain("ct=content.video.player");
});


