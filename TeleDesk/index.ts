import { app, Menu, BrowserWindow, ipcMain} from "electron";
import {TeleClient} from "./src/models/TeleClient";
import { ITeleData } from "./src/models/ITeleData";
import { function_request_teledata } from "./src/models/Utilities";
import * as path from "path";

let mainWindow: BrowserWindow;

/**
 * Create an Electron window with the correct specifications. I.e.,
 * -width, -height, -title, -icon, -frame, -transparent, -resizable, -webPreferences (preload)
 */
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 700,
    title: "TeleDesk",
    icon: path.join(__dirname, 'src', 'media', 'favicon.png'),
    frame:true,
    transparent:false,
    resizable:false,
    webPreferences: {
      preload: path.join(__dirname, 'src', 'shared', 'preload.js')
    },
  });
  mainWindow.setMenu(null);
  mainWindow.loadFile(path.resolve(__dirname, '..', 'index.html')); 
}

 ipcMain.on(function_request_teledata, async (event, data) => {
  await TeleClient.getTeleDataByArgument(data).then(result=> {
    if (result!=null)
      // Append the number of the retrieved page manually
      // receiving the JSON-data.
      result.thisPage=data;
    event.returnValue=result;
  });
});

/**
 * Create window if 'ready' state is confirmed.
 */
app.on("ready", () => {
  createWindow();
});