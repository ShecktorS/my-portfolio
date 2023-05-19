import styles from "./App.module.scss";

import Header from "./components/header";
import HamburgerMenu from "./components/hamburgerMenu";
import Footer from "./components/footer";
import MainSection from "./components/mainSection";
import AboutSection from "./components/sections/aboutSection";

import { useState } from "react";

import { myUserData } from "./userData";

const App: React.FC = () => {
  const isMorning: boolean =
    +new Date().toLocaleTimeString().split(":")[0] < 20 &&
    +new Date().toLocaleTimeString().split(":")[0] > 7;
  const [nightMode] = useState<boolean>(true);

  const [clickBurger, setClickBurger] = useState<boolean>(false);

  return (
    <div className={`${styles.App} ${nightMode && styles.nightMode}`}>
      <Header setClickBurger={setClickBurger} clickBurger={clickBurger} />
      <HamburgerMenu clickBurger={clickBurger} />
      <MainSection myUserData={myUserData} />
      <AboutSection />
      <Footer myUserData={myUserData} />
    </div>
  );
};

// TODO: ADD OBSERVER INTERSECTION o Framer motion e react spring
// TODO: Per lo smooth aggiungere React-scroll seguendo questo video: "https://www.youtube.com/watch?v=QzW03hyw_bU"
// TODO: Questo per le animazioni "https://blog.logrocket.com/react-scroll-animations-framer-motion/#what-is-intersection-observer-functionality"
export default App;
