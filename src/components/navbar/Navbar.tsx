import styles from "./index.module.scss";

import { Link } from "react-scroll/modules";

const Navbar = () => {
  return (
    <ul className={styles.Navbar}>
      <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
        <li>About</li>
      </Link>
      <li>Skills</li>
      <li>Cases</li>
      <li>Contact</li>
    </ul>
  );
};

export default Navbar;
