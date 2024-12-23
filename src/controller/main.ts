import { app, BrowserWindow } from "electron";
import path from "path";
import { isDev } from "./utils/index.js";

app.on("ready", () => {
  const win = new BrowserWindow({ width: 800, height: 600, resizable: false });

  if (isDev()) {
    win.loadURL("http://localhost:8000");
  } else {
    win.loadFile(path.join(app.getAppPath(), "/dist-web/index.html"));
  }
});
