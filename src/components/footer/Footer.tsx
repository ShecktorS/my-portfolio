import styles from "./index.module.scss";

import { UserData } from "../../userData";

import { useEffect, useState } from "react";

interface Props {
  myUserData: UserData;
}

const Footer: React.FC<Props> = (props) => {
  const { myUserData } = props;

  const [timeClick, setTimeClick] = useState<boolean>(false);

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

  return (
    <div className={styles.Footer}>
      <p>Based in {myUserData.place} </p>
      <p onClick={() => setTimeClick((prev) => !prev)}>
        local time: {time.hours}:{time.minutes}
        <span>{timeClick && ":" + time.seconds}</span>
      </p>
    </div>
  );
};

export default Footer;
