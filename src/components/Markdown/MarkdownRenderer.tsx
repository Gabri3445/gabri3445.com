import Markdown from "markdown-to-jsx/react";

function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className="mt-2 mx-3.5 prose prose-invert font-sans max-w-none!">
      <Markdown>{content}</Markdown>
    </div>
  );
}

export default MarkdownRenderer;
