import React from 'react';
import './App.css';
import Clock from "./Components/Clock";
// import "./Components/Clock.scss";

function App() {
  return (
    <div className="App">
      <Clock title="Eastern Standard Time" datediff={-6} />
      <Clock title="Central Standard Time" datediff={-7} />
      <Clock title="Pacific Standard Time" datediff={-8} />
    </div>
  );
}

export default App;
