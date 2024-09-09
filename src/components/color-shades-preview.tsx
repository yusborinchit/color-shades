"use client";

import { FileJson } from "lucide-react";
import { useEffect, useState } from "react";
import ColorPreview from "./color-preview";

interface Props {
  color: string;
}

export default function ColorShadesPreview({ color }: Readonly<Props>) {
  const [css, setCss] = useState(getComputedStyle(document.body));

  useEffect(() => {
    setCss(getComputedStyle(document.body));
  }, [color]);

  return (
    <section className="mt-8">
      <header className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tighter">
          Color Palette<span className="text-primary-500">:</span>
        </h2>
        <button className="white flex items-center rounded bg-primary-100 px-4 py-2.5 font-semibold transition-transform hover:brightness-90">
          <FileJson className="mr-1 size-5" />
          Export
        </button>
      </header>
      <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-5">
        <ColorPreview css={css} colorNumber={900} className="bg-primary-900" />
        <ColorPreview css={css} colorNumber={800} className="bg-primary-800" />
        <ColorPreview css={css} colorNumber={700} className="bg-primary-700" />
        <ColorPreview css={css} colorNumber={600} className="bg-primary-600" />
        <ColorPreview css={css} colorNumber={500} className="bg-primary-500" />
        <ColorPreview css={css} colorNumber={400} className="bg-primary-400" />
        <ColorPreview css={css} colorNumber={300} className="bg-primary-300" />
        <ColorPreview css={css} colorNumber={200} className="bg-primary-200" />
        <ColorPreview css={css} colorNumber={100} className="bg-primary-100" />
        <ColorPreview css={css} colorNumber={50} className="bg-primary-50" />
      </ul>
    </section>
  );
}
