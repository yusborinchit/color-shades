"use client";

import Color from "color";
import { useMemo } from "react";
import { useColor } from "~/hooks/use-color";
import { parseHslToString } from "~/utils/parse-hsl-to-string";
import ColorForm from "./color-form";
import ColorShadesPreview from "./color-shades-preview";

export default function ColorShadesGenerator() {
  const { color, colorShades, error, changeColor, randomColor } = useColor();

  const hexCodes = useMemo(() => {
    return colorShades
      .map((hsl) => `hsl(${parseHslToString(hsl)})`)
      .map((hex) => new Color(hex).hex());
  }, [colorShades]);

  return (
    <>
      <ColorForm
        color={color}
        error={error}
        changeColor={changeColor}
        randomColor={randomColor}
      />
      <ColorShadesPreview hexCodes={hexCodes} />
    </>
  );
}
