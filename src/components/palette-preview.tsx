"use client";

import { Copy, SquareArrowOutUpRight } from "lucide-react";
import { useState } from "react";
import ColorPreview from "./color-preview";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface Props {
  title: string;
  varName: string;
  palette: string[];
}

export default function PalettePreview({
  title,
  varName,
  palette,
}: Readonly<Props>) {
  const [isOpen, setIsOpen] = useState(false);

  const tailwindColors = JSON.stringify(
    {
      [varName]: {
        50: palette[0],
        100: palette[1],
        200: palette[2],
        300: palette[3],
        400: palette[4],
        500: palette[5],
        600: palette[6],
        700: palette[7],
        800: palette[8],
        900: palette[9],
      },
    },
    null,
    2
  );

  function copyToClipboard() {
    navigator.clipboard.writeText(tailwindColors);
  }

  return (
    <article>
      <header className="flex items-center justify-between">
        <h3 className="text-3xl font-bold tracking-tighter">{title}</h3>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <button className="rounded bg-white p-2 transition-all hover:bg-neutral-200 active:scale-90">
              <SquareArrowOutUpRight className="size-7" />
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold">
                Export Colors
              </DialogTitle>
              <DialogDescription>
                Export your colors directly to your Tailwind CSS config file.
              </DialogDescription>
            </DialogHeader>
            <pre className="relative rounded bg-neutral-200 p-4 text-neutral-500">
              {tailwindColors}
              <button
                aria-label="Copy to Clipboard"
                onClick={copyToClipboard}
                className="absolute right-4 top-4 transition-colors hover:text-neutral-950"
              >
                <Copy className="size-6" />
              </button>
            </pre>
            <DialogFooter>
              <DialogClose asChild>
                <button className="w-full rounded bg-neutral-950 px-4 py-2.5 font-semibold tracking-tight text-white">
                  Cerrar
                </button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </header>
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-5">
        {palette.length > 0
          ? palette.map((hexCode) => (
              <ColorPreview key={hexCode} hexCode={hexCode} />
            ))
          : Array.from({ length: 10 }).map(() => (
              <div
                key={crypto.randomUUID()}
                className="aspect-square animate-pulse rounded bg-gradient-to-t from-neutral-400 to-neutral-300"
              />
            ))}
      </div>
    </article>
  );
}
