import { create } from "zustand";
import { FileNode } from "../components/FileSystem/FileSystemContent";

interface FileStore {
  fileNode: FileNode | null;
  setFileNode: (state: FileNode | null) => void;
}

export const useFileStore = create<FileStore>((set) => ({
  fileNode: null,
  setFileNode: (state) => set({ fileNode: state }),
}));
