import styles from "./index.module.scss";
import { FaChevronLeft, FaChevronRight, FaLaptopCode } from "react-icons/fa";
import { useRef } from "react";

import { UserData } from "../../userData";

import ProjectCard, { ProjectData } from "../../components/projectCard";

interface Props {
  myUserData: UserData;
}

const ProjectSection: React.FC<Props> = (props) => {
  const { myUserData } = props;
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const { clientWidth } = sliderRef.current;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -clientWidth : clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.ProjectSection}>
      <h2>
        <FaLaptopCode /> Projects
      </h2>
      <p>
        Questi sono i progetti che ho sviluppato nel corso della mia esperienza
        da Frontend Developer
      </p>
      <div className={styles.sliderWrapper}>
        <button
          className={`${styles.control} ${styles.left}`}
          onClick={() => handleScroll("left")}
          aria-label="scroll left"
        >
          <FaChevronLeft />
        </button>
        <div className={styles.projectsSlider} ref={sliderRef}>
          {myUserData.projects.map((item, id) => (
            <ProjectCard key={id} data={item as ProjectData} />
          ))}
        </div>
        <button
          className={`${styles.control} ${styles.right}`}
          onClick={() => handleScroll("right")}
          aria-label="scroll right"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ProjectSection;
