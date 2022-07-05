import './App.css';
import Pin from "./components/Pin";
import react, { useState } from "react";

function App() {
  const [otp, setOtp] = useState("");
  return (
    <div className="App">
      <Pin length={4} setOtp={setOtp} />
      <div><h1>{otp}</h1></div>
    </div>
  );
}

export default App;
