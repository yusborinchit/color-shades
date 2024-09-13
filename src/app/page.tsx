"use client";

import ColorForm from "~/components/forms/color-form";
import PalettePreview from "~/components/palette-preview";
import Footer from "~/components/sections/footer";
import Header from "~/components/sections/header";
import Hero from "~/components/sections/hero";
import { useColor } from "~/hooks/use-color";

export default function Home() {
  const { color, palette, error, changeColor, randomColor } = useColor();

  return (
    <div>
      <Header />
      <main className="py-4">
        <Hero />
        <ColorForm
          color={color}
          error={error}
          changeColor={changeColor}
          randomColor={randomColor}
        />
        <section className="mx-auto mt-12 flex max-w-screen-md flex-col gap-12 px-8">
          <PalettePreview
            title="Primary Palette"
            varName="primary"
            palette={palette.primary}
          />
          <PalettePreview
            title="Complementary Palette"
            varName="complementary"
            palette={palette.complementary}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
