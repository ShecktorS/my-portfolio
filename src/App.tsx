import styles from "./App.module.scss";

import Loader from "./components/loader";
import Header from "./components/header";
import HamburgerMenu from "./components/hamburgerMenu";
import Footer from "./components/footer";

// ---------------------------------------
// IMPORT SECTIONS
// ---------------------------------------
import MainSection from "./components/mainSection";
import AboutSection from "./components/sections/aboutSection";
import SkillSection from "./components/sections/skillSection";

import { useEffect, useState } from "react";

import { myUserData } from "./userData";

import { Element } from "react-scroll/modules";

const App: React.FC = () => {
  // const isMorning: boolean =
  //   +new Date().toLocaleTimeString().split(":")[0] < 20 &&
  //   +new Date().toLocaleTimeString().split(":")[0] > 7;
  const [nightMode] = useState<boolean>(true);

  const [clickBurger, setClickBurger] = useState<boolean>(false);

  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    const loading = setTimeout(() => setLoader(false), 2500);
    return () => clearTimeout(loading);
  });

  return (
    <div className={`${styles.App} ${nightMode && styles.nightMode}`}>
      {loader ? (
        <div className={styles.loaderContainer}>
          <Loader />
        </div>
      ) : (
        <>
          <Header setClickBurger={setClickBurger} clickBurger={clickBurger} />
          <HamburgerMenu clickBurger={clickBurger} />
          <Element name="main">
            <MainSection myUserData={myUserData} />
          </Element>
          <Element name="about">
            <AboutSection myUserData={myUserData} />
          </Element>
          <Element name="skill">
            <SkillSection myUserData={myUserData} />
          </Element>
          <Footer myUserData={myUserData} />
        </>
      )}
    </div>
  );
};

// TODO: ADD OBSERVER INTERSECTION o Framer motion e react spring
// TODO: Per lo smooth aggiungere React-scroll seguendo questo video: "https://www.youtube.com/watch?v=QzW03hyw_bU"
// TODO: Questo per le animazioni "https://blog.logrocket.com/react-scroll-animations-framer-motion/#what-is-intersection-observer-functionality"
export default App;
