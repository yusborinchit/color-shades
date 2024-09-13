export function setCssColors(name: string, hexCodes: string[]) {
  [900, 800, 700, 600, 500, 400, 300, 200, 100, 50].forEach((value, index) => {
    document.documentElement.style.setProperty(
      `--${name}-${value}`,
      hexCodes[index]
    );
  });
}
