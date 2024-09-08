export function getColorShades(hue: number, saturation: number) {
  return Array.from({ length: 10 }).map((_, i) => ({
    hue,
    saturation,
    lightness: 10 * i,
  }));
}
