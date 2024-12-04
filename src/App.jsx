import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home";
import Project from "./components/project";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={  <Project image={'/assets/images/n642e0q2_1668179397871.jpg'} title={'clubhouse'} />} />
      </Routes>
    </Router>
  );
}

export default App;
