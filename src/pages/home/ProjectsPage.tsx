import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import "./ProjectsPage.css"

export default function ProjectsPage() {
  const bagelImg = require("./../../assets/images/ProjectsPage/bagel-thumbnail.png")
  const abImg = require("./../../assets/images/ProjectsPage/ab-thumbnail.png")
  const remyImg = require("./../../assets/images/ProjectsPage/remy-thumbnail.png")
  const spotiImg = require("./../../assets/images/ProjectsPage/spotiduo-thumbnail.png")
  const navigate = useNavigate();
  const sectionRef = useRef(null)

  const navToPage = (path: string) => {
    navigate(path)
    window.scrollTo(0, 0);
  }

  return (
    <div className="projects-page-container wider-w-container">
      {/* <div className="project-page-title-container">
        projects
      </div> */}
      <div className="project-container" onClick={() => navToPage("remysplayground")}>
        <div className="project-image-container" style={{backgroundColor: "#E76950"}}>
          <img src={remyImg}></img>
        </div>
        <div className="project-text-container">
          <div className="project-heading">Remy's Playground</div>
          <div className='project-body'>Recipe aggregator for emerging chefs</div>
        </div>
      </div>

      <div className="project-container" onClick={() => navToPage("bagelgourmet")}>
        <div className="project-image-container" style={{backgroundColor: "#E5EAE9"}}>
          <img src={bagelImg}></img>
        </div>
        <div className="project-text-container">
          <div className="project-heading">Bagel Gourmet Responsive Redesign</div>
          <div className='project-body'>Branding and redesigning UI/UX</div>
        </div>
      </div>

      <div className="project-container" onClick={() => navToPage("spotiduo")}>
        <div className="project-image-container" style={{backgroundColor: "#5975AA"}}>
          <img src={spotiImg}></img>
        </div>
        <div className="project-text-container">
          <div className="project-heading">Spotiduo Language Learning</div>
          <div className='project-body'>Helping users learn new languages through songs</div>
        </div>
      </div>

      <div className="project-container" onClick={() => navToPage("abtesting")}>
        <div className="project-image-container" style={{backgroundColor: "#EBD682"}}>
          <img src={abImg}></img>
        </div>
        <div className="project-text-container">
          <div className="project-heading">MEDx website A/B Testing</div>
          <div className='project-body'>Conducting analytics on MEDx's appointment site</div>
        </div>
      </div>
    </div>
  )
}
