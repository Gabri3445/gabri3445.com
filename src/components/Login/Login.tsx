import { FocusEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { useCallbackRef } from "use-callback-ref";

enum LoginState {
  USERNAME,
  PASSWORD,
  CHECK,
  SUCCESS,
  FAIL,
}

export interface LoginProps {
  bodyOnMouseDown: FocusEvent;
}

function Login() {
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
    //document.removeEventListener("click", handleFocus);
    //document.addEventListener("click", handleFocus);
    //document.onclick = handleFocus;
    //currentlySelected?.current?.focus();
    //console.log(state);
  }, [currentlySelected.current]);
  useEffect(() => {
    //document.addEventListener("click", handleFocus);
    document.onclick = handleFocus;
    return () => {
      document.onclick = null;
      //document.removeEventListener("click", handleFocus);
    };
  }, []);
  useEffect(() => {
    state.current = LoginState.USERNAME;
    currentlySelected.current = usernameInput.current;
    usernameInput.current?.focus();
  }, []);
  const onBlur = () => {
    currentlySelected.current = null;
  };
  return (
    <div onKeyDown={handleKeyDown}>
      <div className="w-full bg-black h-52 relative flex flex-col justify-between">
        <div className="text-2xl pt-7 pl-4">
          Login {state.current === LoginState.SUCCESS ? "Successful" : "Failed"}
        </div>
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
        {/*complete button goes here*/}
      </div>
      {/*buttons go here*/}
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
