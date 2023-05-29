import styles from "./index.module.scss";
import "swiper/css";

import { UserData } from "../../userData";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/css/effect-fade";

import ProjectCard from "../../components/projectCard";

interface Props {
  myUserData: UserData;
}

const ProjectSection: React.FC<Props> = (props) => {
  const { myUserData } = props;

  return (
    <div className={styles.ProjectSection}>
      <h2>Projects</h2>
      <p>
        Questi sono i progetti che ho sviluppato nel corso della mia esperienza
        da Frontend Developer
      </p>
      <Swiper
        spaceBetween={150}
        slidesPerView={1}
        grabCursor={true}
        loop={true}
        effect="fade"
        navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {myUserData.projects.map((item, id) => (
          <SwiperSlide key={id}>
            <ProjectCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectSection;
