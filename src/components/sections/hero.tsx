export default function Hero() {
  return (
    <section className="relative mx-auto max-w-screen-md px-8 pt-24">
      <div className="absolute -left-24 -top-12 -z-10 size-80 rounded-full bg-primary-300 opacity-30" />
      <div className="absolute -right-10 top-48 -z-10 size-48 rounded-full bg-primary-800 opacity-30" />
      <h1 className="text-center text-7xl font-semibold leading-[0.9] tracking-[-6px]">
        A New Way to See Colors<span className="text-primary-500">!</span>
      </h1>
      <p className="mx-auto mt-4 max-w-lg text-center leading-tight text-neutral-500">
        Color Shades is a new way to see colors. It&apos;s a simple tool that
        generates a set of shades for a given color.
      </p>
    </section>
  );
}
