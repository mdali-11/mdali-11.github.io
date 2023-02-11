import { Typography, Button } from "@material-ui/core"
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./About.css"
import {Type} from "./Type"
export default function About() {

    const resumeOnclick=()=>{
        window.open("https://drive.google.com/file/d/18QWx9vFvtc65I3yXhY3_WCdL2sCPJm52/view","_blank")
     }

    return   <div className="about_div">
            <section id="about">
        </section>
     <div>
            <h1 className="abt_head">About Me</h1>
        </div>
            <div className="about_cont">
                <div>
                    <img src="https://avatars.githubusercontent.com/u/107501605?v=4" alt="pp" />
                </div>
                <div className="typo_div">
                   
                        <div className="abt_name">
                            <h1 className="about_details">
                                Hello, I am <span className="about_name">Md Ali</span>
                            </h1>
                            <h1>
                            <span className="typo"><Type /></span>
                            </h1>

                          
                        </div>
                        <div style={{backgroundColor:"#fff", color:"black",padding:"15px", fontWeight:"bolder", borderRadius:"35px", textAlign:"left"}} className="abt_desc">
                        <Typography id="box" style={{fontWeight:"light"}} className="desc_box"
                            variant="subtitle1"
                            color="initial">
                            I am from Kolkata, West Bengal.
                            Aspiring full stack web developer, having problem-solving ability and proficiency in MERN Stack. A quick learner and always curious to learn new things.
                            I have completed my graduation in Bcom (Account. Honours) from Umes Chandra College, Calcutta University. I have also done a digital marketing course from NIHT. Then I completed my full stack web development bootcamp from Masai School.
                            <br />

                        </Typography>
                                  
                        </div>

                    <div className="abt_icons">
                        <div className="about__contact center">
                            <a
                                href="https://github.com/mdali-11"
                                aria-label="github"
                                target="_blank"
                                rel="noreferrer"
                                className="link link--icon"
                            >
                                <GitHubIcon />
                            </a>
                            <a
                                href="mailto:mdali91935@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="mail"
                                className="link link--icon"
                            >
                                <EmailIcon />
                            </a>
                            <a
                                href="tel:+919007977270"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="phone"
                                className="link link--icon"
                            >
                                <PhoneIcon />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/md-ali11/"
                                aria-label="linkedin"
                                className="link link--icon"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <LinkedInIcon />
                            </a>
                            <a
                                href="https://twitter.com/MdAli14093984"
                                aria-label="twitter"
                                className="link link--icon"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <TwitterIcon />
                            </a>
                        </div>

                        <Button onClick={resumeOnclick} variant="outlined" style={{ background: "black", color: "white", fontWeight: "bolder", fontSize: "15px" }}                       

                        >
                            <a
                      rel="noreferrer"
                      style={{ textDecoration: "none", color: "white" }}
                      href="https://drive.google.com/uc?export=download&id=18QWx9vFvtc65I3yXhY3_WCdL2sCPJm52"
                    >
                    
                        RESUME
                     
                    </a>
                        </Button>
                    </div>
                </div>
            </div>
                    
    </div>
}