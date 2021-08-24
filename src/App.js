import { Face } from "./Face";
import { range } from "d3";
import "./App.css";

const width = 166;
const height = 166;

const array = range(40);

const App = () =>
  array.map(() => (
    <Face
      width={width}
      height={height}
      centerX={width / 2}
      centerY={height / 2}
      strokeWidth={6 + Math.random() * 3}
      eyeOffsetX={20 + Math.random() * 9}
      eyeOffsetY={20 + Math.random() * 15}
      eyeRadius={5 + Math.random() * 10}
      mouthWidth={7 + Math.random() * 9}
      mouthRadius={30 + Math.random() * 10}
    />
  ));

export default App;
