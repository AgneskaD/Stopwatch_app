import { Button } from "./components/Button/Button.js";
import { Container } from "./components/Container/Container.js";
import { Stopwatch } from "./components/Stopwatch/Stopwatch.js";

function App() {
return (
  <div>
    <Container>
        <Stopwatch></Stopwatch>
        <Button>start</Button>
        <Button>stop</Button>
        <Button>reset</Button>
    </Container>
  </div>
);
}

export default App;
