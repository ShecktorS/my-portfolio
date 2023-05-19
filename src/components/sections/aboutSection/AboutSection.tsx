import { useState } from "react";
import styles from "./index.module.scss";

const AboutSection: React.FC = () => {
  const [flipCard, setFlipCard] = useState<boolean>(false);

  return (
    <div className={styles.AboutSection}>
      <div
        onClick={() => {
          setFlipCard((prev) => !prev);
          console.log(flipCard);
        }}
        className={`${styles.aboutCard} ${flipCard && styles.flipCard}`}
      >
        {!flipCard ? (
          <>
            <div className={styles.leftContainer}>
              <div className={styles.about1}>
                <h3>About me</h3> <p>About0</p>
              </div>
              <div className={styles.about2}>
                <hr />
                <p>About1</p>
              </div>
            </div>
            <div className={styles.imageContainer}>
              <img
                className={styles.image}
                src="https://picsum.photos/800/800"
                alt="image me"
              />
            </div>
          </>
        ) : (
          <div className={styles.reverse}>
            <h1>Pippo Esiste</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutSection;
