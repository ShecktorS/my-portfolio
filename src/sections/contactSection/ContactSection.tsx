import styles from "./index.module.scss";

const ContactSection = () => {
  return (
    <div className={styles.ContactSection}>
      <h2>Contact</h2>
      <div>
        <p>ettoresanfilippo@gmail.com</p>
        <p>+39 3896993096</p>
        <p>ettoresanfilippo.it</p>
      </div>
      <div>
        <a href="https://github.com/ShecktorS" target="_blank">
          <p>My Github</p>
        </a>
        <a
          href="https://www.linkedin.com/in/ettore-sanfilippo/"
          target="_blank"
        >
          <p>My LinkedIn</p>
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
