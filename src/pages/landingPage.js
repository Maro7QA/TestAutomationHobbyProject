class LandingPage {
    //locator Id's
    searchInputContainer = '[data-testid="searchBarInput"]';
    searchIcon = '[data-testid="searchIcon"]';
    basketballTab =
        '[class="font-button header__target-group-element header__target-group-element--basketball"]';
    acceptAllCookies = { css: '[id="consentAcceptAll"]' };
    showAllResults = { css: '[class="btn btn-magenta showcase__link"]' };

    selectAcceptAllCookies() {
        const { I } = inject();
        I.waitForVisible(this.acceptAllCookies);
        I.click(this.acceptAllCookies);
    }

    selectBasketball() {
        const { I } = inject();
        I.wait(1);
        I.waitForVisible(this.basketballTab);
        I.click(this.basketballTab);
    }

    showResults() {
        const { I } = inject();
        I.wait(1);
        I.scrollPageToTop();
        I.waitForVisible(this.showAllResults, 10);
        I.click(this.showAllResults);
    }
}

module.exports = new LandingPage();
