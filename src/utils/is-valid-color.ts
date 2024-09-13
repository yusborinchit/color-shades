import Color from "color";

export function isValidColor(color: string) {
  try {
    new Color(color, "hex");
    return true;
  } catch (error) {
    return false;
  }
}
