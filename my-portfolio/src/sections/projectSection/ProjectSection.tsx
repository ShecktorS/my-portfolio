import styles from "./index.module.scss";
import { FaChevronLeft, FaChevronRight, FaLaptopCode } from "react-icons/fa";
import { useState, useEffect } from "react";

import { UserData } from "../../userData";

import ProjectCard, { ProjectData } from "../../components/projectCard";

interface Props {
  myUserData: UserData;
}

const ProjectSection: React.FC<Props> = (props) => {
  const { myUserData } = props;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Calcola quante card mostrare in base alla larghezza dello schermo
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // Tablet
      } else {
        setCardsPerView(3); // Desktop
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const totalProjects = myUserData.projects.length;
  const maxSlide = Math.max(0, totalProjects - cardsPerView);

  const handlePrevious = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(maxSlide, prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Reset slide quando cambia cardsPerView
  useEffect(() => {
    if (currentSlide > maxSlide) {
      setCurrentSlide(maxSlide);
    }
  }, [cardsPerView, currentSlide, maxSlide]);

  return (
    <div className={styles.ProjectSection}>
      <h2>
        <FaLaptopCode /> Projects
      </h2>
      <p>
        Questi sono i progetti che ho sviluppato nel corso della mia esperienza
        da Frontend Developer
      </p>
      <div className={styles.carouselContainer}>
        <button
          className={`${styles.navButton} ${styles.navButtonPrev}`}
          onClick={handlePrevious}
          disabled={currentSlide === 0}
          aria-label="Progetto precedente"
        >
          <FaChevronLeft />
        </button>

        <div className={styles.carouselWrapper}>
          <div
            className={styles.carouselTrack}
            style={{
              transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)`,
            }}
          >
            {myUserData.projects.map((item, id) => (
              <div
                key={id}
                className={styles.carouselSlide}
                style={{ flex: `0 0 ${100 / cardsPerView}%` }}
              >
                <ProjectCard data={item as ProjectData} />
              </div>
            ))}
          </div>
        </div>

        <button
          className={`${styles.navButton} ${styles.navButtonNext}`}
          onClick={handleNext}
          disabled={currentSlide >= maxSlide}
          aria-label="Progetto successivo"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className={styles.dotsContainer}>
        {Array.from({ length: maxSlide + 1 }).map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === currentSlide ? styles.dotActive : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Vai al gruppo di progetti ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
