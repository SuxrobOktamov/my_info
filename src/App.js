import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./page";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
