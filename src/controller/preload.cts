const electron = require("electron");

console.log("preload.cts", electron);
electron.contextBridge.exposeInMainWorld("electron", {
  hello: () => {
    console.log("Hello from preload.cts");
  },
  toggleSelectFile: async () => {
    return await electron.ipcRenderer.invoke("select-file");
  },
  toggleSelectDir: async () => {
    return await electron.ipcRenderer.invoke("select-dir");
  },
  // ipcRenderer: electron.ipcRenderer,
  // remote: electron.remote,
  // shell: electron.shell,
  // clipboard: electron.clipboard,
  // desktopCapturer: electron.desktopCapturer,
  // process: {
  //     platform: process.platform,
  // },
  // require: require,
  // Buffer: Buffer,
});
