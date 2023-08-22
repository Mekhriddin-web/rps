import { Dispatch, useEffect } from 'preact/hooks';

interface IProps {
  seconds: number;
  setSeconds: Dispatch<number>;
}

const Timer = ({ seconds, setSeconds }: IProps) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

  const formatTime = (time: number): string => {
    const seconds = time % 60;
    return `${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <p
        className={`text-[calc(128/1512*100vw)] leading-[calc(132/1512*100vw)] text-center ${
          seconds <= 3 ? 'text-red' : ''
        }`}
      >
        {formatTime(seconds)}
      </p>
    </div>
  );
};

export default Timer;
