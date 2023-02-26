import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import Photoshoots from "./components/Photoshoots";
import Services from "./components/Services";

function App() {
  return (
    <div className="font-third bg-ghostWhite">
    <Router>
      <Navbar />
      <Home />
      <Photoshoots />
      <Services />
    </Router>
    </div>
  );
}

export default App;
