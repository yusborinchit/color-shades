export function parseHslToString({
  hue,
  saturation,
  lightness,
}: {
  hue: number;
  saturation: number;
  lightness: number;
}) {
  return `${hue},${saturation}%,${lightness}%`;
}
