import { useEffect, useState } from "react";
import styles from "./index.module.scss";

interface Props {
  text: string;
  speed?: number;
}

const Typewriter: React.FC<Props> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    setDisplayedText("");
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i));
      i += 1;
      if (i >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className={styles.Typewriter}>{displayedText}</span>;
};

export default Typewriter;
