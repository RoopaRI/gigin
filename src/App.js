import React from "react";
import './App.css';
import PetList from "./components/PetList/PetList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PetList/>} />
        <Route path="/petDetails" element={<petDetails />} />
      
      </Routes>
      
    </Router>
    
  );
}

export default App;
