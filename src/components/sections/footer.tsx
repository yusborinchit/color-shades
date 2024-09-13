export default function Footer() {
  return (
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
  );
}
