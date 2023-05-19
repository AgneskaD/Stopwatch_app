import { Button } from "./components/Button/Button.js";
import { Container } from "./components/Container/Container.js";

function App() {
return (
  <div>
    <Container>
        <Button>start</Button>
        <Button>stop</Button>
        <Button>reset</Button>
    </Container>
  </div>
);
}

export default App;
