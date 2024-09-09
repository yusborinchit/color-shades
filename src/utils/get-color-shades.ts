export function getColorShades(hue: number, saturation: number) {
  const shades = Array.from({ length: 11 }).map((_, i) => ({
    hue,
    saturation,
    lightness: 10 * i,
  }));

  shades[10].lightness = 96;

  return shades;
}
