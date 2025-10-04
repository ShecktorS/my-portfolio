import styles from "./index.module.scss";

const Loader: React.FC = () => {
  return (
    <div className={styles.Loader}>
      <div className={styles.box}></div>
      <div className={styles.box}></div>
      <div className={styles.box}></div>
      <div className={styles.box}></div>
    </div>
  );
};

export default Loader;
