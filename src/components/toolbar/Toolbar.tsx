import React from "react";
import { Link } from "react-router-dom";
import "./Toolbar.css"

//Main component of the tool bar
function Toolbar() {

    //returns the component
    return (
    <header className="header">
        <a href="/" className="logo">Charlene Chen</a>

            <nav className="navbar">
                {/* <a href="/projects" onClick={(e) => {e.preventDefault(); scrollToSection()}}><b>projects</b></a> */}
                {/* <a href="/projects"><b>projects</b></a> */}
                <Link to="/projects"><b>projects</b></Link>
                {/* <a href="/about"><b>about</b></a>
                <a href="/fun"><b>fun</b></a>
                <a href="/resume"><b>resume</b></a> */}
            </nav>
    </header>
    )
}

export default Toolbar;
