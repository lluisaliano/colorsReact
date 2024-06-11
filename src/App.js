import './App.css';
import ColorSquare from "./ColorSquare";
import InputColor from "./InputColor";
import {useState} from "react";

function App() {

  const [color, setColor] = useState('');

  return (
    <div className="App">
      <ColorSquare currentColor={color}/>
      <InputColor currentColor={color} setCurrentColor={setColor}/>
    </div>
  );
}

export default App;
