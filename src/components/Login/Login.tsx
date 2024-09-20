import { RefObject, useEffect, useRef, useState } from "react";

function Login() {
  const usernameInput = useRef<HTMLInputElement>(null);
  const [username, setUsername] = useState("");
  const correctUsername = "admin";
  const [password, setPassword] = useState("");
  const correctPassword = ":3";
  const passwordInput = useRef<HTMLInputElement>(null);
  const [currentlySelected, setCurrentlySelected] =
    useState<HTMLInputElement | null>(null);
  const [state, setState] = useState("username");
  const handleFocus = (event: FocusEvent) => {
    event.preventDefault();
    if (document.activeElement !== currentlySelected) {
      if (state === "username") {
        setCurrentlySelected(usernameInput.current);
      } else if (state === "password") {
        setCurrentlySelected(passwordInput.current);
      }
    }
  };
  useEffect(() => {
    /*
    If I don't remove and add the event listeners the variables that use useState don't update
    It just statys on whatever the value was when the event listener was added
    I fucking hate react
    */
    document.removeEventListener("click", handleFocus);
    document.addEventListener("click", handleFocus);
    currentlySelected?.focus();
  }, [currentlySelected]);
  useEffect(() => {
    document.addEventListener("click", handleFocus);
    return () => {
      document.removeEventListener("click", handleFocus);
    };
  }, []);
  useEffect(() => {
    setState("username");
    setCurrentlySelected(usernameInput.current);
  }, []);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      event.stopPropagation();
      if (event.key === "Enter") {
        if (document.activeElement === usernameInput.current) {
          setState("password");
          setCurrentlySelected(passwordInput.current);
        }
        if (document.activeElement === passwordInput.current) {
          if (username === correctUsername && password === correctPassword) {
            setState("success");
          } else {
            setState("fail");
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const onBlur = () => {
    setCurrentlySelected(null);
  };
  return (
    <div>
      <div className="w-full bg-black h-52 relative flex flex-col justify-between">
        <div className="text-2xl pt-7 pl-4">Login</div>
        <div className="top-1/2 -translate-y-1/2 transform absolute w-full">
          <div
            className={
              "mb-1 w-full pl-4 " +
              (currentlySelected === usernameInput.current
                ? "bg-gray-300/75"
                : "")
            }
          >
            username : {username}
          </div>
          <div
            className={
              "mb-1 w-full pl-4 " +
              (currentlySelected === passwordInput.current &&
              currentlySelected !== null
                ? "bg-gray-300/75"
                : "")
            }
          >
            password : {password}
          </div>
        </div>
        {/*complete button goes here*/}
      </div>
      {/*buttons go here*/}
      <input
        ref={usernameInput}
        onChange={(e) => setUsername(e.target.value)}
        onFocus={() => setCurrentlySelected(usernameInput.current)}
        onBlur={onBlur}
        type="text"
        className="absolute -left-[9999px] user"
      ></input>
      <input
        ref={passwordInput}
        onChange={(e) => setPassword(e.target.value)}
        onFocus={() => setCurrentlySelected(passwordInput.current)}
        onBlur={onBlur}
        type="text"
        className="absolute -left-[9999px] pass"
      ></input>
    </div>
  );
}

export default Login;
