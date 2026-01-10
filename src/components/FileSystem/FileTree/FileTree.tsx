import { useState } from "react";
import Button from "../../Button/Button";
import { FileNode } from "../FileSystemContent";
import { useFileStore } from "../../../stores/useFileStore";
import { useNavigate } from "react-router";

function FileTree({ node, level }: { node: FileNode; level: number }) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const { setFileNode } = useFileStore();

  if (node.type === "link") {
    return (
      <div className={`mx-6`}>
        <Button
          text={node.name}
          isBig={false}
          width="w-full"
          centered={false}
          sideColor="bg-[#837e84]"
          onClick={() => window.open(node.url, "_blank")}
          addBorderLast={true}
        />
      </div>
    );
  }

  if (node.type === "file") {
    //TODO open the corresponding markdown file on onclick; refer to app.tsx
    return (
      <div className={`mx-6`}>
        <Button
          text={node.name}
          isBig={false}
          width="w-full"
          centered={false}
          sideColor="bg-[#837e84]"
          onClick={() => {
            //setWindowState(WindowState.FILE_VIEW); TODO
            setFileNode(node);
          }} //switch to markown renderer
          addBorderLast={true}
        />
      </div>
    );
  }

  return (
    <div className={`mx-6`}>
      <Button
        text={node.name}
        isBig={false}
        width="w-full"
        centered={false}
        sideColor="bg-[#837e84]"
        onClick={() => setExpanded(!expanded)}
        addBorderLast={true}
      />
      {expanded &&
        node.children?.map((child) => (
          <FileTree key={child.name} node={child} level={level + 1} />
        ))}
    </div>
  );
}

export default FileTree;
