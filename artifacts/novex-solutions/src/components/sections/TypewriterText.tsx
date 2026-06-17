import { useEffect, useState } from "react";

interface TypewriterTextProps {
  phrases: string[];
  className?: string;
}

function splitTokens(phrase: string): string[] {
  // Split into words (space-separated), keeping spaces as part of tokens
  const words = phrase.split(" ");
  const tokens: string[] = [];
  for (let i = 0; i < words.length; i++) {
    const token = i === 0 ? words[i] : " " + words[i];
    tokens.push(token);
  }
  return tokens;
}

export default function TypewriterText({ phrases, className = "" }: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [tokenIndex, setTokenIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const tokens = splitTokens(current);
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && tokenIndex <= tokens.length) {
      if (tokenIndex === tokens.length) {
        // Fully typed — pause then start deleting
        timeout = setTimeout(() => setDeleting(true), 2200);
      } else {
        timeout = setTimeout(() => {
          setDisplayed(tokens.slice(0, tokenIndex + 1).join("").replace(/ /g, "\u00A0"));
          setTokenIndex((t) => t + 1);
        }, 150);
      }
    } else if (deleting && tokenIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(tokens.slice(0, tokenIndex - 1).join("").replace(/ /g, "\u00A0"));
        setTokenIndex((t) => t - 1);
      }, 80);
    } else if (deleting && tokenIndex === 0) {
      setDeleting(false);
      setPhraseIndex((p) => (p + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [tokenIndex, deleting, phraseIndex, phrases]);

  return (
    <span className={className}>
      {displayed}
      <span className="inline-block w-0.5 h-[1em] bg-current align-middle ms-0.5 animate-pulse" />
    </span>
  );
}
