import FileTree from "./FileTree/FileTree";
import { fileSystemContent } from "./FileSystemContent";
/*
// TODO: add text files
// read from markdown files?
*/

function FileSystem() {
  return (
    <div className="w-full mt-4 overflow-y-scroll h-0 flex-1">
      {fileSystemContent.map((content) => (
        <div key={content.name} className="mb-2">
          <FileTree node={content} level={1} />
        </div>
      ))}
    </div>
  );
}

export default FileSystem;
