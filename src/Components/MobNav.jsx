import "./MobNav.css"
import React, { useState } from "react";

import {
     CloseIcon,HamburgerIcon

} from "@chakra-ui/icons";


export default function MobNav() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [navList, setNavlist] = useState(false)
    
    const toggleNavList = (id) => {

        var element=document.getElementById(id)
          if (element) {
            element.scrollIntoView({behavior: "smooth",block: 'center'});
          }
          setNavlist(!navList);
        };
    return (
        <div className="header">
            <div className="logo-nav">
                {/* <div className="logo-container">
                    <a href="/">
                        <Logo className="logo" />
                     
                    </a>
                </div> */}
                <div style={{
                        marginLeft: "2vw",
                    }}>
                        <strong style={{ fontSize: "1.8rem" }}>Portfolio</strong>
                    </div>
                <ul className={click ? "nav-options active" : "nav-options"}>
                    <li className="option" onClick={()=>{
                        toggleNavList("#about");
                        closeMobileMenu()
                    }}>
                        <a href="#about">ABOUT</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="#contact">CONTACT</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="#projects">PROJECTS</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="#skills">SKILLS</a>
                    </li>
                    <li className="option mobile-option" onClick={closeMobileMenu}>
                        <a href="/" className="sign-up">
                            RESUME
                        </a>
                    </li>
                </ul>
            </div>
            <ul className="signin-up">
                <li className="sign-in" onClick={closeMobileMenu}>
                    <a href="/">SIGN-IN</a>
                </li>
                <li onClick={closeMobileMenu}>
                    <a href="/" className="signup-btn">
                        SIGN-UP
                    </a>
                </li>
            </ul>
            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <CloseIcon  w={30} h={30} className="menu-icon" />
                ) : (
                    <HamburgerIcon  w={50} h={50} className="menu-icon" />
                )}
            </div>
        </div>
    )

}

