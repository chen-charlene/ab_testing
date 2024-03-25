import React from "react";
import "./Toolbar.css"

//Main component of the tool bar
function Toolbar({scrollToSection}) {

    //returns the component
    return (
    <header className="header">
        <a href="/" className="logo">Charlene Chen</a>

            <nav className="navbar">
                <a href="/projects" onClick={(e) => {e.preventDefault(); scrollToSection()}}><b>projects</b></a>
                <a href="/about"><b>about</b></a>
                <a href="/fun"><b>fun</b></a>
                <a href="/resume"><b>resume</b></a>
            </nav>
    </header>
    )
}

export default Toolbar;
