// components/Typewriter.tsx
"use client";

import { useEffect, useState } from "react";

// const words = [
//   "Desenvolvedor",
//   "Freelancer",
//   "Automatizador",
//   "Criador de soluções",
// ];

export default function Typewriter({ words }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index >= words.length) setIndex(0);

    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => (deleting ? prev - 1 : prev + 1));
        setText(words[index].substring(0, subIndex));
      },
      deleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <h2 className="text-4xl font-extrabold mx-auto sm:text-5xl font-bold bg-gradient-to-l from-orange-400 to-indigo-900 text-transparent bg-clip-text z-20 font-bold py-1">
      {text}
      <span className="border-r-4 border-indigo-600 animate-pulse ml-1" />
    </h2>
  );
}
