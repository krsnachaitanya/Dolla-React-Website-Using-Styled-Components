import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/home";

function App() {
  return (
    <Router>
      <HomePage />
    </Router>
  );
}

export default App;
