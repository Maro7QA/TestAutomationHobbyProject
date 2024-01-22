const expect = require("chai").expect;

Feature('API calls')
Scenario('home @api-calls', async ({ I }) => {
    const res = await I.sendGetRequest(
        "https://www.magentasport.de/home"
    );
    expect(res.status).to.eql(200);
});


Scenario('Programme @api-calls', async ({ I }) => {
    const res = await I.sendGetRequest(
        "https://www.magentasport.de/programm"
    );
    expect(res.status).to.eql(200);
});

Scenario('Standings Euroleague @api-calls', async ({ I }) => {
    const res = await I.sendGetRequest(
        "https://www.magentasport.de/euroleague/tabelle"
    );
    expect(res.status).to.eql(200);
});

Scenario('Search Euroleague @api-calls', async ({ I }) => {
    const res = await I.sendGetRequest(
        "https://www.magentasport.de/home?searchText=Zalgiris%20Kaunas&category=all&page=1"
    );
    I.wait(2);
    expect(res.status).to.eql(200);
});

