import FileTree from "./FileTree/FileTree";

export interface FileNode {
  name: string;
  type: "file" | "folder";
  children?: FileNode[]; // Only present if it's a folder
  url?: string; // Only present if it's a file
}
/*
// TODO: add text files
// read from markdown files?
*/

function FileSystem() {
  const fileSystems: FileNode[] = [
    {
      name: "/photos",
      type: "folder",
      children: [
        {
          name: "/2025",
          type: "folder",
          children: [
            {
              name: "/05",
              type: "folder",
              children: [
                {
                  name: "05-levante.lnk",
                  type: "file",
                  url: "https://photos.gabri3445.com/share/BaY2zPAfl2OFZQ76tUsRz99oJG2GTeIAolFA4pp4P1VSWbt9HbxM8R3auhvwwx70490",
                },
              ],
            },
            {
              name: "/03",
              type: "folder",
              children: [
                {
                  name: "30-levante.lnk",
                  type: "file",
                  url: "https://photos.gabri3445.com/share/g_YZ9b-5GOHT_2x1jZM8ln2RBRBkqpP3Pe8gfgEQe3dSbclVKXq6CLTJgaKYwrk2Tao",
                },
              ],
            },
          ],
        },
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

  //TODO: should probably set up overflow sooner then later; next time
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
