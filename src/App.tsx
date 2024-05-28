import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.min.css';

import "./App.css";
import Toolbar from "./components/toolbar/Toolbar";
import HomePage from "./pages/home/HomePage";
import BagelPage from "./pages/projects/bagel_gourmet_redesign/BagelPage";
import ABPage from "./pages/projects/ab_testing/ABPage";
import RemyPage from "./pages/projects/remys_playground/RemyPage";
import SpotiduoPage from "./pages/projects/spotiduo/SpotiduoPage";
import SpotiduoPage2 from "./pages/projects/spotiduo2/SpotiduoPage"
import ProjectsPage from "./pages/home/ProjectsPage";

/**
 * This is the highest level component!
 */
function App() {
  // const sectionRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (isProjectsPage) => {
    if (isProjectsPage) {
      const sectionRef = document.querySelector('.projects-page-container');
      console.log(sectionRef)
      sectionRef?.scrollIntoView({behavior: "smooth"})
    }
    // window.location.href = "/";


    // setTimeout(() => {
    //   if (sectionRef != null && sectionRef.current != null) {
    //     sectionRef.current?.scrollIntoView({behavior: "smooth"})
    //   }
    // }, 2000)

    // if (sectionRef != null) {
    //   sectionRef.current?.scrollIntoView({behavior: "smooth"})
    // }
  }
  return (
      <div className="App">
        
        <Router>
        <Toolbar/>
          <Routes>
            <Route path="/" element={<HomePage isProjectsPage={false}/>} />
            {/* remove after grading */}
            <Route path="/bagelgourmet" element={<BagelPage />} />
            <Route path="/abtesting" element={<ABPage />} />
            <Route path="/remysplayground" element={<RemyPage />} />
            <Route path="/spotiduo" element={<SpotiduoPage2 />} />
            {/* remove after grading */}
            <Route path="/projects" element={<HomePage isProjectsPage={true}/>} />
            <Route path="/projects/bagelgourmet" element={<BagelPage />} />
            <Route path="/projects/abtesting" element={<ABPage />} />
            <Route path="/projects/remysplayground" element={<RemyPage />} />
            <Route path="/projects/spotiduo" element={<SpotiduoPage2 />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
