import styles from "./index.module.scss";

import { Link } from "react-scroll/modules";
import { useEffect, useState } from "react";
import ThemeToggle from "../themeToggle/ThemeToggle";

interface Props {
  clickBurger: boolean;
  setClickBurger: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerMenu: React.FC<Props> = (props) => {
  const { clickBurger, setClickBurger } = props;

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    clickBurger
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
    setIsAnimating(true);
  }, [clickBurger]);

  const handleAnimationEnd = () => {
    if (!clickBurger) {
      setIsAnimating(false);
    }
  };

  return (
    <div
      className={`${styles.HamburgerMenu} ${
        !clickBurger && !isAnimating && styles.showMenu
      }`}
    >
      {(clickBurger || isAnimating) && (
        <>
          <h3
            className={`${styles.menuItem} ${
              clickBurger ? styles.menuItemEnter : styles.menuItemExit
            }`}
          >
            <Link
              onClick={() => setClickBurger(false)}
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </h3>
          <h3
            className={`${styles.menuItem} ${
              clickBurger ? styles.menuItemEnter : styles.menuItemExit
            }`}
          >
            <Link
              onClick={() => setClickBurger(false)}
              to="skill"
              spy={true}
              smooth={true}
              offset={50}
              duration={600}
            >
              Skills
            </Link>
          </h3>
          <h3
            className={`${styles.menuItem} ${
              clickBurger ? styles.menuItemEnter : styles.menuItemExit
            }`}
          >
            <Link
              onClick={() => setClickBurger(false)}
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
            >
              Projects
            </Link>
          </h3>
          <h3
            className={`${styles.menuItem} ${
              clickBurger ? styles.menuItemEnter : styles.menuItemExit
            }`}
          >
            <Link
              onClick={() => setClickBurger(false)}
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={800}
            >
              Contact
            </Link>
          </h3>
          <div
            className={`${styles.menuItem} ${styles.themeToggleContainer} ${
              clickBurger ? styles.menuItemEnter : styles.menuItemExit
            }`}
            onAnimationEnd={handleAnimationEnd}
          >
            <ThemeToggle />
          </div>
        </>
      )}
    </div>
  );
};

export default HamburgerMenu;
