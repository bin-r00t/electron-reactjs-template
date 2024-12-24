import { useState } from "react";
import "./App.css";
import BrandLogo from "./assets/logo.png";

function App() {
  const [filePath, setFilePath] = useState<{ url: string; type: string }>({
    url: "",
    type: "file",
  });

  /** 选择文件 */
  const handleChooseFile = async () => {
    // issue: https://stackoverflow.com/questions/71309058/property-showsavefilepicker-does-not-exist-on-type-window-typeof-globalthis
    // @ts-ignore
    const filePath = await window.electron.toggleSelectFile();
    setFilePath({
      url: filePath as string,
      type: "file",
    });
  };

  /** 选择目录 */
  const handleChooseDir = async () => {
    // @ts-ignore
    const dirPath = await window.electron.toggleSelectDir();
    setFilePath({
      url: dirPath as string,
      type: "directory",
    });
    console.log("dir path", dirPath);
  };

  /** 下一步 */
  const handleToNext = () => {
    console.log("Next", filePath);
  };

  return (
    <>
      <div className="app-main flex-1 flex flex-col items-center gap-6 justify-center ">
        <img src={BrandLogo} alt="logo" className="w-24 h-24" />
        <h1 className="text-lg font-bold mx-32 text-center">
          A very dummy video converter based on FFmpeg
        </h1>
        <div className="flex gap-5">
          <h2 className="text-xs text-gray-400 underline">version: 1.0.0</h2>
          <h2 className="text-xs text-gray-400 underline">
            author: bin-r00t
            {/* Not recommended for production: */}
            {/* <a href="https://github.com/bin-r00t">author: bin-r00t</a> */}
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="text"
            disabled
            value={filePath.url}
            className="border min-w-96 rounded-md p-1 px-3 focus:outline-indigo-800 outline-offset-2 text-xs text-gray-600 text-ellipsis overflow-hidden text-nowrap"
          />
          <button
            className="bg-indigo-800 text-white p-2 px-5 rounded-md text-xs hover:bg-indigo-900 transition"
            onClick={handleChooseFile}
          >
            Choose File
          </button>
          <button
            className="bg-indigo-100 text-indigo-800 p-2 px-5 rounded-md text-xs hover:bg-indigo-200 transition"
            onClick={handleChooseDir}
          >
            Dirs
          </button>
        </div>
        <div className="hidden-area">
          {filePath?.url !== "" && (
            <button
              onClick={handleToNext}
              className="bg-green-600 text-white text-xs p-2 px-8 rounded-xl cursor-pointer hover:bg-green-500 transition"
            >
              Next {"\u21c0"}
              {/* https://unicode-explorer.com/list/arrows */}
              {/* 21c1 */}
              {/* 2192 */}
            </button>
          )}
        </div>
        <p className="text-xs text-gray-500 space-x-5">
          <a href="#" className="underline hover:text-gray-800 cursor-pointer">
            Need Help?
          </a>
          <a href="#" className="underline hover:text-gray-800 cursor-pointer">
            Docs
          </a>
          <a href="#" className="underline hover:text-gray-800 cursor-pointer">
            Contact
          </a>
          <a href="#" className="underline hover:text-gray-800 cursor-pointer">
            History
          </a>
          <a href="#" className="underline hover:text-gray-800 cursor-pointer">
            License
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
