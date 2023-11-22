Feature("Sample Test");

Scenario("open my website", ({ I }) => {
  const { I } = inject();
  I.amOnPage("http://todomvc.com/examples/react/");
  pause();
});
