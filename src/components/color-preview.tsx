"use client";

interface Props {
  hexCode: string;
  className: string;
}

export default function ColorPreview({ hexCode, className }: Readonly<Props>) {
  return (
    <li className={`aspect-square relative rounded ${className}`}>
      <span className="absolute bottom-2 right-2 rounded bg-primary-50 px-1 py-0.5 font-mono text-xs">
        {hexCode}
      </span>
    </li>
  );
}
