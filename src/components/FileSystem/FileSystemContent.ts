import { FileNode } from "./FileSystem";

export const fileSystemContent: FileNode[] = [
  {
    name: "/blog",
    type: "folder",
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
            name: "Germany.lnk",
            type: "link",
            url: "https://photos.gabri3445.com/share/fmqI_WFtPJHweGqHi_5nm4sOvFP8UTsUu-yx292a_Z8Ln4iz7KxkExWySTiXksd8oWA",
          },
        ],
      },
    ],
  },
];
