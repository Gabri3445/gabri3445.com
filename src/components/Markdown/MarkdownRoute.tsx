import { useNavigate, useParams } from "react-router";
import Button from "../Button/Button";
import MarkdownRenderer from "./MarkdownRenderer";
import { FileNode, fileSystemContent } from "../FileSystem/FileSystemContent";

function MarkdownRoute() {
  const navigate = useNavigate();
  const params = useParams();
  const findFile = (nodes: FileNode[]): string => {
    for (const node of nodes) {
      if (node.type === "file" && node.name === params.fileName) {
        console.log(node.markdownContents);
        return node.markdownContents!;
      } else if (node.type === "folder" && node.children) {
        const foundContent = findFile(node.children);
        if (foundContent) {
          return foundContent;
        }
      }
    }
    return "# Error";
  };
  const fileContents = findFile(fileSystemContent);
  const fileExists = !(fileContents == "# Error");
  return (
    <div className="h-full flex flex-col overflow-hidden">
      <div className="w-full flex flex-row justify-between">
        <div className="text-3xl mt-2 ml-1">
          {fileExists ? params.fileName : "File Not Found"}
        </div>
        <div className="mt-2 mr-2">
          <Button
            text="&lt;-" //TODO: center the dash char
            isBig={false}
            height="h-6"
            width="w-6"
            onClick={() => {
              navigate("/file-system");
            }}
            centered={true}
          ></Button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto pb-4">
        <MarkdownRenderer content={fileContents} />
      </div>
    </div>
  );
}

export default MarkdownRoute;
