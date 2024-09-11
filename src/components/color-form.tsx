"use client";

import { Shuffle } from "lucide-react";
import { DEFAULT_COLOR } from "~/hooks/use-color";

interface Props {
  color: string;
  error: string;
  changeColor: (newColor: string) => void;
  randomColor: () => void;
}

export default function ColorForm({
  color,
  error,
  changeColor,
  randomColor,
}: Readonly<Props>) {
  return (
    <form className="mx-auto mt-4 flex max-w-sm flex-col gap-1">
      <div className="mt-0.5 flex gap-2">
        <input
          id="color"
          name="color"
          type="text"
          value={color}
          onChange={(event) => changeColor(event.target.value)}
          placeholder={`${DEFAULT_COLOR}...`}
          className="flex-1 rounded border-neutral-400 font-mono placeholder:text-neutral-500"
        />
        <button
          type="button"
          aria-label="Random Color"
          onClick={() => randomColor()}
          className="text-neutral-500 transition-colors hover:text-neutral-950"
        >
          <Shuffle className="size-6" />
        </button>
      </div>
      <p className="flex min-h-7 items-center text-base text-red-500">
        {!!error ? error : null}
      </p>
    </form>
  );
}
