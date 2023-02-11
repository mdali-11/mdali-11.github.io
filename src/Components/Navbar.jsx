import "./Navbar.css"
import React from "react"
import Button from "@material-ui/core/Button"
// import { useState } from "react"
// import { Typography } from "@material-ui/core"
import MobNav from "./MobNav"
import { Link } from "react-scroll"


export default function Navbar() {
    // const [navList, setNavlist] = useState(false)
    // const toggleNavList = (id) => {
    //     var element = document.getElementById(id)
    //     if (element) {
    //         element.scrollIntoView({ left:0,behavior: "smooth", block: 'center' });
    //     }
    //     setNavlist(!navList);
    // };

    const resumeOnclick = () => {
        window.open("https://drive.google.com/file/d/18QWx9vFvtc65I3yXhY3_WCdL2sCPJm52/view", "_blank")
    }
    return (
        <>
            <div>
                <div className="nav">
                    <div className="TopArea">

                        <div style={{
                            marginLeft: "2vw",
                        }}>
                            <strong className="name">Md Ali</strong>
                        </div>
                        <div className="nav_options" >
                            {/* <a href="#home" className="underLine2 hide_on_responsive">
                                <Button
                                    onClick={() => toggleNavList("#home")}
                                    style={{ color: "white", fontSize: "15px" }}
                                    variant="text" color="default">
                                    HOME
                                </Button>
                            </a> */}
                            {/* <a href="#about" className="underLine2 hide_on_responsive">
                                <Button
                                    onClick={() => toggleNavList("#about")}
                                    style={{ color: "white", fontSize: "15px" }}
                                    variant="text" color="default">
                                    ABOUT ME                                </Button>
                            </a> */}
                            {/* <a href="#projects" className="underLine2 hide_on_responsive" >
                                <Button
                                    onClick={() => toggleNavList("#projects")}
                                    style={{ color: "white", fontSize: "15px" }}
                                    variant="text" color="default">
                                    PROJECTS
                                </Button>
                            </a> */}

                            {/* <a href="#skills" className="underLine2 hide_on_responsive" >
                                <Button
                                    onClick={() => toggleNavList("#skills")}
                                    style={{ color: "white", fontSize: "15px" }}
                                    variant="text" color="default">
                                    SKILLS
                                </Button>
                            </a> */}

                            <Button
                                className="underLine2 hide_on_responsive"

                                style={{ color: "white", fontSize: "15px" }}
                                variant="text" color="default">
                                <Link style={{ color: "black", fontWeight: "bolder" }} className="linkscroll" activeClass="active" smooth spy to="home" duration={600} offset={-75}>HOME</Link>

                            </Button>

                            <Button
                                className="underLine2 hide_on_responsive"

                                style={{ color: "white", fontSize: "15px" }}
                                variant="text" color="default">
                                <Link style={{ color: "black", fontWeight: "bolder" }} className="linkscroll" activeClass="active" smooth spy to="about" duration={600} offset={-75}>ABOUT ME</Link>

                            </Button>

                            <Button
                                className="underLine2 hide_on_responsive"

                                style={{ color: "white", fontSize: "15px" }}
                                variant="text" color="default">
                                <Link style={{ color: "black", fontWeight: "bolder" }} className="linkscroll" activeClass="active" smooth spy to="skills" duration={600} offset={-100}>SKILLS</Link>

                            </Button>


                            <Button
                                className="underLine2 hide_on_responsive"

                                style={{ color: "white", fontSize: "15px" }}
                                variant="text" color="default">
                                <Link style={{ color: "black", fontWeight: "bolder" }} className="linkscroll" activeClass="active" smooth spy to="projects" duration={600} offset={-75}>PROJECTS</Link>

                            </Button>

                            <Button
                                className="underLine2 hide_on_responsive"

                                style={{ color: "white", fontSize: "15px" }}
                                variant="text" color="default">
                                <Link style={{ color: "black", fontWeight: "bolder" }} className="linkscroll" activeClass="active" smooth spy to="contact" duration={600} offset={-50}>CONTACTS</Link>

                            </Button>

                            <a href="https://drive.google.com/uc?export=download&id=18QWx9vFvtc65I3yXhY3_WCdL2sCPJm52"
                                style={{ textDecoration: "none", color: "white" }}>
                                <Button onClick={resumeOnclick}
                                    style={{ color: "white", background: "#3E36DA", fontSize: "15px", fontWeight: "bolder", borderRadius: "7px" }}
                                    variant="outlined" color="default">
                                    RESUME
                                </Button>
                            </a>

                        </div>

                    </div>
                </div>
                <div className="TopAreaMiddle">
                    <MobNav />
                </div>
            </div>
            <div className="home">
                <section id="home"></section>
                <div>

                    <div
                        // section id="#home"
                        className="Top_Area_Responsive">
                

                        <div>
                            <p style={{fontSize:"3rem"}}>Hi, I'm <span style={{fontWeight:"bold", color:"blue"}}>Md Ali</span>
                            <br />
                        <span style={{fontSize:"2rem", fontWeight:"500"}}>  Full Stack Web Developer</span>
                          </p>
                         
                                <Button
                                    onClick={resumeOnclick}
                                    variant="contained" id="btn">
                                    <a
                                        rel="noreferrer"
                                        style={{ textDecoration: "none", color: "white" }}
                                        href="https://drive.google.com/uc?export=download&id=18QWx9vFvtc65I3yXhY3_WCdL2sCPJm52"
                                    >

                                        RESUME

                                    </a>
                                </Button>
                           

                        </div>

                        <div className="divvid">
                            <img className="Vid" src="https://camo.githubusercontent.com/8d5deef06a13d0ae4d973c3947748e85eae585dcf91861de1b0f97700876c9e3/68747470733a2f2f7777772e7362722d746563686e6f6c6f676965732e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032312f30362f6d65726e2e706e67" alt="img" />
                        </div>
                    </div>

                </div>
                {/* </section> */}
            </div>
        </>
    )
}