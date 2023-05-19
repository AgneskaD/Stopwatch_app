import { Button } from "./components/Button/Button.js";
import { Container } from "./components/Container/Container.js";
import { Timer } from "./components/Timer/Timer.js";
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    running
      ? (timer = setInterval(() => {
          setTime((prevValue) => prevValue + 10);
        }, 10))
      : clearInterval(timer);

    return () => clearInterval(timer);
  }, [running]);

return (
  <div>
    <Container>
    <div className="buttons">
          <Button onClick={() => setRunning(true)}>start</Button>
          <Button onClick={() => setRunning(false)}>stop</Button>
          <Button onClick={() => setTime(0)}>reset</Button>
    </div>
    </Container>
  </div>
);
}

export default App;
