import './App.css';
import React from "react";
import Portfolio from "./Pages/Portfolio";
import Left from "./Pages/Left";
import Right from "./Pages/Right";
import Skills from "./Pages/Skills";

function App() {
  return (
      <div className="App">
        <div class="w3-row-padding">
          <Left/>
          <Right/>
          <Skills/>
          <Portfolio/>
        </div>
      </div>

  );
}

export default App;
