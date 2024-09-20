import Button from "./components/Button/Button";
import ServerInfo from "./components/ServerInfo/ServerInfo";

function App() {
  return (
    <div className="bg-kaguya bg-cover bg-center h-screen text-white overflow-hidden select-none">
      <div className="border h-[calc(100vh-2.50rem)] border-cyan-500 m-5 ">
        <div className="w-full bg-cyan-700/75 pl-1 text-xs h-fits leading-tight text-cyan-400">
          DISPLAY
        </div>
        <div>
          <ServerInfo />
          <div className="ml-4 mt-20">
            <Button sideColor="bg-fuchsia-300" isBig={true} text="Test" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
