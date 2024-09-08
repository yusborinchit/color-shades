"use client";

import Color from "color";
import { Shuffle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { getColorShades } from "~/utils/get-color-shades";
import { getRandomHexColor } from "~/utils/get-random-hex-color";
import { parseHslToString } from "~/utils/parse-hsl-to-string";

const DEFAULT_COLOR = "#1d2f77";
const INVALID_COLOR_ERROR = "Invalid Color! 😡";

export default function ColorForm() {
  const [color, setColor] = useState(DEFAULT_COLOR);
  const [error, setError] = useState("");
  const [colorShades, setColorShades] = useState<string[]>([]);

  function handleRandomColor() {
    setColor(getRandomHexColor());
  }

  useEffect(() => {
    if (!color) return setError(INVALID_COLOR_ERROR);
    setError("");

    try {
      const hsl = new Color(color).hsl();

      const hue = hsl.hue();
      const saturation = hsl.saturationl();

      const shadesValues = getColorShades(hue, saturation);
      const shades = shadesValues.map(({ hue, saturation, lightness }) =>
        parseHslToString(hue, saturation, lightness)
      );

      setColorShades(shades);
    } catch (e) {
      setError(INVALID_COLOR_ERROR);
    }
  }, [color]);

  return (
    <div>
      <form className="flex flex-col">
        <label htmlFor="color" className="font-semibold tracking-tight">
          Color:
        </label>
        <div className="mt-0.5 flex gap-2">
          <input
            id="color"
            name="color"
            type="text"
            value={color}
            onChange={(event) => setColor(event.target.value)}
            placeholder={`${DEFAULT_COLOR}...`}
            className="flex-1 rounded border-neutral-400 placeholder:text-neutral-500"
          />
          <button
            type="button"
            aria-label="Random Color"
            onClick={handleRandomColor}
            className="text-neutral-500 transition-colors hover:text-neutral-950"
          >
            <Shuffle className="size-6" />
          </button>
        </div>
        <p className="min-h-6 text-base text-red-500">
          {!!error ? error : null}
        </p>
      </form>
      <div className="mt-4 flex gap-1">
        {colorShades.map((colorShade, i) => (
          <div
            key={i}
            style={{ "--color": `hsl(${colorShade})` } as React.CSSProperties}
            className="size-10 rounded bg-[var(--color)]"
          />
        ))}
      </div>
    </div>
  );
}
