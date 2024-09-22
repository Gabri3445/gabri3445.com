import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { useCallbackRef } from "use-callback-ref";
import Button from "../Button/Button";
import { AdminState, WindowState } from "../../App.models";

enum LoginState {
  USERNAME,
  PASSWORD,
  CHECK,
  SUCCESS,
  FAIL,
}

export interface LoginProps {
  setAdminState: (state: AdminState) => void;
  setWindowState: (state: WindowState) => void;
}

function Login({ setAdminState, setWindowState }: LoginProps) {
  const usernameInput = useRef<HTMLInputElement>(null);
  const [username, setUsername] = useState("");
  const correctUsername = "admin";
  const [password, setPassword] = useState("");
  const correctPassword = ":3";
  const passwordInput = useRef<HTMLInputElement>(null);
  const [, forceUpdate] = useState(0);
  const currentlySelected = useCallbackRef<HTMLInputElement | null>(
    null,
    () => {
      if (currentlySelected.current) {
        currentlySelected.current?.focus();
        forceUpdate((x) => x + 1);
      }
    },
  );
  const state = useCallbackRef<LoginState>(LoginState.USERNAME, () =>
    forceUpdate((x) => x + 1),
  );
  const handleFocus = (event: MouseEvent) => {
    event.preventDefault();
    if (document.activeElement !== currentlySelected.current) {
      if (state.current === LoginState.USERNAME) {
        currentlySelected.current = usernameInput.current;
      } else if (state.current === LoginState.PASSWORD) {
        currentlySelected.current = passwordInput.current;
      }
    }
  };
  const handleKeyDown = (event: KeyboardEvent) => {
    event.stopPropagation();
    if (event.key === "Enter") {
      if (state.current === LoginState.PASSWORD) {
        state.current = LoginState.CHECK;
      }
      if (document.activeElement === usernameInput.current) {
        state.current = LoginState.PASSWORD;
        currentlySelected.current = passwordInput.current;
      }
      if (
        document.activeElement === passwordInput.current &&
        state.current === LoginState.CHECK
      ) {
        if (username === correctUsername && password === correctPassword) {
          state.current = LoginState.SUCCESS;
        } else {
          state.current = LoginState.FAIL;
        }
        if (usernameInput.current && passwordInput.current) {
          usernameInput.current.disabled = true;
          passwordInput.current.disabled = true;
        }
      }
    }
  };
  useEffect(() => {
    /*
    If I don't remove and add the event listeners the variables that use useState don't update
    It just stays on whatever the value was when the event listener was added
    I fucking hate react
    */
  }, [currentlySelected.current]);
  useEffect(() => {
    state.current = LoginState.USERNAME;
    currentlySelected.current = usernameInput.current;
    document.onclick = handleFocus;
    usernameInput.current?.focus();
    return () => {
      document.onclick = null;
    };
  }, []);
  const onBlur = () => {
    currentlySelected.current = null;
  };
  const renderStatus = () => {
    switch (state.current) {
      case LoginState.SUCCESS:
        return <span className="text-[#04a37b]">Successful</span>;
      case LoginState.FAIL:
        return <span className="text-[#bf0541]">Failed</span>;
      default:
        return <></>;
    }
  };
  const onLoginButtonClick = () => {
    state.current = LoginState.SUCCESS;
    if (usernameInput.current && passwordInput.current) {
      usernameInput.current.disabled = true;
      passwordInput.current.disabled = true;
    }
    setUsername(correctUsername);
    setPassword(correctPassword);
  };
  const onRetryButtonClick = () => {
    state.current = LoginState.USERNAME;
    if (usernameInput.current && passwordInput.current) {
      usernameInput.current.disabled = false;
      passwordInput.current.disabled = false;
      usernameInput.current.value = "";
      passwordInput.current.value = "";
    }
    currentlySelected.current = usernameInput.current;
    usernameInput.current?.focus();
    setUsername("");
    setPassword("");
  };
  return (
    <div onKeyDown={handleKeyDown}>
      <div
        className={`w-full h-52 relative flex flex-col justify-between ${state.current === LoginState.FAIL ? "bg-[#691144]/90" : "bg-[#0f0f0f]"}`}
      >
        <div className="text-2xl pt-7 pl-4">Login {renderStatus()}</div>
        <div className="top-1/2 -translate-y-1/2 transform absolute w-full">
          <div
            className={
              "mb-1 w-full pl-4 " +
              (currentlySelected.current === usernameInput.current
                ? "bg-gray-300/75"
                : "")
            }
          >
            username : {username}
          </div>
          <div
            className={
              "mb-1 w-full pl-4 " +
              (currentlySelected.current === passwordInput.current &&
              currentlySelected.current !== null
                ? "bg-gray-300/75"
                : "")
            }
          >
            password : {"*".repeat(password.length)}
          </div>
        </div>
        {state.current === LoginState.SUCCESS ? (
          <div className="ml-4 mb-10">
            <Button
              text="Complete"
              isBig={true}
              sideColor="bg-black"
              width="w-32"
              height="h-8"
              onClick={() => {
                setAdminState(AdminState.ADMIN);
                setWindowState(WindowState.MAIN);
              }}
            />
          </div>
        ) : null}
        {state.current === LoginState.FAIL ? (
          <div className="flex flex-row ml-4 mb-9 gap-1.5">
            <Button
              text="Back"
              isBig={true}
              sideColor="bg-black"
              width="w-44"
              height="h-[1.85rem]"
              onClick={() => {
                setWindowState(WindowState.MAIN);
              }}
            />
            <Button
              text="Retry"
              isBig={true}
              sideColor="bg-black"
              width="w-44"
              height="h-[1.85rem]"
              onClick={onRetryButtonClick}
            />
          </div>
        ) : null}
      </div>
      {/*TODO: make the buttons a separate component?*/}
      <div
        className={`flex flex-row mt-4 ml-6 gap-7 ${state.current === LoginState.SUCCESS || state.current === LoginState.FAIL ? "hidden" : ""}`}
      >
        <Button
          text={`Login - User: ${correctUsername} Pass: ${correctPassword}`}
          isBig={true}
          width="w-80"
          sideColor="bg-black"
          onClick={onLoginButtonClick}
        />
        <Button
          text={`Cancel`}
          isBig={true}
          width="w-28"
          sideColor="bg-[#6c1a49]"
          onClick={() => {
            setWindowState(WindowState.MAIN);
          }}
        />
      </div>
      <input
        ref={usernameInput}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        onFocus={() => (currentlySelected.current = usernameInput.current)}
        onBlur={onBlur}
        type="text"
        className="absolute -left-[9999px] user"
      ></input>
      <input
        ref={passwordInput}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        onFocus={() => (currentlySelected.current = passwordInput.current)}
        onBlur={onBlur}
        type="text"
        className="absolute -left-[9999px] pass"
      ></input>
    </div>
  );
}

export default Login;
