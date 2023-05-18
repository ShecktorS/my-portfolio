import styles from "./index.module.scss";

import { UserData } from "../../userData";

import { useEffect, useState } from "react";

interface Props {
  myUserData: UserData;
}

const Footer: React.FC<Props> = (props) => {
  const { myUserData } = props;

  const hours: number = new Date().getHours();
  const minutes: string =
    new Date().getMinutes().toString().length < 2
      ? "0" + new Date().getMinutes().toString()
      : new Date().getMinutes().toString();

  const [time, setTime] = useState<{ hours: number; minutes: string }>({
    hours: hours,
    minutes: minutes,
  });

  useEffect(() => {
    const timer = setInterval(
      () =>
        setTime({
          hours: hours,
          minutes: minutes,
        }),
      500
    );
    return () => clearInterval(timer);
  }, [hours, minutes]);

  return (
    <div className={styles.Footer}>
      <p>Based in {myUserData.place} </p>
      <p>
        local time: {time.hours}:{time.minutes}
      </p>
    </div>
  );
};

export default Footer;
