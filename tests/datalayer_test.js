Scenario('Access dataLayer using executeScript', async ({ I }) => {
    I.amOnPage('https://example.com'); // Replace with the actual URL of your page

    // Use I.executeScript to execute script in the browser context
    const dataLayer = await I.executeScript(() => {
        // The code inside here is executed in the browser context
        return window.dataLayer; // Assuming dataLayer is a global object in the browser
    });

    // You can now work with the dataLayer in Node.js context
    console.log('dataLayer:', dataLayer);

    // Your assertions or further actions based on the dataLayer content
    // I.see('ExpectedValue', dataLayer.someProperty); // Replace 'someProperty' and 'ExpectedValue' with your actual dataLayer properties and values

});
