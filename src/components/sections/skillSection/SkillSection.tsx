import { UserData } from "../../../userData";
import styles from "./index.module.scss";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiCssmodules,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiGit,
} from "react-icons/si";

interface Props {
  myUserData: UserData;
}

const SkillSection: React.FC<Props> = (props) => {
  const { myUserData } = props;

  return (
    <div className={styles.SkillSection}>
      <h2>Skills</h2>
      <p>
        Sono uno sviluppatore con esperienza in diversi linguaggi, librerie e
        frameworks. Sono sempre alla ricerca di una nuova sfida per potermi
        mettere alla prova.
      </p>
      <div>{myUserData.skills[0]}</div>
    </div>
  );
};

export default SkillSection;
