import styles from "./index.module.scss";
import { UserData } from "../../userData";
import React from "react";

import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiCssmodules,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiGit,
} from "react-icons/si";

interface Props {
  myUserData: UserData;
}

const SkillSection: React.FC<Props> = (props) => {
  const { myUserData } = props;

  const icons = [
    <SiHtml5 />,
    <SiCss3 />,
    <SiJavascript />,
    <SiSass />,
    <SiCssmodules />,
    <SiTypescript />,
    <SiReact />,
    <SiNodedotjs />,
    <SiGit />,
  ];

  return (
    <div className={styles.SkillSection}>
      <h2>Skills</h2>
      <p>
        Sono uno sviluppatore con esperienza in diversi linguaggi, librerie e
        frameworks. Sono sempre alla ricerca di una nuova sfida per potermi
        mettere alla prova.
      </p>
      <div className={styles.script}>
        {myUserData.skills
          .filter((skill) => skill.type === "script")
          .map((skill) => (
            <div className={styles.skill} key={skill.id}>
              <div>{icons[skill.id - 1]}</div>
              <p>{skill.name}</p>
            </div>
          ))}
      </div>
      <div className={styles.otherScript}>
        {myUserData.skills
          .filter((skill) => skill.type !== "script")
          .map((skill) => (
            <div className={styles.skill} key={skill.id}>
              <div>{icons[skill.id - 1]}</div>
              <p>{skill.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SkillSection;
