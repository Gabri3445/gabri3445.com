import { create } from "zustand/react";

export interface TerminalStore {
  terminalHistory: string;
  hidePrompt: boolean;
  setTerminalHistory: (history: string) => void;
  appendToTerminalHistory: (text: string) => void;
}

export const useTerminalStore = create<TerminalStore>((set, get) => ({
  terminalHistory:
    "> connect 93.43.233.0\nConnection Established ::\nConnected to gabri3445 Server@93.43.233.0",
  hidePrompt: false,
  setTerminalHistory: (history: string) => set({ terminalHistory: history }),
  appendToTerminalHistory: (text: string) =>
    set({ terminalHistory: get().terminalHistory + "\n" + text }),
}));
