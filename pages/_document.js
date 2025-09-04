import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-smooth" lang="en">
      <Head />
      <body className="md:overflow-visible bg-gradient-to-l to-zinc-900 from-zinc-800 dark:from-zinc-900 dark:to-zinc-950">
        <Main />
        <NextScript />
        <div className="-z-50 blur-[100px] fixed inset-0 w-full h-full bg-gradient-to-r from-zinc-900/20 via-black to-zinc-800/20">
          <div className="-z-50 fixed top-[10%] left-[8%] rounded-full w-56 h-56 bg-gradient-to-r from-cyan-500/50 to-cyan-700/20"></div>
          <div className="-z-50 fixed right-[10%] top-[20%] rounded-full w-32 h-32 bg-gradient-to-r from-green-500/50 to-green-700/20"></div>
          <div className="-z-50 fixed bottom-[20%] left-[20%] rounded-full w-40 h-40 bg-gradient-to-r from-yellow-500/50 to-yellow-700/20"></div>
          <div className="-z-50 fixed bottom-[15%] right-[20%] rounded-full w-56 h-56 bg-gradient-to-r from-indigo-400/50 to-indigo-600/50"></div>
        </div>
      </body>
    </Html>
  );
}
