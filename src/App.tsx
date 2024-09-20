import Button from "./components/Button/Button";
import Login from "./components/Login/Login";
import ServerInfo from "./components/ServerInfo/ServerInfo";

function App() {
  return (
    <div className="bg-kaguya bg-cover bg-center h-screen text-white overflow-hidden select-none">
      <div className="border h-[calc(100vh-2.50rem)] border-cyan-500 m-5 flex flex-col">
        <div className="w-full bg-cyan-700/75 pl-1 text-xs h-fits leading-tight text-cyan-400">
          DISPLAY
        </div>
        <div className="grow flex flex-col">
          <ServerInfo />
          <div className="ml-6 mt-20 grow flex flex-col justify-between">
            <Login />
            <div className="mb-2">
              <Button
                sideColor="bg-[#6c1a49]"
                isBig={false}
                text="Disconnect"
                onClick={() => {
                  history.back();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
// <Button sideColor="bg-fuchsia-300" isBig={true} text="Test" />
