import FileTree from "./FileTree/FileTree";
import { fileSystemContent } from "./FileSystemContent";

export interface FileNode {
  name: string;
  type: "file" | "folder" | "link";
  children?: FileNode[]; // Only present if it's a folder
  url?: string; // Only present if it's a link
  markdownContents?: string; // Only present if it's a file
}
/*
// TODO: add text files
// read from markdown files?
*/

function FileSystem() {
  //TODO: should probably set up overflow sooner then later; next time
  return (
    <div className="w-full mt-4">
      {fileSystemContent.map((content) => (
        <div key={content.name} className="mb-2">
          <FileTree node={content} level={1} />
        </div>
      ))}
    </div>
  );
}

export default FileSystem;
