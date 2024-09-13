interface Props {
  hexCode: string;
}

export default function ColorPreview({ hexCode }: Readonly<Props>) {
  return (
    <button
      onClick={() => navigator.clipboard.writeText(hexCode)}
      style={{ "--color": hexCode } as React.CSSProperties}
      className="flex aspect-square items-end justify-end rounded bg-[var(--color)] transition-transform active:scale-90"
    >
      <span className="m-2 rounded bg-white px-1 py-0.5 font-mono text-xs">
        {hexCode}
      </span>
    </button>
  );
}
