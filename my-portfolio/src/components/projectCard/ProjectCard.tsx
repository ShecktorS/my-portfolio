import styles from "./index.module.scss";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export interface ProjectData {
  title: string;
  description: string;
  demo: string | null;
  link: string;
  image: string;
}

interface Props {
  data: ProjectData;
}

const ProjectCard: React.FC<Props> = (props) => {
  const { data } = props;
  return (
    <div className={styles.ProjectCard}>
      <img
        className={styles.projectImage}
        src={data.image}
        alt="first project image"
      />

      <div>
        <div className={styles.space} />
        <div className={styles.content}>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.description}>
            {data.description?.split(".")[0]}
          </p>
          <div className={styles.buttons}>
            {data.demo && (
              <a href={data.demo} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt /> Demo
              </a>
            )}
            <a href={data.link} target="_blank" rel="noreferrer">
              <FaGithub /> Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
