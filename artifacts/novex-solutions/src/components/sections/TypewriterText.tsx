import { useEffect, useRef, useState } from "react";

interface Props {
  phrases: string[];
  className?: string;
}

export default function TypewriterText({ phrases, className = "" }: Props) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const current = phrases[phraseIndex];

  useEffect(() => {
    const clear = () => { if (timer.current) clearTimeout(timer.current); };
    clear();

    if (phase === "typing") {
      if (charCount < current.length) {
        timer.current = setTimeout(() => setCharCount((c) => c + 1), 65);
      } else {
        timer.current = setTimeout(() => setPhase("holding"), 2000);
      }
    } else if (phase === "holding") {
      timer.current = setTimeout(() => setPhase("deleting"), 300);
    } else {
      if (charCount > 0) {
        timer.current = setTimeout(() => setCharCount((c) => c - 1), 35);
      } else {
        setPhase("typing");
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }
    }

    return clear;
  }, [charCount, phase, current, phrases]);

  const displayed = current.slice(0, charCount);

  return (
    <span className={className}>
      {displayed}
      <span
        className="inline-block w-0.5 bg-current align-middle ms-0.5 animate-pulse"
        style={{ height: "0.85em", verticalAlign: "middle" }}
      />
    </span>
  );
}
