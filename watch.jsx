import { useState } from "react";

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  let timer;

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      timer = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
  };

  const stop = () => {
    setIsRunning(false);
    clearInterval(timer);
  };

  const reset = () => {
    setIsRunning(false);
    setSeconds(0);
    clearInterval(timer);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Stopwatch</h2>
      <h1>{seconds}s</h1>

      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
