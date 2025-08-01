import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-smooth" lang="en">
      <Head />
      <body className="md:overflow-visible bg-gradient-to-l to-red-900 from-zinc-800 dark:from-zinc-900 dark:to-zinc-950">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
