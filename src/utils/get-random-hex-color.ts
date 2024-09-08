import Color from "color";
import { getRandomNumber } from "./get-random-number";

export function getRandomHexColor() {
  const red = getRandomNumber(0, 255);
  const green = getRandomNumber(0, 255);
  const blue = getRandomNumber(0, 255);

  const rgb = `rgb(${red},${green},${blue})`;
  const hex = new Color(rgb).hex();

  return hex;
}
