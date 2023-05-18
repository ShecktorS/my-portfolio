import styles from "./index.module.scss";
import sound from "../../sounds/mouse-click.mp3";

import Navbar from "../navbar";

interface Props {
  clickBurger: boolean;
  setClickBurger: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<Props> = (props) => {
  const { clickBurger, setClickBurger } = props;

  const playSound = (sound: any, volume = 0.3) => {
    const audio = new Audio(sound);
    audio.volume = volume;
    return audio.play();
  };

  return (
    <div className={styles.Header}>
      <h3>Ettore Sanfilippo</h3>
      <Navbar />
      <p> </p>
      <div
        onClick={() => {
          setClickBurger((prev) => !prev);
          playSound(sound);
        }}
        className={styles.hamburgerContainer}
      >
        <div
          className={`${styles.hamburger} ${clickBurger && styles.toCross}`}
        ></div>
      </div>
    </div>
  );
};

export default Header;
