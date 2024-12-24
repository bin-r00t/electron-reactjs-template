import { app, BrowserWindow, dialog, ipcMain } from "electron";
import path from "path";
import { isDev } from "./utils/index.js";

/** select file */
const handleSelectFile: (
  type: "file" | "dir"
) => Promise<string | null> = async (type = "file") => {
  const result = await dialog.showOpenDialog({
    properties: [type === "file" ? "openFile" : "openDirectory"],
    filters: [
      {
        name: "Videos",
        extensions: ["mp4", "mkv", "avi", "webm", "mov", "flv", "wmv"],
      },
      { name: "All Files", extensions: ["*"] },
    ],
  });

  if (!result.canceled) {
    return result.filePaths[0];
  }

  return null;
};

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

  /** IPC */
  // choose file
  ipcMain.handle("select-file", async () => {
    return await handleSelectFile("file");
  });
  // choose directory
  ipcMain.handle("select-dir", async () => {
    return await handleSelectFile("dir");
  });
  /** end IPC */

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
