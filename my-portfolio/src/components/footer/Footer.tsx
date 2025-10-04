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

  const hours: number = new Date().getHours();
  const minutes: string =
    new Date().getMinutes().toString().length < 2
      ? "0" + new Date().getMinutes().toString()
      : new Date().getMinutes().toString();
  const seconds: string =
    new Date().getSeconds().toString().length < 2
      ? "0" + new Date().getSeconds().toString()
      : new Date().getSeconds().toString();

  const [time, setTime] = useState<{
    hours: number;
    minutes: string;
    seconds: string;
  }>({
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  });

  useEffect(() => {
    const timer = setInterval(
      () =>
        setTime({
          hours: hours,
          minutes: minutes,
          seconds: seconds,
        }),
      500
    );
    return () => clearInterval(timer);
  }, [hours, minutes, seconds]);

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
