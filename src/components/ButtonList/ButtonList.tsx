import { AdminState } from "../../App.models";
import Button from "../Button/Button";

export interface ButtonListProps {
  adminState: AdminState;
  setAdminState: (state: AdminState) => void;
}

function ButtonList({ adminState, setAdminState }: ButtonListProps) {
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
  return (
    <div>
      <Button
        text="Login"
        isBig={true}
        sideColor={color(true)}
        height="h-12"
        onClick={() => setAdminState(AdminState.LOGIN)}
      />
      <Button
        text="Github"
        isBig={true}
        sideColor={color(false)}
        height="h-12"
      />
      <Button
        text="LinkedIn"
        isBig={true}
        sideColor={color(false)}
        height="h-12"
      />
      <Button
        text="Copy Discord Username"
        isBig={true}
        sideColor={color(false)}
        height="h-12"
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
