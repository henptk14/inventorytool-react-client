import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MenuOption from "./components/MenuOption";
import AddEntryPage from "./components/layouts/AddEntryPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <MenuOption />
        <Route path="/addNewEntry" exact component={AddEntryPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
