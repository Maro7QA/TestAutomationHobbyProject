Scenario('Access dataLayer using executeScript', async (I) => {
    I.amOnPage('https://example.com');

    // Use I.executeScript to execute script in browser context
    const dataLayer = await I.executeScript(() => {
        // The code inside here is executed in the browser context
        return dataLayer; // Assuming dataLayer is a global object in the browser
    });

    // You can now work with the dataLayer in Node.js context
    console.log('dataLayer:', dataLayer);
});
