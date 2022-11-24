import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
export const Contact = () => {

  return (
    <>
    <section id="#contact">
      <div className="section">
        <h2 style={{textAlign:"center"}} className="section__title">
          Get in <span className="different">Touch</span>
        </h2>
        <div className="contactMain">
          <div
            className={"contactcontainer "}
            data-aos="fade-right"
          >
            <a
              href="https://www.linkedin.com/in/md-ali11/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="linkedin" />
            </a>
            <a
              href="https://github.com/mdali-11/"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithub className="github" />
            </a>
            <a
              href="mailto:mdali91935@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <CgMail className="email" />
            </a>
            <a href="tel:+919007977270" target="_blank" rel="noreferrer">
              <BsFillTelephoneFill className="phone" />
            </a>
          </div>
          <div className="contact_btm">
          <div className="mailNumber" data-aos="fade-right">
            <div>
              <span>
                <CgMail className="email" />
              </span>
              <span>
                <p>mdali91935@gmail.com</p>
              </span>
            </div>
            <div className="iconsCont">
              <span>
                <BsFillTelephoneFill className="phone" />
              </span>
              <span>
                <p>+91 9007977270</p>
              </span>
            </div>
          </div>
          </div>
        </div>
        <FloatingWhatsApp phoneNumber="+91 9007977270" accountName="Md Ali"/>
      </div>
      </section>
    </>
  );
};
