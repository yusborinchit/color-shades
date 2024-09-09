"use client";

import { useState } from "react";
import { DEFAULT_COLOR } from "~/hooks/use-color";
import ColorForm from "./color-form";
import ColorShadesPreview from "./color-shades-preview";

export default function ColorShadesGenerator() {
  const [color, setColor] = useState(DEFAULT_COLOR);

  function onNewColor(newColor: string) {
    setColor(newColor);
  }

  return (
    <>
      <ColorForm onNewColor={onNewColor} />
      <ColorShadesPreview color={color} />
    </>
  );
}
