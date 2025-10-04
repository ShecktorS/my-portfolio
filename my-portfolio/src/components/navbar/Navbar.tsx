import styles from "./index.module.scss";

import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <ul className={styles.Navbar}>
      <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
        <li>About</li>
      </Link>
      <Link to="skill" spy={true} smooth={true} offset={50} duration={600}>
        <li>Skills</li>
      </Link>
      <Link to="projects" spy={true} smooth={true} offset={50} duration={700}>
        <li>Projects</li>
      </Link>
      <Link to="contact" spy={true} smooth={true} offset={50} duration={800}>
        <li>Contact</li>
      </Link>
    </ul>
  );
};

export default Navbar;
