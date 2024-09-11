"use client";

import { Copy, X } from "lucide-react";
import { toast } from "sonner";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  hexCodes: string[];
}

export default function ColorModal({
  isOpen,
  closeModal,
  hexCodes,
}: Readonly<Props>) {
  const tailwindExport = JSON.stringify(
    {
      colors: {
        primary: {
          900: hexCodes[10],
          800: hexCodes[9],
          700: hexCodes[8],
          600: hexCodes[7],
          500: hexCodes[6],
          400: hexCodes[5],
          300: hexCodes[4],
          200: hexCodes[3],
          100: hexCodes[2],
          50: hexCodes[1],
        },
      },
    },
    null,
    2
  );

  function handleCopy(text: string) {
    navigator.clipboard.writeText(text);
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
    isOpen && (
      <div
        onClick={closeModal}
        className="fixed inset-0 z-10 grid h-screen w-screen place-items-center bg-neutral-600/60 backdrop-blur-sm"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-[400px] rounded bg-white p-4"
        >
          <header className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Tailwind Config:</h3>
            <button
              aria-label="Close"
              onClick={closeModal}
              className="rounded p-2 transition-colors hover:bg-primary-100"
            >
              <X className="size-5" />
            </button>
          </header>
          <pre className="relative mt-4 rounded bg-neutral-200 p-4 font-mono text-neutral-500">
            <button
              aria-label="Copy to clipboard"
              onClick={() => handleCopy(tailwindExport)}
              className="absolute right-2 top-2 p-1 transition-colors hover:text-neutral-950"
            >
              <Copy className="size-5" />
            </button>
            {tailwindExport}
          </pre>
        </div>
      </div>
    )
  );
}
