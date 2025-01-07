import React from "react";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Academics from "./components/Academics";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div id="home">
        <Home />
      </div>
      <div id="about-me">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div> 
      <div id="academics">
        <Academics />
      </div> 
      
    </div>
  );
}

export default App;
