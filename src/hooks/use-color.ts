"use client";

import { useEffect, useState } from "react";
import { getColorShades } from "~/utils/get-color-shades";
import { getComplementaryColor } from "~/utils/get-complementary-color";
import { getRandomHexColor } from "~/utils/get-random-hex-color";
import { isValidColor } from "~/utils/is-valid-color";
import { setCssColors } from "~/utils/set-css-colors";

export const DEFAULT_COLOR = "#1D2F77";
export const INVALID_COLOR_ERROR = "Invalid Color! 😡";

interface Palettes {
  primary: string[];
  complementary: string[];
}

export function useColor() {
  const [color, setColor] = useState(DEFAULT_COLOR);
  const [error, setError] = useState("");
  const [palette, setPalette] = useState<Palettes>({
    primary: [],
    complementary: [],
  });

  function changeColor(newColor: string) {
    setColor(newColor);
  }

  function randomColor() {
    setColor(getRandomHexColor());
  }

  useEffect(() => {
    if (!isValidColor(color)) return setError(INVALID_COLOR_ERROR);

    const complementary = getComplementaryColor(color);

    const primaryShades = getColorShades(color);
    const complementaryShades = getColorShades(complementary);

    setCssColors("primary", primaryShades);

    setPalette({
      primary: primaryShades,
      complementary: complementaryShades,
    });
  }, [color]);

  return { color, palette, error, changeColor, randomColor };
}
