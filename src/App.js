import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AddEntryPage from "./components/layouts/AddEntryPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header>
          <Route path="/AddNewEntry" exact component={AddEntryPage} />
        </Header>
      </BrowserRouter>
    </div>
  );
}

export default App;
