import styles from "./App.module.scss";

import Loader from "./components/loader";
import Header from "./components/header";
import HamburgerMenu from "./components/hamburgerMenu";
import Footer from "./components/footer";
import ScrollProgress from "./components/scrollProgress";

// Sections
import MainSection from "./sections/mainSection";
import AboutSection from "./sections/aboutSection";
import SkillSection from "./sections/skillSection";
import ContactSection from "./sections/contactSection";
import ProjectSection from "./sections/projectSection";

import { useEffect, useState } from "react";
import { myUserData } from "./userData";
import { Element } from "react-scroll";

const App: React.FC = () => {
  const [clickBurger, setClickBurger] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    const loading = setTimeout(() => setLoader(false), 1500);
    return () => clearTimeout(loading);
  }, []);

  return (
    <div className={styles.App}>
      {loader ? (
        <div className={styles.loaderContainer}>
          <Loader />
        </div>
      ) : (
        <>
          <ScrollProgress />
          <Header setClickBurger={setClickBurger} clickBurger={clickBurger} />
          <HamburgerMenu
            setClickBurger={setClickBurger}
            clickBurger={clickBurger}
          />
          <Element name="main">
            <MainSection myUserData={myUserData} />
          </Element>
          <Element name="about">
            <AboutSection myUserData={myUserData} />
          </Element>
          <Element name="skill">
            <SkillSection myUserData={myUserData} />
          </Element>
          <Element name="projects">
            <ProjectSection myUserData={myUserData} />
          </Element>
          <Element name="contact">
            <ContactSection />
          </Element>
          <Footer myUserData={myUserData} />
        </>
      )}
    </div>
  );
};

export default App;
