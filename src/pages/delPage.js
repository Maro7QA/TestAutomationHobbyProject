class DelPage {
    //locator Id's
    epgHeader=('(//*[@class="content-group__header"])[XX]');
    epgSwiper=('(//*[@class="wrapper lane-wrapper"])[XX]');
    gamesInEpgDel=('((//*[@class="wrapper lane-wrapper"])[XX]//*[@class="lane-event js-metadata-container"])[GG]');
    

    selectGameInEpgDel(EPGRow,gameNumber) {
        const { I } = inject();
        let gamesInEpgDelSetRow=this.gamesInEpgDel.replace("XX",EPGRow);
        const gamesInEpgDelSetGame=gamesInEpgDelSetRow.replace("GG",gameNumber);
        I.scrollTo(gamesInEpgDelSetGame,0,-200);
        I.wait(2);
        I.click(gamesInEpgDelSetGame,0,-200);
        }

    goToEpgHeader(EPGRow){
        const { I } = inject();
        I.scrollTo(this.epgHeader.replace("XX",EPGRow),0,-200);  
    }

}

module.exports = new DelPage();