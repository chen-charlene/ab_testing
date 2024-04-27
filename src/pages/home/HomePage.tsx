import React, { useEffect, useState } from 'react'
// import {Link} from 'react-scroll';
import "./HomePage.css"
import ProjectsPage from './ProjectsPage';
// import me1Img from "./../../assets/images/HomePage/me1.png";

export default function HomePage({sectionRef}) {
  const me1Img = require('./../../assets/images/HomePage/me1.png');
  const me2Img = require('./../../assets/images/HomePage/me2.png');
  const humanHandImg = require('./../../assets/images/HomePage/human-hand.png');
  const robotHandImg = require('./../../assets/images/HomePage/robot-hand.png');
  const chubImg = require('./../../assets/images/HomePage/me-chubs.png');
  const [isHover, setIsHover] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return (
    <div className="center">
      <div className="w-container">
      <div className="home-page-container">
        <div className="home-body-container" onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>
          <div className="pfp-image-container">
            {
              isHover? (
                <img src={me2Img} ></img>
              ) : (
                <img src={me1Img} ></img>
              )
            }
          </div>
          <div className="home-text-container">
            <div className="home-heading">Hi there - i'm Charlene!</div>
            <div className="home-subheading">I am a Software Engineer & Product Designer studying Computer Science at Brown University. 
            Passionate about solving problems through human-centered design and crafting fun experiences.</div>
            <div className="home-subheading">Make yourself comfortable & enjoy a PB & banana toast while you’re here :{`)`}</div>
            <div className="contacts-container">
              <a className="fa fa-envelope social-icon" href="mailto:hsuan-ling_chen@brown.edu" target="_blank" aria-hidden="true"></a>
              <a className="fa fab fa-github social-icon" href="https://github.com/chen-charlene"></a>
              <a className="fa fa-linkedin social-icon" href="https://linkedin.com/in/charlene-00-chen"></a>
            </div>
          </div>
        </div>


        <div className="homepage-middle-container">
            <div className="human-hand-container" style={{transform: `translateY(-${scrollPosition*1.6}px)`}}>
              <img src={humanHandImg}></img>
            </div>
            <div className="robot-hand-container" style={{transform: `translateX(-${scrollPosition*0.7}px)`}}>
              <img src={robotHandImg}></img>
            </div>
            <img src={chubImg} style={{width: "200px", height: "auto"}}></img>
            <div className="middle-text-container">
            <div className="home-heading" style={{textAlign: "right", lineHeight: 1, maxWidth: "700px", fontWeight: 500}}>I am driven by a love for memorable experiences that happen at the intersection of humans, technology, & design.</div>
            <div className="home-subheading" style={{maxWidth: "700px"}}>... and of course my pet bunny Chubs</div>
          </div>
        </div>
      </div>

      </div>
      
      <div className="projects-page-container wider-w-container" ref={sectionRef}>
        <ProjectsPage/>
      </div>

      <div className="home-footer wider-w-container">
        <h1 style={{fontSize:"18px"}}>Coded from scratch with 
          <span style={{fontFamily:"Trebuchet MS", fontWeight: 200}}> {`<3`} </span>
          by Charlene
        </h1>
        <div className="contacts-container">
            <a className="fa fa-envelope social-icon" href="mailto:hsuan-ling_chen@brown.edu" target="_blank" aria-hidden="true"></a>
            <a className="fa fab fa-github social-icon" href="https://github.com/chen-charlene"></a>
            <a className="fa fa-linkedin social-icon" href="https://linkedin.com/in/charlene-00-chen"></a>
        </div>
      </div>

    </div>

  )
}
