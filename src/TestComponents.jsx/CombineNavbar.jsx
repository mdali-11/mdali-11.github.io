import { useState } from "react";
// import Brightness2Icon from "@material-ui/icons/Brightness2";
// import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import "./Navbar.css"
export const Navbar=()=>{
   
     const [navList ,setNavlist]=useState(false)
    const toggleNavlist = (id)=>{
        let el=document.getElementById(id)
        if(el){
            el.scrollIntoView();
        }
        setNavlist(!navList)
    }

    return (
        <>
            <nav className="center nav">
           <ul
           style={{display:navList ? "flex" : null}}
           className="nav__list"
           >
           <li className="nav__list-item">
            <a href="#home"
            onClick={()=> toggleNavlist("home")}
       className="link link--nav"
            >
                Home
            </a>
           </li>

           <li className="nav__list-item">
            <a 
            href="#about"
            onClick={()=> toggleNavlist("about")}
       className="link link--nav"
            >
                About
            </a>
           </li>

           <li className="nav__list-item">
            <a href="#skills"
            onClick={()=> toggleNavlist("skills")}
       className="link link--nav"
            >
                Skills
            </a>
           </li>

           <li className="nav__list-item">
            <a href="#projects"
            onClick={()=> toggleNavlist("projects")}
       className="link link--nav"
            >
                Projects
            </a>
           </li>

           <li className="nav__list-item">
            <a href="#contact"
            onClick={()=> toggleNavlist("contact")}
       className="link link--nav"
            >
                Contact
            </a>
           </li>

           <li className="nav__list-item">
            <a href="#about"
       className="link link--nav"
       target="_blank"
       rel="noreferrer"

            >
                Resume
            </a>
           </li>
      
           </ul>
           <button
           type="button"
           onClick={toggleNavlist}
           className="btn btn--icon nav__hamburger"
           aria-label="toggle navigation">
            {navList ? <CloseIcon /> : <MenuIcon />}
           </button>
            </nav>
        </>
    )

}