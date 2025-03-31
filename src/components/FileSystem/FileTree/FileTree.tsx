import { useState } from "react";
import Button from "../../Button/Button";
import { FileNode } from "../FileSystem";

function FileTree({ node, level }: { node: FileNode; level: number }) {
  const [expanded, setExpanded] = useState(false);

  if (node.type === "file") {
    return (
      <div className={`ml-6`}>
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

  return (
    <div className={`ml-6`}>
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
