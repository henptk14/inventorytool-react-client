import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MenuOption from "./components/MenuOption";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <MenuOption />
      </BrowserRouter>
    </div>
  );
}

export default App;
