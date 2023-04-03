import "./Contact.css"
import React from "react";
import "./Contact.css";
// import { VscGithub,  } from "react-icons/vsc";
// import { CgMail } from "react-icons/cg";
// import { BsFillTelephoneFill } from "react-icons/bs";
// import { FaLinkedin ,FaWhatsapp } from "react-icons/fa";
// import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { VscGithub, } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
// import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin, FaWhatsapp, FaLocationArrow } from "react-icons/fa";



export default function Contact() {

    return <div className="contacts">
        <section id="contact" style={{ marginTop: "100px" }}></section>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <h1 align="center" style={{ color: "#5779E5", fontSize: "2.5rem" }}>Get in Touch</h1>
        </div>

        <div className="contact_containor">
            <div className='contact'>
                <div className='logos'>

                    <div>
                        <span>
                            <a
                                href="https://api.whatsapp.com/send?phone=+919007977270"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaWhatsapp className="whatsapp" />
                            </a>
                        </span>
                        <span>
                            <p>+91 9007977270</p>
                        </span>

                    </div>

                    <div>
                        <span>
                            <a
                                href="https://www.linkedin.com/in/md-ali11/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaLinkedin className="linkedin" />
                            </a>

                        </span>
                        <span>
                            <p>Linkedin</p>
                        </span>

                    </div>

                    <div>
                        <span>
                            <a
                                href="https://github.com/mdali-11/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <VscGithub className="github" />
                            </a>

                        </span>
                        <span>
                            <p>Github</p>
                        </span>

                    </div>

                    <div>
                        <span>
                            <a
                                href="mailto:mdali91935@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <CgMail className="email" />
                            </a>

                        </span>
                        <span>
                            <p>mdali91935@gmail.com</p>
                        </span>

                    </div>

                    <div>
                        <span>
                            <a href="tel:+919007977270" target="_blank" rel="noreferrer">
                                <FaLocationArrow className="phone" />
                            </a>

                        </span>
                        <span>
                            <p>Howrah, West Bengal</p>
                        </span>

                    </div>


                </div>
                <div>
                    <img src="https://meesahil7.github.io/static/media/mail.1db650d351729a0f17b4e3104e6a7b7a.svg" alt="" />
                </div>
            </div>

        </div>



    </div>



}



