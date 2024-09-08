export function parseHslToString(
  hue: number,
  saturation: number,
  lightness: number
) {
  return `${hue},${saturation}%,${lightness}%`;
}
