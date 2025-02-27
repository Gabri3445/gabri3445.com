import FileTree from "./FileTree/FileTree";

export interface FileNode {
  name: string;
  type: "file" | "folder";
  children?: FileNode[]; // Only present if it's a folder
  url?: string; // Only present if it's a file
}
/*
// add text files
// read from markdown files?
*/

function FileSystem() {
  const fileSystems: FileNode[] = [
    {
      name: "/photos",
      type: "folder",
      children: [
        {
          name: "/2024",
          type: "folder",
          children: [
            {
              name: "Germany.lnk",
              type: "file",
              url: "https://photos.gabri3445.com/share/fmqI_WFtPJHweGqHi_5nm4sOvFP8UTsUu-yx292a_Z8Ln4iz7KxkExWySTiXksd8oWA",
            },
          ],
        },
      ],
    },
  ];

  //TODO: should probably set up overflow sooner then later
  return (
    <div className="w-full mt-4">
      {fileSystems.map((fileSystem) => (
        <div key={fileSystem.name} className="mb-2">
          <FileTree node={fileSystem} level={1} />
        </div>
      ))}
    </div>
  );
}

export default FileSystem;
