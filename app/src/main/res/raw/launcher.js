const APPSTART = () => {
    if (localStorage.getItem('Updates')) {
        AUTORUN();
    } else {
        if (localStorage.getItem('NetWork')) {
            DISPLAY('',`
                <br><br><br><br><br><br><br><br>
                <h1>${APPNAMED} Is Checking For Updates </h1>
                <p id='Message'>Please Wait</p>
                <button id='LoaderButton'></button>
                <img class='AppLogo' src='${WHITESYNCICON}'/>
                <p>${APPMOTTO}</p>
            `);
            const LoaderButton=document.querySelector('#LoaderButton');
            LOADER(LoaderButton);
            SYNCAPPDATA(APPID);
            const Message=document.querySelector('#Message');
            setTimeout(() => {
                DISPLAY(Message,'Updates Found');
                setTimeout(() => {
                    DISPLAY(Message,'Updates Downloading');
                    setInterval(() => {
                        DISPLAY(Message,'Updates Installing...');
                    }, 2000);
                }, 1000);
            }, 1000);
        } else {
            displaySyncScreen();
        }

    }
    const syncButton = document.querySelector('#SyncApp');
    const Synce = () => {
        if (localStorage.getItem('NetWork')) {
            LOADER(syncButton);
            SYNCAPPDATA(APPID);
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