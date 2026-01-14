import { Outlet } from "react-router";
import { AdminState } from "../../App.models";
import { useAdminStore } from "../../stores/useAdminStore";
import AdminStrip from "../AdminStrip/AdminStrip";
import Button from "../Button/Button";
import ServerInfo from "../ServerInfo/ServerInfo";

function HomeLayout() {
  const { adminState } = useAdminStore();
  return (
    <div className="grow flex flex-col">
      <ServerInfo />
      {adminState === AdminState.ERR || adminState === AdminState.ADMIN ? (
        <div className="mt-4 mb-8">
          <AdminStrip error={adminState === AdminState.ERR} />
        </div>
      ) : null}
      <div className=" mt-8 grow flex flex-col justify-between">
        <Outlet />
        <div className="md:ml-6 ml-2 mr-6 md:mr-0 mb-2">
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
  );
}

export default HomeLayout;
