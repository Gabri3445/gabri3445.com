import { AdminState, WindowState } from "../../App.models";
import Button from "../Button/Button";

export interface ButtonListProps {
  adminState: AdminState;
  setAdminState: (state: AdminState) => void;
  setWindowState: (state: WindowState) => void;
}

function ButtonList({
  adminState,
  setAdminState,
  setWindowState,
}: ButtonListProps) {
  const checkForAdmin = () => {
    if (adminState === AdminState.ADMIN) {
      return true;
    } else {
      return false;
    }
  };
  const color = (invert: boolean) => {
    if (adminState === AdminState.ADMIN) {
      if (invert) {
        return "bg-[#6e6e6e]";
      } else {
        return "bg-[#fecafe]";
      }
    } else {
      if (invert) {
        return "bg-[#fecafe]";
      } else {
        return "bg-[#6e6e6e]";
      }
    }
  };
  const goToLink = (link: string) => {
    if (checkForAdmin()) {
      window.open(link, "_blank");
      return;
    }
    setAdminState(AdminState.ERR);
  };
  const copy = (string: string) => {
    if (checkForAdmin()) {
      navigator.clipboard.writeText(string);
      return;
    }
    setAdminState(AdminState.ERR);
  };
  const openFileView = () => {
    if (checkForAdmin()) {
      setWindowState(WindowState.FILE_SYSTEM);
      return;
    }
    setAdminState(AdminState.ERR);
  };
  return (
    <div>
      <Button
        text="Login"
        isBig={true}
        sideColor={color(true)}
        height="h-12"
        onClick={() => setWindowState(WindowState.LOGIN)}
      />
      <Button
        text="Open Github"
        isBig={true}
        sideColor={color(false)}
        height="h-12"
        onClick={() => goToLink("https://github.com/Gabri3445")}
      />
      <Button
        text="View Source"
        isBig={true}
        sideColor={color(false)}
        height="h-12"
        onClick={() => goToLink("https://github.com/Gabri3445/gabri3445.com")}
      />
      <Button
        text="Open LinkedIn"
        isBig={true}
        sideColor={color(false)}
        height="h-12"
        onClick={() =>
          goToLink("https://www.linkedin.com/in/gabriele-lopez-8514bb215/")
        }
      />
      <Button
        text="Copy Discord Username"
        isBig={true}
        sideColor={color(false)}
        height="h-12"
        onClick={() => copy("gabri3445")}
      />
      <Button
        text="View Filesystem"
        isBig={true}
        sideColor={color(false)}
        height="h-12"
        onClick={() => openFileView()}
      />
      {/* TODO after the site is finished
      <Button
        text="Credits"
        isBig={true}
        sideColor="bg-[#6e6e6e]"
        height="h-12"
      />
      */}
    </div>
  );
}

export default ButtonList;
