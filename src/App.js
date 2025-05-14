import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  function handleInput(e) {
    const filtered = e.target.value.replace(/[^0-9]/g, "");
    setInput(filtered);
  }

  function handleSubmit() {
    if (input === "") return;

    const original = parseInt(input, 10);
    const reversed = parseInt(input.split("").reverse().join(""), 10);
    const diff = Math.abs(original - reversed);

    setResult(diff);
  }

  return (
    <div className="App">
      <div>
        Number: <input value={input} onChange={handleInput} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>Result: {result}</div>
    </div>
  );
}
