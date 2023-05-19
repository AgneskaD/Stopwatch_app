import { Button } from "./components/Button/Button.js";
import { Container } from "./components/Container/Container.js";
import { Timer } from "./components/Timer/Timer.js";
import { useEffect, useState } from "react";
function App() {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState();
  const handleStart = () => {
    if (!timer) {
      setTimer(
        setInterval(() => {
          setTime((prevValue) => prevValue + 1);
        }, 1)
      );
    }
  };
  const handleStop = () => {
    setTimer(clearInterval(timer));
  };
  const handleReset = () => {
    setTime(0);
  };
  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <Container>
        <Timer time={time}></Timer>
        <div className="buttons">
          <Button onClick={() => handleStart()}>start</Button>
          <Button onClick={() => handleStop()}>stop</Button>
          <Button onClick={() => handleReset()}>reset</Button>
          <Button onClick={handleStart}>start</Button>
          <Button onClick={handleStop}>stop</Button>
          <Button onClick={handleReset}>reset</Button>
        </div>
      </Container>
    </div>
  );
}
export default App;
