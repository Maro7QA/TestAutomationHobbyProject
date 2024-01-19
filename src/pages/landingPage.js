class LandingPage {
    //locator Id's
    searchInputContainer = '[data-testid="searchBarInput"]';
    searchIcon = '[data-testid="searchIcon"]';
    basketballTab =
        '[class="font-button header__target-group-element header__target-group-element--basketball"]';
    acceptAllCookies = { css: '[id="consentAcceptAll"]' };
    showAllResults = { css: '[class="btn btn-magenta showcase__link"]' };
    liveNKostenlosHeader= 'h3.text-block__headline.h1';
    gamesInLiveNKostenlos=('((//*[@class="wrapper lane-wrapper"])[XX]//*[@class="lane-event js-metadata-container"])[GG]');

    selectAcceptAllCookies() {
        const { I } = inject();
        I.waitForVisible(this.acceptAllCookies);
        I.click(this.acceptAllCookies);
    }

    selectBasketball() {
        const { I } = inject();
        I.wait(4);
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

    scrollToLiveNKostenlos(){
        const { I } = inject();
        I.scrollTo(this.liveNKostenlosHeader);
    }

    selectGameInLiveNKostenlos(gameNumber) {
        const { I } = inject();
        let gamesInLiveNKostenlosSetRow=this.gamesInLiveNKostenlos.replace("XX",1);
        const gamesInLiveNKostenlosGame=gamesInLiveNKostenlosSetRow.replace("GG",gameNumber);
        I.scrollTo(gamesInLiveNKostenlosGame,0,-200);
        I.wait(2);
        I.click(gamesInLiveNKostenlosGame,0,-200);
        }
}

module.exports = new LandingPage();
