import styles from "./index.module.scss";

import Navbar from "../navbar";

const Header = () => {
  return (
    <div className={styles.Header}>
      <h3>Ettore Sanfilippo</h3>
      <Navbar />
      <p> </p>
    </div>
  );
};

export default Header;
