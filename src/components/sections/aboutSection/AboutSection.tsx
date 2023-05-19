import styles from "./index.module.scss";

const AboutSection: React.FC = () => {
  return (
    <div className={styles.AboutSection}>
      <div className={styles.aboutCard}>
        <div className={styles.leftContainer}>
          <div className={styles.about1}>
            <h2>About me</h2>{" "}
            <p>
              Il mio background artistico e musicale mi ha permesso di
              affrontare i problemi in modo dinamico e originale, utilizzando un
              approccio metodico e fortemente logico per risolverli. Ho sempre
              avuto una mentalità digitale, impegnandomi costantemente per
              migliorare le mie abilità in intelligenza sociale ed emotiva,
              problem solving, time management e lavoro di squadra.{" "}
            </p>
          </div>
          <div className={styles.about2}>
            <hr />
            <p>
              Il mio background artistico e musicale mi ha permesso di
              affrontare i problemi in modo dinamico e originale, utilizzando un
              approccio metodico e fortemente logico per risolverli. Ho sempre
              avuto una mentalità digitale, impegnandomi costantemente per
              migliorare le mie abilità in intelligenza sociale ed emotiva,
              problem solving, time management e lavoro di squadra.{" "}
            </p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src="https://picsum.photos/800/800"
            alt="image me"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
