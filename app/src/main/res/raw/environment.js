ENVIRONMENT('');ZOOM();APPSTART();
STORE('local','FrameWork','Compose-Native');
STORE('local','FrameWorkVersion','0.0.1');
STORE('local','Device','Android');NETWORKED();
APPMODE(localStorage.getItem('ModeColour'),'',APPCOLORS);
CLICKED('body',()=>{CLIPBOARD();NETWORKED()});