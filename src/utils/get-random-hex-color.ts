import Color from "color";

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomHexColor() {
  const red = getRandomNumber(0, 255);
  const green = getRandomNumber(0, 255);
  const blue = getRandomNumber(0, 255);

  const rgb = `rgb(${red},${green},${blue})`;
  const hex = new Color(rgb).hex();

  return hex;
}
