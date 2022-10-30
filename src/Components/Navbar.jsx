import "./Navbar.css"
import React from "react"
import Button from "@material-ui/core/Button"
import { useState } from "react"
// import { Typography } from "@material-ui/core"
import MobNav from "./MobNav"

export default function Navbar() {
    const [navList, setNavlist] = useState(false)
    const toggleNavList = (id) => {
        var element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: 'center' });
        }
        setNavlist(!navList);
    };


    return (
        <>
            <div>
                <div className="nav">
                    <div className="TopArea">

                        <div style={{
                            marginLeft: "2vw",
                        }}>
                            <strong style={{ fontSize: "1.8rem" }}>Portfolio</strong>
                        </div>
                        <div className="nav_options" >
                            <a href="#home" className="underLine2 hide_on_responsive">
                                <Button
                                    onClick={() => toggleNavList("#home")}
                                    style={{ color: "white", fontSize: "16px" }}
                                    variant="text" color="default">
                                    HOME
                                </Button>
                            </a>
                            <a href="#about" className="underLine2 hide_on_responsive">
                                <Button
                                    onClick={() => toggleNavList("#about")}
                                    style={{ color: "white", fontSize: "16px" }}
                                    variant="text" color="default">
                                    ABOUT
                                </Button>
                            </a>
                            <a href="#contact" className="underLine2 hide_on_responsive" >
                                <Button
                                    onClick={() => toggleNavList("#contact")}
                                    style={{ color: "white", fontSize: "16px" }}
                                    variant="text" color="default">
                                    CONTACT
                                </Button>
                            </a>
                            <a href="#projects" className="underLine2 hide_on_responsive" >
                                <Button
                                    onClick={() => toggleNavList("#projects")}
                                    style={{ color: "white", fontSize: "16px" }}
                                    variant="text" color="default">
                                    PROJECTS
                                </Button>
                            </a>
                            <a href="#skills" className="underLine2 hide_on_responsive" >
                                <Button
                                    onClick={() => toggleNavList("#skills")}
                                    style={{ color: "white", fontSize: "16px" }}
                                    variant="text" color="default">
                                    SKILLS
                                </Button>
                            </a>
                            <a href="/" className="underLine2">
                                <Button onClick={()=> {
                                            window.open("https://drive.google.com/file/d/1XfEAY-Cf94WcIvC9955EMD1NgFCh0AwA/view?usp=share_link")
                                        }}
                                    style={{ color: "black", background: "#F2F0F4", fontSize: "15px", fontWeight: "bold" }}
                                    variant="outlined" color="secondary">
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
                <section id="#home">
                    <div>
                  
                            <div
                                // section id="#home"
                                className="Top_Area_Responsive">
                                <div
                                    className="Top_Area_Text_Left_Responsive"
                                >
                                    {/* <div>Featured Projects</div> */}
                                    <div className="cap_name">
                                        <span className="underLine"
                                            style={{
                                                fontFamily: "'Ubuntu',sans-serif",
                                                fontWeight: "bolder"
                                            }}>
                                            Md Ali
                                        </span>{" "}
                                        <br />{" "}
                                        <span
                                            className="underLine1"
                                            style={{
                                                fontFamily: "'Roboto Mono', monospace",
                                                fontWeight: "100",
                                            }}
                                        >
                                            Full Stack Web Developer
                                        </span>
                                    </div>
                                    <div
                                      className="resume_btn">
                                        <button onClick={()=> {
                                            window.open("https://drive.google.com/file/d/1XfEAY-Cf94WcIvC9955EMD1NgFCh0AwA/view?usp=share_link")
                                        }} variant="contained" className="#btn">RESUME</button>
                                    </div>
                                </div>

                                <div className="divvid">
                                    <img className="Vid"  src="https://camo.githubusercontent.com/8d5deef06a13d0ae4d973c3947748e85eae585dcf91861de1b0f97700876c9e3/68747470733a2f2f7777772e7362722d746563686e6f6c6f676965732e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032312f30362f6d65726e2e706e67" alt="img" />
                                </div>
                            </div>
                     
                    </div>
                </section>
            </div>
        </>
    )
}