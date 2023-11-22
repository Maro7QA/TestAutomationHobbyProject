Feature("Sample Test");

Scenario("open my website", () => {
  const { I } = inject();
  I.amOnPage("https://www.magentasport.de");
});
