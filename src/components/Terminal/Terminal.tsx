import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import CommandParser from "../../utils/commandParser";
import { useTerminalStore } from "../../stores/useTerminalStore";

function Terminal() {
  const navigate = useNavigate();
  const terminalStore = useTerminalStore();
  const commandParser = new CommandParser(navigate, terminalStore);
  //replace with text in reference image and
  const [inputValue, setInputValue] = useState("");
  const input = useRef<HTMLInputElement>(null);
  return (
    <>
      <div className="flex-1 flex flex-col justify-end overflow-y-auto mb-2 ml-0.5">
        <div className="whitespace-pre-line">
          {terminalStore.terminalHistory}
        </div>
      </div>
      <div className="flex flex-row hover: ml-0.5">
        {terminalStore.hidePrompt ? null : (
          <span className="ml-2">93.43.233.0@&gt; </span>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            //strip user \n
            //replace with proper parser
            commandParser.parseCommand(inputValue);
            input.current!.value = "";
          }}
          className="ml-2"
        >
          <input
            ref={input}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full focus:outline-none"
          />
        </form>
      </div>
    </>
  );
}

export default Terminal;
