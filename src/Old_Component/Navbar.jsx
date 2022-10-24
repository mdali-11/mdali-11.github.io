// import { Box, Flex, Button } from "@chakra-ui/react"
// // import { Link } from "react-router-dom"

// export default function Navbar() {

//     return <div>
//         <Flex w="full" align="center" bg="black" h="65px">
//             <Box>
//                 <Button bg="transparent" color="white">Home</Button>
//                 <Button bg="transparent" color="white">About</Button>
//                 <Button bg="transparent" color="white">Contact</Button>
//             </Box>
//         </Flex>
//     </div>

// }
import "./Navbar.css"
// import Profile from "./Profile"
import React from "react"
import Button from "@material-ui/core/Button"
import { Typography } from "@material-ui/core"

import { About } from "./About";
import { TechnicalSkills } from "./TechnicalSkills";
import { Contact } from "./Contacts";
import Project from "./Project";
import Colorsss from "../TestComponents.jsx/Color";

export default function Navbar() {



  return (
    <>
      <div className="nav">
        <div className="TopArea">
          <div style={{width:"100vw",height:"75px",display:"flex",margin:"auto",alignItems:"center",justifyContent:"space-between",background:"black",color:"white"}}        
          >
            <div style={{
              marginLeft: "2vw",
            }}>
              <strong style={{ fontSize: "1.8rem" }}>Portfolio</strong>
            </div>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems:"center",
          
            }}>
              <a href="#home_section" className="underLine2 hide_on_responsive">
                <Button 
                style={{color:"white"}}
                  variant="text" color="default">
                  HOME
                </Button>
              </a>
              <a href="#about_section" className="underLine2 hide_on_responsive">
                <Button 
                style={{color:"white"}}
                  variant="text" color="default">
                  ABOUT
                </Button>
              </a>
              <a href="/" className="underLine2 hide_on_responsive" >
                <Button
                style={{color:"white"}}
                  variant="text" color="default">
                  CONTACT
                </Button>
              </a>
              <a href="/" className="underLine2 hide_on_responsive" >
                <Button
                style={{color:"white"}}
                  variant="text" color="default">
                  PROJECTS
                </Button>
              </a>
              <a href="/" className="underLine2 hide_on_responsive" >
                <Button
                style={{color:"white"}}
                  variant="text" color="default">
                  SKILLS
                </Button>
              </a>
              <a href="/" className="underLine2">
                <Button 
                style={{color:"black",background:"white"}}
                 variant="outlined" color="secondary">
                  RESUME
                </Button>
              </a>

            </div>
          </div>
        </div>
      </div>
      <div className="logodiv">
        <div
          section id="home_section"
          className="Top_Area_Responsive">
          <div
            className="Top_Area_Text_Left_Responsive"
          >
            {/* <div>Featured Projects</div> */}
            <div style={{
              marginTop: "5vh",
              fontSize: "50px",
              width: "35vh",
              cursor: "pointer"
            }}>
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
              style={{
                marginTop: "10vh"
              }}>
              <Button variant="contained" color="secondary">More Projects</Button>
            </div>
          </div>

          <div className="divvid">
            <img className="Vid" style={{ width: "90%" }} src="https://camo.githubusercontent.com/8d5deef06a13d0ae4d973c3947748e85eae585dcf91861de1b0f97700876c9e3/68747470733a2f2f7777772e7362722d746563686e6f6c6f676965732e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032312f30362f6d65726e2e706e67" alt="img" />
          </div>
        </div>
      </div>


      <div
        section id="about_section"
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "85%", margin: "auto" }}>
        <div>
          <img src="https://media-exp1.licdn.com/dms/image/D4D03AQHMpBpjMEHkEw/profile-displayphoto-shrink_400_400/0/1666422657425?e=1671667200&v=beta&t=mUeWebSvlYy9zJGCT4WHvD6gal3Ht2V6rG-Iv16-X-I" alt="pp" />
        </div>
        <Typography style={{
          width: "45vw",
          fontSize: "30px",
          margin: "auto",
          textAlign: "center",
          fontWeight: "lighter"
        }}
          variant="subtitle1"
          color="initial">
          <About />
          {/* Aspiring full stack web developer, having problem-solving ability and proficiency in MERN Stack. A quick learner and always curious to learn new things */}
          <br />
          {/* <Button variant="outlined" color="secondary">Contact Us</Button> */}
        </Typography>
      </div>

      <div>
        <Project />
      </div>
    
      
      <div className="skills">
        <TechnicalSkills />
      </div>
      <div className="contact">
        <Contact />
      </div>
      <Colorsss />

      




    </>
  )
}







