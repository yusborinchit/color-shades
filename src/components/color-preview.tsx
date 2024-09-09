"use client";

import Color from "color";
import { useEffect, useState } from "react";

interface Props {
  css: CSSStyleDeclaration;
  colorNumber: number;
  className: string;
}

export default function ColorPreview({
  css,
  colorNumber,
  className,
}: Readonly<Props>) {
  const [colorCode, setColorCode] = useState("#------");

  useEffect(() => {
    const hslColor = css.getPropertyValue(`--primary-${colorNumber}`);
    const hexColor = new Color(hslColor).hex();

    setColorCode(hexColor);
  }, [css, colorNumber]);

  return (
    <div className={`aspect-square relative rounded ${className}`}>
      <span className="absolute bottom-2 right-2 rounded bg-primary-50 px-1 py-0.5 font-mono text-xs">
        {colorCode}
      </span>
    </div>
  );
}