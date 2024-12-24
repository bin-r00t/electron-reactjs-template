import "./App.css";
import ReactIcon from "./assets/react.svg";

function App() {

  // @ts-ignore
  console.log('In React:------------', window.electron.hello())

  return (
    <>
      <div className="app-main flex-1 flex flex-col items-center gap-6 justify-center ">
        <img src={ReactIcon} alt="logo" className="w-24 h-24" />
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
            className="border min-w-96 rounded-md p-1 px-3 focus:outline-indigo-800 outline-offset-2"
          />
          <button className="bg-indigo-800 text-white p-2 px-5 rounded-md text-xs hover:bg-indigo-900 transition">
            Choose File
          </button>
          <button className="bg-indigo-100 text-indigo-800 p-2 px-5 rounded-md text-xs hover:bg-indigo-200 transition">
            Dirs
          </button>
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
