import styles from "./index.module.scss";
import { FaLaptopCode } from "react-icons/fa";

import { UserData } from "../../userData";

import ProjectCard, { ProjectData } from "../../components/projectCard";

interface Props {
  myUserData: UserData;
}

const ProjectSection: React.FC<Props> = (props) => {
  const { myUserData } = props;

  return (
    <div className={styles.ProjectSection}>
      <h2>
        <FaLaptopCode /> Projects
      </h2>
      <p>
        Questi sono i progetti che ho sviluppato nel corso della mia esperienza
        da Frontend Developer
      </p>
      <div className={styles.projectsGrid}>
        {myUserData.projects.map((item, id) => (
          <ProjectCard key={id} data={item as ProjectData} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
