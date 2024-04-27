import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useRef } from "react";

import "./App.css";
import Toolbar from "./components/toolbar/Toolbar";
import HomePage from "./pages/home/HomePage";
import BagelPage from "./pages/projects/bagel_gourmet_redesign/BagelPage";
import ABPage from "./pages/projects/ab_testing/ABPage";
import RemyPage from "./pages/projects/remys_playground/RemyPage";
import SpotiduoPage from "./pages/projects/spotiduo/SpotiduoPage";

/**
 * This is the highest level component!
 */
function App() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const scrollToSection = () => {
    if (sectionRef != null) {
      sectionRef.current?.scrollIntoView({behavior: "smooth"})
    }
  }
  return (
      <div className="App">
        <Toolbar scrollToSection={scrollToSection}/>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage sectionRef={sectionRef}/>} />
            <Route path="/bagelgourmet" element={<BagelPage />} />
            <Route path="/abtesting" element={<ABPage />} />
            <Route path="/remysplayground" element={<RemyPage />} />
            <Route path="/spotiduo" element={<SpotiduoPage />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
