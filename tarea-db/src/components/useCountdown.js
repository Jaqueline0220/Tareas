import { useEffect, useRef, useState } from 'react';

export const useCountdown = (seconds) => {
  const [countdown, setCountdown] = useState(seconds);

  const [isAlert, setIsAlert] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const intervalRef = useRef();
  const decreaseNum = () => {
    setCountdown((prev) => {
      if (prev === 5) setIsAlert(true);

      if (prev === 0) {
        setIsDisabled(true);
        setIsAlert(false);
        clearInterval(intervalRef.current);
        return prev;
      }
      return prev - 1;
    });
  };

  useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return { countdown, isAlert, isDisabled };
};
