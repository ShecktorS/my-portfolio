import styles from "./index.module.scss";

import { Link } from "react-scroll/modules";
import { motion } from "framer-motion";
import { useEffect } from "react";

interface Props {
  clickBurger: boolean;
  setClickBurger: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerMenu: React.FC<Props> = (props) => {
  const { clickBurger, setClickBurger } = props;

  console.log(document.body.style.overflow);

  useEffect(() => {
    clickBurger
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [clickBurger]);

  return (
    <div
      className={`${styles.HamburgerMenu} ${!clickBurger && styles.showMenu}`}
    >
      {clickBurger && (
        <motion.h3
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
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
        </motion.h3>
      )}
      {clickBurger && (
        <motion.h3
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
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
        </motion.h3>
      )}
      {clickBurger && (
        <motion.h3
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
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
        </motion.h3>
      )}
      {clickBurger && (
        <motion.h3
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
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
        </motion.h3>
      )}
    </div>
  );
};

export default HamburgerMenu;
