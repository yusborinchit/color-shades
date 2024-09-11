export function setColorTheme(colorShades: string[]) {
  document.body.style.setProperty("--primary-50", `hsl(${colorShades[10]})`);
  document.body.style.setProperty("--primary-100", `hsl(${colorShades[9]})`);
  document.body.style.setProperty("--primary-200", `hsl(${colorShades[8]})`);
  document.body.style.setProperty("--primary-300", `hsl(${colorShades[7]})`);
  document.body.style.setProperty("--primary-400", `hsl(${colorShades[6]})`);
  document.body.style.setProperty("--primary-500", `hsl(${colorShades[5]})`);
  document.body.style.setProperty("--primary-600", `hsl(${colorShades[4]})`);
  document.body.style.setProperty("--primary-700", `hsl(${colorShades[3]})`);
  document.body.style.setProperty("--primary-800", `hsl(${colorShades[2]})`);
  document.body.style.setProperty("--primary-900", `hsl(${colorShades[1]})`);
}
