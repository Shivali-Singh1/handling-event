import { useState } from "react";
import "./App.css";

const App = () => {
  const purple = "#8e44ad";
  const [Bg, setBg] = useState(purple);
  const [name, setName] = useState("click Me");

  const BgChange = () => {
    let newBg = "#34495e";
    setBg(newBg);
    setName("ouch!!");
  };

  return (
    <>
      <div style={{ backgroundColor: "Bg" }}>
        <button onClick={BgChange}>{name} </button>
      </div>
    </>
  );
};

export default App;
