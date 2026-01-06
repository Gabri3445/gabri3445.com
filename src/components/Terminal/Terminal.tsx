import { useRef, useState } from "react";

function Terminal() {
  //replace with text in reference image and
  const [terminalHistory, setTerminalHistory] = useState(
    "Terminal\nHistory\nGoes Here",
  );
  const [inputValue, setInputValue] = useState("");
  const input = useRef<HTMLInputElement>(null);
  return (
    <>
      <div className="flex-1 flex flex-col justify-end overflow-y-auto mb-2">
        <div className="whitespace-pre-line">{terminalHistory}</div>
      </div>
      <div className="flex flex-row hover:">
        93.43.233.0@&gt;{" "}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            //strip user \n
            //replace with proper parser
            setTerminalHistory(terminalHistory + "\n" + inputValue);
            input.current!.value = "";
          }}
          className="ml-2"
        >
          <input
            ref={input}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full focus:outline-none"
          ></input>
        </form>
      </div>
    </>
  );
}

export default Terminal;
