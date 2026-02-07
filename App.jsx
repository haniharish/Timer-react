import { useState, useEffect } from "react";
import "./Timer.css";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);


    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Timer: {seconds} seconds</h2>
    </div>
  );
}
