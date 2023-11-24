import { expect } from "chai";
Feature('API calls')
Scenario('Verify some basic api-calls Get call @api-calls', async ({ I }) => {
    const res = await I.sendGetRequest(
        "https://www.verivox.de/"
    );
    expect(res.status).to.eql(200);
});
// Scenario('Verify some basic api-calls Post call @api-calls', async ({ I }) => {
//     bankPayload = {
//         "iban": "DE02100500000024290661"
//     }
//     const response = await I.sendPostRequest(
//         "https://service.vxdev.de/bank-account-details/v2/account-details",
//         bankPayload,
//         {
//             "Content-Type": "application/vnd.verivox.iban+json"
//         }
//     );
//     expect(response.status).to.eql(200);
// });