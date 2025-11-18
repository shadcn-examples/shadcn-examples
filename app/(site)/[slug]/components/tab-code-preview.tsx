"use client";

import React from "react";
import { useCodeCopyStore } from "@/store/use-copy-code";
import CodeBlock from "@/components/code-renderer";
import CopyToClipboard from "@/components/copy-to-clipboard";

export default function TabCodePreview() {
  const { code } = useCodeCopyStore();

  return (
    <div className="relative w-full overflow-auto">
      <CodeBlock code={code} lang="tsx" />
      <div className="absolute end-2 top-2">
        <CopyToClipboard text={code || ""} />
      </div>
    </div>
  );
}
