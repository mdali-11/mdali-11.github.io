import "./MobNav.css"
import React, { useState } from "react";
import {Link} from "react-scroll"

import {
     CloseIcon,HamburgerIcon

} from "@chakra-ui/icons";


export default function MobNav() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(!click);
    // const [navList, setNavlist] = useState(false)
    
    // const toggleNavList = (id) => {

    //     var element=document.getElementById(id)
    //       if (element) {
    //         element.scrollIntoView({behavior: "smooth",block: 'center'});
    //       }
    //       setNavlist(!navList);
    //     };

 
    return (
        <div className="header">
            <div className="logo-nav">
                <div style={{
                        marginLeft: "2vw",
                    }}>
                        <strong className="name" style={{ fontSize: "1.5rem" }}>Md Ali</strong>
                    </div>
                <ul className={click ? "nav-options active" : "nav-options"}>
                    <div className="menu_items">
                 <li className="option" >
                        {/* <a href="#about">HOME</a> */}
                        <Link onClick={closeMobileMenu} className="linkscroll"  activeClass="active" smooth spy to="home" duration={600} offset={-100}>Home</Link>

                    </li>
                    <li className="option" >
                        {/* <a href="#about">ABOUT ME</a> */}
                        <Link onClick={closeMobileMenu} className="linkscroll"  activeClass="active" smooth spy to="about" duration={600} offset={-100}>About Me</Link>

                    </li>
                    <li className="option" >
                        {/* <a href="#skills">SKILLS</a> */}
                        <Link onClick={closeMobileMenu} className="linkscroll"  activeClass="active" smooth spy to="skills" duration={600} offset={-100}>Skills</Link>

                    </li>
                    <li className="option" >
                        {/* <a href="#projects">PROJECTS</a> */}
                        <Link onClick={closeMobileMenu} className="linkscroll"  activeClass="active" smooth spy to="projects" duration={600} offset={-100}>Projects</Link>

                    </li>

                    <li className="option" >
                        {/* <a href="#contact">CONTACT</a> */}
                        <Link onClick={closeMobileMenu} className="linkscroll"  activeClass="active" smooth spy to="contact" duration={600} offset={-100}>Contact</Link>

                    </li>
                    <li className="option mobile-option" >
                        <button onClick={()=> {
                                            window.open("https://drive.google.com/file/d/18QWx9vFvtc65I3yXhY3_WCdL2sCPJm52/view");
                                            window.location.href="https://drive.google.com/uc?export=download&id=18QWx9vFvtc65I3yXhY3_WCdL2sCPJm52"
                                        }} className="sign-up">
                            RESUME
                        </button>
                    </li>
                    </div>
                </ul>
            </div>
            {/* <ul className="signin-up">
                <li className="sign-in" onClick={closeMobileMenu}>
                    // <a href="/">SIGN-IN</a>
                </li>
                <li onClick={closeMobileMenu}>
                    // <a href="/" className="signup-btn">
                        SIGN-UP
                    </a>
                </li>
            </ul> */}
            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <CloseIcon  w={25} h={25} className="menu-icon" />
                ) : (
                    <HamburgerIcon  w={40} h={40} className="menu-icon" />
                )}
            </div>
        </div>
    )

}

