ROUTECSS(localStorage.getItem('Styles'));
ROUTEJS(localStorage.getItem('Functions'));
ROUTEJS(localStorage.getItem('Payments'));
const APPSTART = () => {
    if (localStorage.getItem('Updates')) {
        AUTORUN();
    } else {
        if (localStorage.getItem('NetWork')) {
            syncData(APPID);
        } else {
            displaySyncScreen();
        }
    }
    const syncButton = document.querySelector('#SyncApp');
    const Synce = () => {
        if (localStorage.getItem('NetWork')) {
            LOADER(syncButton);
            syncData(APPID);
        } else {
            TOAST('Check Your Internet Connection');
        }
    };
    if (syncButton) {
        syncButton.onclick = Synce;
    }
};
const displaySyncScreen = () => {
    DISPLAY('', `
        <br>
        <h1>${APPNAMED}</h1>
        <p>${APPMOTTO}</p>
        <h4>Sync Device to Start Using the App</h4>
        <img class='AppLogo' src='${WHITESYNCICON}'/>
        <p>
            To Access Most Features On the App.<br><br>
            To Fix Any Bug Fixes On the App.
        </p>
        <button id='SyncApp' class='forestgreen'>Sync Device</button>
    `);
};