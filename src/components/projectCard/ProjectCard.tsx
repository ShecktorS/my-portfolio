import styles from "./index.module.scss";

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
  console.log(data);
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
            <button
              onClick={() => {
                data.demo === null && alert("Errore nel caricamento");
              }}
              className={styles.Demo}
            >
              <a href={data.demo ?? undefined} target="_blank">
                Link
              </a>
            </button>
            <button className={styles.github}>
              <a href={data.link} target="_blank">
                Github
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
