class HomePage {
    //locator Id's
    gamesInEpg = '(//*[@class="epg-element__link"])[XX]';
    showCaseCalendar='[class="showcase-calendar"]';
    

    selectGameInEpg(gameNumber) {
        const { I } = inject();
    I.scrollTo(this.gamesInEpg.replace("XX",gameNumber),0,-200);
    I.wait(2);
    I.click(this.gamesInEpg.replace("XX",gameNumber),0,-200);
    }

}

module.exports = new HomePage();
