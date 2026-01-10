import helloWorldPost from "../../markdown/HelloWorld.md?raw";

export interface FileNode {
  name: string;
  type: "file" | "folder" | "link";
  children?: FileNode[]; // Only present if it's a folder
  url?: string; // Only present if it's a link
  markdownContents?: string; // Only present if it's a file
}

export const fileSystemContent: FileNode[] = [
  {
    name: "/blog",
    type: "folder",
    children: [
      { name: "HelloWorld.md", type: "file", markdownContents: helloWorldPost },
    ],
  },
  {
    name: "/photos",
    type: "folder",
    children: [
      {
        name: "/2025",
        type: "folder",
        children: [
          {
            name: "/08",
            type: "folder",
            children: [
              {
                name: "MotoGP.lnk",
                type: "link",
                url: "https://photos.gabri3445.com/share/clNCSOTyLH0nGqVqaSNQcGs1OCEoAKyxYT52YwotLvu-PlxK_qgs57fiwDhBqmxs57U",
              },
              {
                name: "Vienna.lnk",
                type: "link",
                url: "https://photos.gabri3445.com/share/1-DnK-hppbR03XT9ckrYeORiD18AUfbQhx1I29xeG9Fjc2LCIk7Ffulvps7z74ROopw",
              },
            ],
          },
          {
            name: "/06",
            type: "folder",
            children: [
              {
                name: "02-mercadante.lnk",
                type: "link",
                url: "https://photos.gabri3445.com/share/64_7V-w6TOw6KlAf8QCDNt3yZZyVZ8nwUN07fqbqoG38R_6eRoWnnLSrQ70RImDcMWE",
              },
            ],
          },
          {
            name: "/05",
            type: "folder",
            children: [
              {
                name: "10-levante.lnk",
                type: "link",
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
                type: "link",
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
            name: "/08",
            type: "folder",
            children: [
              {
                name: "Germany.lnk",
                type: "link",
                url: "https://photos.gabri3445.com/share/fmqI_WFtPJHweGqHi_5nm4sOvFP8UTsUu-yx292a_Z8Ln4iz7KxkExWySTiXksd8oWA",
              },
            ],
          },
        ],
      },
    ],
  },
];
