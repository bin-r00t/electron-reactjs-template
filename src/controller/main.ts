import { app, BrowserWindow } from "electron";
import path from "path";
import { isDev } from "./utils/index.js";

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    webPreferences: {
      preload: path.join(
        app.getAppPath(),
        isDev() ? "." : "..",
        "/dist-electron/preload.cjs"
      ),
    },
  });

  if (isDev()) {
    win.loadURL("http://localhost:8000");
  } else {
    win.loadFile(path.join(app.getAppPath(), "../dist-web/index.html"));
  }
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
