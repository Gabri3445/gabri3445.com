import { NavigateFunction } from "react-router";
import { TerminalStore } from "../stores/useTerminalStore";

export default class CommandParser {
  private navigate: NavigateFunction;
  private terminalStore: TerminalStore;
  constructor(navigate: NavigateFunction, terminalStore: TerminalStore) {
    this.navigate = navigate;
    this.terminalStore = terminalStore;
  }

  public parseCommand(command: string): void {
    let multiStepCommand = false;
    switch (command.trim().toLowerCase()) {
      case "help":
        this.terminalStore.appendToTerminalHistory(
          "Available commands:\nhelp - Show this help message\nclear - Clear the terminal\nlogin",
        );
        break;
      case "clear":
      case "cls":
        this.terminalStore.setTerminalHistory("");
        break;
      case "login":
        multiStepCommand = true;
        this.navigate("/login");
        break;
      default:
        this.terminalStore.appendToTerminalHistory(
          `Unknown command: ${command}\nType 'help' for a list of available commands.`,
        );
        break;
    }
    if (!multiStepCommand) {
      this.terminalStore.appendToTerminalHistory(`93.43.233.0@> ${command}`);
    }
  }

  private handleLoginCommand(): void {}
}
