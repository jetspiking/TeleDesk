import { ipcRenderer, webFrame, contextBridge } from "electron"
import { 
  function_request_teledata 
} from "../models/Utilities";

/**
 * Bind 'tele.requestTeledata' as function to receive ITeleData.
 * The Electron 'ipcRenderer' takes care of the routing.
 */
contextBridge.exposeInMainWorld(
  'tele', 
  { 
    requestTeledata: (page: string) => 
    {
      return ipcRenderer.sendSync(function_request_teledata, page)
    }
  });
  