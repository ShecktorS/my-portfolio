import styles from "./index.module.scss";
import sound from "../../sounds/mouse-click.mp3";

import Navbar from "../navbar";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { useEffect, useRef } from "react";

interface Props {
  clickBurger: boolean;
  setClickBurger: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<Props> = (props) => {
  const { clickBurger, setClickBurger } = props;
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(sound);
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        // Ignora errori se l'audio non può essere riprodotto
      });
    }
  };

  return (
    <div className={`${styles.Header} ${clickBurger ? styles.menuOpen : ''}`}>
      <h3>Ettore Sanfilippo</h3>
      <Navbar />
      <div className={styles.rightSection}>
        <ThemeToggle />
      </div>
      <div
        onClick={() => {
          setClickBurger((prev: React.SetStateAction<boolean>) => !prev);
          playSound();
        }}
        className={styles.hamburgerContainer}
      >
        <div
          className={`${styles.hamburger} ${clickBurger && styles.toCross}`}
        />
      </div>
    </div>
  );
};

export default Header;
