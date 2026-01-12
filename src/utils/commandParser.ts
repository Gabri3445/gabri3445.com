import { NavigateFunction } from "react-router";
import { TerminalStore } from "../stores/useTerminalStore";

export default class CommandParser {
  private navigate: NavigateFunction;
  private terminalStore: TerminalStore;
  constructor(navigate: NavigateFunction, terminalStore: TerminalStore) {
    this.navigate = navigate;
    this.terminalStore = terminalStore;
  }

  public parseCommand(command: string, hideCommandEcho: boolean = false): void {
    switch (command.trim().toLowerCase()) {
      case "help":
        this.terminalStore.appendToTerminalHistory(
          "Available commands:\nhelp - Show this help message\nclear - Clear the terminal\nlogin - Requests a username an password to log in to the connected system",
        );
        break;
      case "clear":
      case "cls":
        hideCommandEcho = true;
        this.terminalStore.setTerminalHistory("");
        break;
      case "login":
        this.navigate("/login");
        break;
      default:
        this.terminalStore.appendToTerminalHistory(
          `Unknown command: ${command}\nType 'help' for a list of available commands.`,
        );
        break;
    }
    if (!hideCommandEcho) {
      this.terminalStore.appendToTerminalHistory(`93.43.233.0@>${command}`);
    }
  }
}
