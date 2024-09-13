import Color from "color";

export function getComplementaryColor(hexColor: string) {
  const hsl = new Color(hexColor, "hex").hsl();

  const hue = (hsl.hue() + 180) % 360;
  const saturation = hsl.saturationl();
  const lightness = hsl.lightness();

  const complementaryHsl = `hsl(${hue},${saturation}%,${lightness}%)`;

  return new Color(complementaryHsl, "hsl").hex();
}
