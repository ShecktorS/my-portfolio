import styles from "./index.module.scss";

import { UserData } from "../../userData";

import { useEffect, useState } from "react";

interface Props {
  myUserData: UserData;
}

const Footer: React.FC<Props> = (props) => {
  const { myUserData } = props;

  const [timeClick, setTimeClick] = useState<boolean>(false);
  const [placeClicks, setPlaceClicks] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);

  const [time, setTime] = useState<{
    hours: number;
    minutes: string;
    seconds: string;
  }>(() => {
    const now = new Date();
    return {
      hours: now.getHours(),
      minutes: now.getMinutes().toString().padStart(2, "0"),
      seconds: now.getSeconds().toString().padStart(2, "0"),
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime({
        hours: now.getHours(),
        minutes: now.getMinutes().toString().padStart(2, "0"),
        seconds: now.getSeconds().toString().padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePlaceClick = () => {
    const newCount = placeClicks + 1;
    setPlaceClicks(newCount);
    if (newCount === 10) {
      setShowModal(true);
    }
  };

  return (
    <>
      <div className={styles.Footer}>
        <p className={styles.place} onClick={handlePlaceClick}>
          Based in {myUserData.place}{" "}
        </p>
        <p onClick={() => setTimeClick((prev) => !prev)}>
          local time: {time.hours}:{time.minutes}
          <span>{timeClick && ":" + time.seconds}</span>
        </p>
      </div>
      {showModal && (
        <div className={styles.modal} onClick={() => setShowModal(false)}>
          <div className={styles.modalContent}>
            <p>Lo sapevo che sei un Palermitano DOC 😏</p>
            <button onClick={() => setShowModal(false)}>OK</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
