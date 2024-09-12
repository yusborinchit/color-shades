"use client";

import { toast } from "sonner";

interface Props {
  hexCode: string;
  className: string;
}

export default function ColorPreview({ hexCode, className }: Readonly<Props>) {
  function handleCopy() {
    navigator.clipboard.writeText(hexCode);
    toast("Successfully copied to clipboard! 🎉", {
      unstyled: true,
      classNames: {
        toast:
          "rounded bg-white p-4 border border-neutral-200 w-full flex items-center gap-4",
        title: "text-lg",
      },
    });
  }

  return (
    <button
      onClick={handleCopy}
      className={`aspect-square relative rounded ${className}`}
    >
      <span className="absolute bottom-2 right-2 rounded bg-primary-50 px-1 py-0.5 font-mono text-xs">
        {hexCode}
      </span>
    </button>
  );
}
