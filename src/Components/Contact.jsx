import "./Contact.css"
import React from "react";
import "./Contact.css";
import { VscGithub,  } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin ,FaWhatsapp } from "react-icons/fa";
// import { FloatingWhatsApp } from 'react-floating-whatsapp'



export default function Contact() {

    return  <section id="contact">
        <div className="contacts">
            <div className="cth">
                <h1>Get in <span>Touch</span></h1>
            </div>
            <div className="contact_box">
                <div>   <a
                    href="https://www.linkedin.com/in/md-ali11/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaLinkedin className="linkedin" />
                </a>
                </div>
                <div>   <a
                    href="https://api.whatsapp.com/send?phone=+919007977270"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaWhatsapp className="whatsapp" />
                </a>
                </div>
                <div>   <a
                    href="https://github.com/mdali-11/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <VscGithub className="github" />
                </a>
                </div>
                <div>   <a
                    href="mailto:mdali91935@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <CgMail className="email" />
                </a>
                </div>
                <div>   <a href="tel:+919007977270" target="_blank" rel="noreferrer">
                    <BsFillTelephoneFill className="phone" />
                </a>
                </div>
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
        {/* <FloatingWhatsApp phoneNumber="+919007977270" accountName="Md Ali" allowClickAway="true"/> */}
            </div>
        </section>
  
}

// import "./Contact.css"
// import React from "react";
// import "./Contact.css";
// import { VscGithub,  } from "react-icons/vsc";
// import { CgMail } from "react-icons/cg";
// import { BsFillTelephoneFill } from "react-icons/bs";
// import { FaLinkedin ,FaWhatsapp } from "react-icons/fa";
// import { FloatingWhatsApp } from 'react-floating-whatsapp'

// export default function Contact(){
//   return <div>
//     <section id="#contact">
//        <div className="contacts">
//        <div>
//                 <h1>Get in <span>Touch</span></h1>
//          </div>
//          <div className="contact_box">
//          <div>   <a
//                    href="https://www.linkedin.com/in/md-ali11/"
//                    target="_blank"
//                    rel="noreferrer"
//                >
//                    <FaLinkedin className="linkedin" />
//                </a>
//                </div>
//                <div>   <a
//                    href="https://api.whatsapp.com/send?phone=+919007977270"
//                    target="_blank"
//                    rel="noreferrer"
//                >
//                    <FaWhatsapp className="whatsapp" />
//                </a>
//                </div>
//                <div>   <a
//                    href="https://github.com/mdali-11/"
//                    target="_blank"
//                    rel="noreferrer"
//                >
//                    <VscGithub className="github" />
//                </a>
//                </div>
//                <div>   <a
//                    href="mailto:mdali91935@gmail.com"
//                    target="_blank"
//                    rel="noreferrer"
//                >
//                    <CgMail className="email" />
//                </a>
//                </div>
//                <div>   <a href="tel:+919007977270" target="_blank" rel="noreferrer">
//                    <BsFillTelephoneFill className="phone" />
//                </a>
//                </div>
           

//          </div>
//          <div className="contact_btm">
//           <div className="mailNumber" data-aos="fade-right">
//             <div>
//               <span>
//                 <CgMail className="email" />
//               </span>
//               <span>
//                 <p>mdali91935@gmail.com</p>
//               </span>
//             </div>
//             <div className="iconsCont">
//               <span>
//                 <BsFillTelephoneFill className="phone" />
//               </span>
//               <span>
//                 <p>+91 9007977270</p>
//               </span>
//             </div>
//           </div>
//           </div>
        
//        </div>
// </section>
//   </div>
// }

