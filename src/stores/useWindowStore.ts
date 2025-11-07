import { create } from "zustand";
import { WindowState } from "../App.models";

interface WindowStore {
  windowState: WindowState;
  setWindowState: (state: WindowState) => void;
}

export const useWindowStore = create<WindowStore>((set) => ({
  windowState: WindowState.MAIN,
  setWindowState: (state) => set({ windowState: state }),
}));
