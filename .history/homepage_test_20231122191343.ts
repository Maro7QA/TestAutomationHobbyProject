Feature("Sample Test");

Scenario("open my website", ({ I }) => {
  const { I } = inject();
  I.amOnPage("https://www.magentasport.de");
});
