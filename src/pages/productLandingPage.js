class ProductLandingPage {
    offer = { css: '[class="angebot"]' };

    viewOffers() {
        const { I } = inject();
        I.waitForVisible(this.offer, 10);
        I.seeElement(this.offer);
    }
}

module.exports = new ProductLandingPage();
