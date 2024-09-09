"use client";

import Color from "color";
import { useEffect, useState } from "react";
import { getColorShades } from "~/utils/get-color-shades";
import { getRandomHexColor } from "~/utils/get-random-hex-color";
import { parseHslToString } from "~/utils/parse-hsl-to-string";
import { setColorTheme } from "~/utils/set-color-theme";

export const DEFAULT_COLOR = "#1D2F77";
export const INVALID_COLOR_ERROR = "Invalid Color! 😡";

export function useColor(onNewColor: (newColor: string) => void) {
  const [color, setColor] = useState(DEFAULT_COLOR);
  const [error, setError] = useState("");

  function changeColor(newColor: string) {
    setColor(newColor);
  }

  function randomColor() {
    setColor(getRandomHexColor());
  }

  useEffect(() => {
    if (!color) return setError(INVALID_COLOR_ERROR);

    try {
      const hsl = new Color(color).hsl();

      const hue = hsl.hue();
      const saturation = hsl.saturationl();

      const shadesValues = getColorShades(hue, saturation);
      const shades = shadesValues.map(parseHslToString);
      setColorTheme(shades);
      onNewColor(color);

      setError("");
    } catch (e) {
      setError(INVALID_COLOR_ERROR);
    }
  }, [color, onNewColor]);

  return { color, error, changeColor, randomColor };
}
