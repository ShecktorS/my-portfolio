import styles from "./App.module.scss";
import Header from "./components/header";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <p>pippo</p>
    </div>
  );
}

export default App;
