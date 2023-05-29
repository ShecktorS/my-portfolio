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
        <p>My Github</p>
        <p>My LinkedIn</p>
      </div>
    </div>
  );
};

export default ContactSection;
