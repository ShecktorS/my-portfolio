import styles from "./index.module.scss";

import { motion } from "framer-motion";
import { useEffect } from "react";

interface Props {
  clickBurger: boolean;
}

const HamburgerMenu: React.FC<Props> = (props) => {
  const { clickBurger } = props;

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
          About
        </motion.h3>
      )}
      {clickBurger && (
        <motion.h3
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
        >
          Skills
        </motion.h3>
      )}
      {clickBurger && (
        <motion.h3
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
        >
          Cases
        </motion.h3>
      )}
      {clickBurger && (
        <motion.h3
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        >
          Contact
        </motion.h3>
      )}
    </div>
  );
};

export default HamburgerMenu;
