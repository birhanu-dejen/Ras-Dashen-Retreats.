"use client";
import { useState } from "react";

function TextExpander({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getText = (node: any): string => {
    if (typeof node === "string") return node.trim();
    if (typeof node === "number") return String(node);
    if (Array.isArray(node)) return node.map(getText).join(" ").trim();
    return node?.props?.children ? getText(node.props.children) : "";
  };

  const text = getText(children);
  const displayText = isExpanded
    ? text
    : text.split(" ").slice(0, 40).join(" ") + "...";

  return (
    <span>
      {displayText}{" "}
      <button
        className="text-primary-700 border-b border-primary-700 leading-3 pb-1"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </span>
  );
}

export default TextExpander;
