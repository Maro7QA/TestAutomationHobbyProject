Feature('Network traffic')

Scenario('Verify network traffic @network-traffic', async ({ I }) => {
    I.amOnPage('/');
    networkTraffic = await I.executeScript("return window.performance.getEntries();")
    console.log(networkTraffic);
});
