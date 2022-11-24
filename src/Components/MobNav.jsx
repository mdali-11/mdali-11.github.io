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
                        <strong style={{ fontSize: "1.8rem" }}>Md Ali</strong>
                    </div>
                <ul className={click ? "nav-options active" : "nav-options"}>
                <li className="option" onClick={()=>{
                        toggleNavList("#home");
                        closeMobileMenu()
                    }}>
                        <a href="#about">HOME</a>
                    </li>
                    <li className="option" onClick={()=>{
                        toggleNavList("#about");
                        closeMobileMenu()
                    }}>
                        <a href="#about">ABOUT</a>
                    </li>
                    <li className="option" onClick={()=>{
                        toggleNavList("#contact");
                        closeMobileMenu()
                    }}>
                        <a href="#contact">CONTACT</a>
                    </li>
                    <li className="option" onClick={()=>{
                        toggleNavList("#projects");
                        closeMobileMenu()
                    }}>
                        <a href="#projects">PROJECTS</a>
                    </li>
                    <li className="option" onClick={()=>{
                        toggleNavList("#skills");
                        closeMobileMenu()
                    }}>
                        <a href="#skills">SKILLS</a>
                    </li>
                    <li className="option mobile-option" onClick={()=>{
                        toggleNavList("/");
                        closeMobileMenu()
                    }}>
                        <button onClick={()=> {
                                            window.open("https://drive.google.com/file/d/18QWx9vFvtc65I3yXhY3_WCdL2sCPJm52/view")
                                        }} className="sign-up">
                            RESUME
                        </button>
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

