import styles from "./index.module.scss";
import { UserData } from "../../userData";

interface Props {
  myUserData: UserData;
}

const MainSection: React.FC<Props> = (props) => {
  const { myUserData } = props;

  const searchCV = () =>
    myUserData.resources.map((item) => item.name === "CV" && item.name);

  return (
    <div className={styles.MainSection}>
      <h4 className={styles.role}>{myUserData.role}</h4>
      <h1
        className={styles.name}
      >{`${myUserData.name} ${myUserData.surname}`}</h1>
      <p className={styles.shortDescription}>{myUserData.description}</p>
      <button className={styles.curriculumDownload}>
        Download my {searchCV()}
      </button>
    </div>
  );
};

export default MainSection;
