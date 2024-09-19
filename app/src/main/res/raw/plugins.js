const BATTERY=(callback)=>{var battery=JSON.parse(Android.getBatteryLevel());callback(battery)};
const CONTACTS=(callback)=>{var contactsData=Android.getContacts();var parsedContacts=JSON.parse(contactsData);callback(parsedContacts)};
const NOTIFICATIONS=(e,A)=>{Android.showNotification(`${e}`,`${A}`)};
const READFILE=(Path,callback)=>{var fileData=Android.readFileAsUTF(Path);callback(fileData)};
const TOAST=(e)=>{Android.showToast(e)};
const RELOADPAGE=()=>{Android.reloadPage();};
const VIBRATION=(e)=>{Android.vibrate(e)};
const WRITEFILE=(filePath,data)=>{ const encodedData = btoa(data);Android.writeFile(filePath, encodedData);};
const CREATEFOLDER=(dirPath)=>{Android.createDirectory(dirPath);};
const DELETEFOLDER=(dirPath)=>{Android.deleteDirectory(dirPath)};
const DELETEFILE=(filePath)=>{Android.deleteFile(filePath);};
const READFILEDATA=(Path,callback)=>{var fileData=Android.readFileAsBase64(Path);callback(fileData)};
const MOVEFILE=(sourceFilePath,destDirPath)=>{Android.moveFile(sourceFilePath, destDirPath);}
const CREATECONTACT=(Name,Number)=>{Android.addContact(Name,Number);};
const UPDATECONTACT=(contactId,Name,Number)=>{Android.updateContact(contactId, Name, Number);};
const DELETECONTACT=(contactId)=>{Android.deleteContact(contactId)};
const NETWORKWIFI=(callback)=>{var data=Android.isConnectedToWiFi();callback(data)};
const NETWORKTYPE=(callback)=>{var data=Android.getNetworkType();callback(data)};
const NETWORKMOBILEDATA=(callback)=>{var data=Android.isConnectedToMobileData();callback(data)};
const NETWORKWIFISTRENGTH=(callback)=>{var data=Android.getWiFiSignalStrength();callback(data)};
const NETWORKMOBILETYPE=(callback)=>{var data=Android.getMobileNetworkType();callback(data)};
const NETWORKSTATE=(callback)=>{var data=Android.isNetworkAvailable();callback(data)};
const RELOADNEWPAGE=()=>{Android.goBack()};
const DEVICEEMAILS=(callback)=>{var contactsData=Android.getEmails();var parsedContacts=JSON.parse(contactsData);callback(parsedContacts)};
const STARTFOREGROUND=(title, message)=>{Android.startForegroundService(title, message)};
const STOPFOREGROUND=()=>{Android.stopForegroundService()};
const CAMERA=()=>{Android.openCamera()};
const NEWPAGE=(url)=>{
    Android.loadNewUrl(url)
}