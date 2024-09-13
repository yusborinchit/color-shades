import Color from "color";

const LIGHTNESS_VALUES = [5, 10, 20, 30, 40, 50, 60, 70, 80, 90];

export function getColorShades(hexColor: string) {
  const hsl = new Color(hexColor, "hex").hsl();

  const hue = hsl.hue();
  const saturation = hsl.saturationl();

  return LIGHTNESS_VALUES.map((lightness) => {
    const hsl = `hsl(${hue},${saturation}%,${lightness}%)`;
    return new Color(hsl, "hsl").hex();
  });
}
