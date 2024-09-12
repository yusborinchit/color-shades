"use client";

import { FileJson } from "lucide-react";
import { useState } from "react";
import ColorModal from "./color-modal";
import ColorPreview from "./color-preview";

interface Props {
  hexCodes: string[];
}

export default function ColorShadesPreview({ hexCodes }: Readonly<Props>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative mx-auto mt-8 max-w-screen-md px-8">
      <header className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tighter">
          Color Palette<span className="text-primary-500">:</span>
        </h2>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center rounded bg-primary-100 px-4 py-2.5 font-semibold transition-transform hover:brightness-90"
        >
          <FileJson className="mr-1 size-5" />
          Export
        </button>
        <ColorModal
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          hexCodes={hexCodes}
        />
      </header>
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-5">
        <ColorPreview hexCode={hexCodes[10]} className="bg-primary-900" />
        <ColorPreview hexCode={hexCodes[9]} className="bg-primary-800" />
        <ColorPreview hexCode={hexCodes[8]} className="bg-primary-700" />
        <ColorPreview hexCode={hexCodes[7]} className="bg-primary-600" />
        <ColorPreview hexCode={hexCodes[6]} className="bg-primary-500" />
        <ColorPreview hexCode={hexCodes[5]} className="bg-primary-400" />
        <ColorPreview hexCode={hexCodes[4]} className="bg-primary-300" />
        <ColorPreview hexCode={hexCodes[3]} className="bg-primary-200" />
        <ColorPreview hexCode={hexCodes[2]} className="bg-primary-100" />
        <ColorPreview hexCode={hexCodes[1]} className="bg-primary-50" />
      </div>
    </section>
  );
}
