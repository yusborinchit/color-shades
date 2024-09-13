import ColorPreview from "./color-preview";

interface Props {
  title: string;
  palette: string[];
}

export default function PalettePreview({ title, palette }: Readonly<Props>) {
  return (
    <article>
      <header className="flex items-center justify-between">
        <h3 className="text-3xl font-bold tracking-tighter">{title}</h3>
      </header>
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-5">
        {palette.length > 0
          ? palette.map((hexCode) => (
              <ColorPreview key={hexCode} hexCode={hexCode} />
            ))
          : Array.from({ length: 10 }).map(() => (
              <div
                key={crypto.randomUUID()}
                className="aspect-square animate-pulse rounded bg-gradient-to-t from-neutral-400 to-neutral-300"
              />
            ))}
      </div>
    </article>
  );
}
