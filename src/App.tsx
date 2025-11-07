import AdminStrip from "./components/AdminStrip/AdminStrip";
import Button from "./components/Button/Button";
import Login from "./components/Login/Login";
import ServerInfo from "./components/ServerInfo/ServerInfo";
import ButtonList from "./components/ButtonList/ButtonList";
import { AdminState, WindowState } from "./App.models";
import FileSystem from "./components/FileSystem/FileSystem";
import { useAdminStore } from "./stores/useAdminStore";
import { useWindowStore } from "./stores/useWindowStore";

function App() {
  //const [adminState, setAdminState] = useState<AdminState>(AdminState.ADMIN);
  //const [windowState, setWindowState] = useState<WindowState>(
  //  WindowState.FILE_VIEW,
  //);
  const { adminState } = useAdminStore();
  const { windowState, setWindowState } = useWindowStore();
  return (
    <div className="bg-kaguya bg-cover bg-center h-screen text-white overflow-hidden select-none ">
      <div className="border h-[calc(100vh-2.50rem)] border-[#26b1e1] m-5 flex flex-col">
        <div className="w-full bg-cyan-500/75 pl-1 text-xs h-fits leading-tight text-[#7febf7]">
          DISPLAY
        </div>
        {(windowState === WindowState.LOGIN ||
          windowState === WindowState.MAIN) && (
          <div className="grow flex flex-col">
            <ServerInfo />
            {adminState === AdminState.ERR ||
            adminState === AdminState.ADMIN ? (
              <div className="mt-4 mb-8">
                <AdminStrip error={adminState === AdminState.ERR} />
              </div>
            ) : null}
            <div className=" mt-8 grow flex flex-col justify-between">
              {windowState === WindowState.LOGIN && <Login />}
              {windowState === WindowState.MAIN && (
                <div className="ml-6 mt-8">
                  <ButtonList />
                </div>
              )}
              <div className="mb-2 ml-6">
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
        )}
        {windowState === WindowState.FILE_SYSTEM && (
          <div className="grow flex flex-col">
            <div className="w-full flex flex-row justify-between">
              <div className="text-3xl mt-2 ml-1">gabri3445 PC File System</div>
              <div className="mt-2 mr-2">
                <Button
                  text="&lt;-" //TODO: center the dash char
                  isBig={false}
                  height="h-6"
                  width="w-6"
                  onClick={() => setWindowState(WindowState.MAIN)}
                  centered={true}
                ></Button>
              </div>
            </div>
            {/*TODO: switch to markdown renderer when a file is selected; zustand?*/}
            <FileSystem />
          </div>
        )}
        {windowState === WindowState.FILE_VIEW && (
          <div className="grow flex flex-col">
            <div className="w-full flex flex-row justify-between">
              <div className="text-3xl mt-2 ml-1">File name goes here</div>
              <div className="mt-2 mr-2">
                <Button
                  text="&lt;-" //TODO: center the dash char
                  isBig={false}
                  height="h-6"
                  width="w-6"
                  onClick={() => setWindowState(WindowState.MAIN)}
                  centered={true}
                ></Button>
              </div>
            </div>
            {/*TODO: switch to markdown renderer when a file is selected; zustand?*/}
            <div className="mt-2 ml-1">Test</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
// <Button sideColor="bg-fuchsia-300" isBig={true} text="Test" />
