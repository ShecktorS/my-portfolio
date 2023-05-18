import styles from "./App.module.scss";

import Header from "./components/header";
import MainSection from "./components/mainSection";

import { myUserData } from "./userData";

const App: React.FC = () => {
  console.log(myUserData);
  // React.FC is an important control who helps us to identify this as a react component
  return (
    <div className={styles.App}>
      <Header />
      <MainSection myUserData={myUserData} />

      <p>Welcome to my Portfolio!</p>
    </div>
  );
};

// TODO: ADD OBSERVER INTERSECTION o Framer motion e react spring
// TODO: Per lo smooth aggiungere React-scroll seguendo questo video: "https://www.youtube.com/watch?v=QzW03hyw_bU"
// TODO: Questo per le animazioni "https://blog.logrocket.com/react-scroll-animations-framer-motion/#what-is-intersection-observer-functionality"
export default App;
