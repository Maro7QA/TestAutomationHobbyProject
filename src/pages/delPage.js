class DelPage {
    //locator Id's
    epgHeader=('(//*[@class="content-group__header"])[XX]');
    epgSwiper=('(//*[@class="wrapper lane-wrapper"])[XX]');
    gamesInEpgDel=('((//*[@class="wrapper lane-wrapper"])[XX]//*[@class="lane-event js-metadata-container"])[GG]');
    

    selectGameInEpgDel(EPGRow,gameNumber) {
        const { I } = inject();
        gamesInEpgDelSetRow=gamesInEpgDel.replace("XX",EPGRow);
        gamesInEpgDelSetGame=gamesInEpgDelSetRow.replace("GG",gameNumber);
        I.scrollTo(this.gamesInEpgDelSetGame,0,-200);
        I.wait(2);
        I.click(this.gamesInEpgDelSetGame,0,-200);
        }

}

module.exports = new DelPage();