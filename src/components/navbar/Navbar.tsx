import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <ul className={styles.Navbar}>
      <li>About</li>
      <li>Skills</li>
      <li>Cases</li>
      <li>Contact</li>
    </ul>
  );
};

export default Navbar;
