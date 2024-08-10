import React from "react";
import './App.css';
import PetList from "./components/PetList/PetList";
import PetDetails from "./components/petDetails/petDetails";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PetList/>} />
        <Route path="/petDetails" element={<PetDetails/>} />
      
      </Routes>
      
    </Router>
    
  );
}

export default App;
