'use client';

import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CodeBlock = ({ children }: { children: React.ReactNode }) => (
  <div className="relative group">
    <pre className="bg-muted text-muted-foreground rounded-md p-4 text-sm overflow-x-auto">
      <code>{children}</code>
    </pre>
    <Button
      variant="ghost"
      size="icon"
      className="absolute top-2 right-2 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity"
      onClick={() => navigator.clipboard.writeText(children?.toString() || '')}
    >
      <Copy className="h-4 w-4" />
      <span className="sr-only">Copy to clipboard</span>
    </Button>
  </div>
);
