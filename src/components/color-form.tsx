"use client";

import Color from "color";
import React, { useState } from "react";
import { getColorShades } from "~/utils/get-color-shades";
import { parseHslToString } from "~/utils/parse-hsl-to.string";

const DEFAULT_COLOR = "#1d2f77";

export default function ColorForm() {
  const [colorShades, setColorShades] = useState<string[]>([]);
  const [error, setError] = useState("");

  function handleCreateShades(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const color = formData.get("color") as string;
    if (!color) return setError("Invalid Color");

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
      setError("Invalid Color");
    }
  }

  return (
    <div>
      <form onSubmit={handleCreateShades} className="flex flex-col gap-1">
        <label htmlFor="color" className="text-sm font-semibold">
          Color:
        </label>
        <input
          id="color"
          name="color"
          type="text"
          placeholder={`${DEFAULT_COLOR}...`}
          className="rounded border-neutral-400 placeholder:text-neutral-500"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button className="mt-4 rounded bg-neutral-950 px-4 py-2.5 font-semibold text-white">
          Create Shades
        </button>
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
