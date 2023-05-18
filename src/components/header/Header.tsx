import styles from "./index.module.scss";

import Navbar from "../navbar";

interface Props {
  clickBurger: boolean;
  setClickBurger: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<Props> = (props) => {
  const { clickBurger, setClickBurger } = props;

  return (
    <div className={styles.Header}>
      <h3>Ettore Sanfilippo</h3>
      <Navbar />
      <p> </p>
      <div
        onClick={() => setClickBurger((prev) => !prev)}
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
