"use client";

import ColorShadesGenerator from "~/components/color-shades-generator";

export default function Home() {
  return (
    <>
      <main className="py-4">
        <header className="relative mx-auto max-w-screen-md px-8 pt-4">
          <p className="text-xl font-black tracking-tighter">
            color/
            <span className="text-primary-800">s</span>
            <span className="text-primary-700">h</span>
            <span className="text-primary-600">a</span>
            <span className="text-primary-500">d</span>
            <span className="text-primary-400">e</span>
            <span className="text-primary-300">s</span>
          </p>
        </header>
        <section className="relative mx-auto max-w-screen-md px-8 pt-24">
          <div className="absolute -left-24 -top-12 -z-10 size-80 rounded-full bg-primary-300 opacity-30" />
          <div className="absolute -right-10 top-48 -z-10 size-48 rounded-full bg-primary-800 opacity-30" />
          <h1 className="text-center text-7xl font-semibold leading-[0.9] tracking-[-6px]">
            A New Way to See Colors<span className="text-primary-500">!</span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-center leading-tight text-neutral-500">
            Color Shades is a new way to see colors. It&apos;s a simple tool
            that generates a set of shades for a given color.
          </p>
        </section>
        <ColorShadesGenerator />
      </main>
      <footer className="relative mx-auto mt-16 flex max-w-screen-md flex-col items-center justify-between px-8 py-4 text-neutral-500 sm:flex-row">
        <p className="">
          All rights reserved © 2023 by{" "}
          <a
            href="https://github.com/yusborinchit"
            target="_blank"
            className="underline"
          >
            Yusborinchit
          </a>
        </p>
        <p>
          Please 🌟{" "}
          <a
            href="https://github.com/yusborinchit/color-shades"
            target="_blank"
            className="underline"
          >
            this project
          </a>{" "}
          on GitHub!
        </p>
      </footer>
    </>
  );
}
