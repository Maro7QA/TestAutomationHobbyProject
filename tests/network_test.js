// Feature('Network traffic')

// Scenario('Verify network traffic @network-traffic', async ({ I }) => {
//     I.amOnPage('/');
//     networkTraffic = await I.executeScript("window.performance.getEntries();")
//     console.log(networkTraffic);
// });

Feature('Example Feature');

Scenario('Execute Script Example', async ({ I }) => {
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
});
