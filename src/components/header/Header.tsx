import styles from "./index.module.scss";

import Navbar from "../navbar";
import { useState } from "react";

const Header = () => {
  const [clickBurger, setClickBurger] = useState<boolean>(false);

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
