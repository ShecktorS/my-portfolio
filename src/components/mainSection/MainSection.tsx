import styles from "./index.module.scss";
import { UserData } from "../../userData";

interface Props {
  myUserData: UserData;
}

const MainSection: React.FC<Props> = (props) => {
  const { myUserData } = props;

  const searchCV = () =>
    myUserData.resources.map((item) => item.name === "CV" && item.name);

  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = myUserData.resources[0].url;
    link.target = "_blank";
    link.setAttribute("download", "Ettore-Sanfilippo-CV.pdf");
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.MainSection}>
      <h4 className={styles.role}>{myUserData.role}</h4>
      <h1
        className={styles.name}
      >{`${myUserData.name} ${myUserData.surname}`}</h1>
      <p className={styles.shortDescription}>{myUserData.description}</p>
      <button onClick={downloadFile} className={styles.curriculumDownload}>
        Download my {searchCV()}
      </button>
    </div>
  );
};

export default MainSection;
