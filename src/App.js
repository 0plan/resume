import './App.css';
import React from "react";
import Portfolio from "./Pages/Portfolio";
import Left from "./Pages/Left";
import Right from "./Pages/Right";
import Skills from "./Pages/Skills";
import Footer from "./Pages/Footer";

function App() {
  return (
      <div className="App">
        <div className="w3-content w3-margin-top">
          <div className="w3-row-padding">
            <Left/>
            <Right/>
          </div>
        </div>
        <Skills/>
        <Portfolio/>
        <Footer/>
      </div>

  );
}

export default App;
