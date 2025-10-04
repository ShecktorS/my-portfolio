import { UserData } from "../../userData";
import styles from "./index.module.scss";

interface Props {
  myUserData: UserData;
}

const AboutSection: React.FC<Props> = (props) => {
  const { myUserData } = props;

  return (
    <div className={styles.AboutSection}>
      <div className={styles.aboutCard}>
        <div className={styles.leftContainer}>
          <div className={styles.about1}>
            <h2>About me</h2>

            <p>{myUserData.about[0]}</p>
          </div>
          <div className={styles.about2}>
            <hr />
            <p>{myUserData.about[1]}</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src="https://i.postimg.cc/KjSj3Bg8/20161221-113725-1.jpg"
            alt="image me"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
