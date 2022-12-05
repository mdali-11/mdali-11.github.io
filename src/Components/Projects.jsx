
import ProjectCard from "./ProjectCard";
import "./Projects.css"
export default function Projects() {

    return (
        // <!-- project section start -->
         <div className="project_main_div">
        {/* <section className="project" id="#projects"> */}
        <section style={{position:"relative",top:"300px"}} id="#projects">
        </section>

        <div>
        <h1 style={{fontSize:"40px" , marginBottom:"45px"}}>Projects</h1>
        </div>
    

        <div className="project_div">
            <div className="carousel">
                <ProjectCard src={"https://github.com/mdali-11/weather-app/raw/main/weather/pics/Screenshot%20(13131).png"} title={"Weather App"} 
desc1={"Individual Project - Built a fully responsive weather app using weather API where you can search for any location"}
                  techstacks={"HTML CSS JS"} linkg={"https://github.com/mdali-11/weather-app"} linkd={"https://shimmering-tarsier-6ec760.netlify.app/"} />
                <ProjectCard src={"https://github.com/mdali-11/Rentomojo-clone/raw/main/pics/Screenshot%20(13133).png"} title={"Rentomojo Clone"}
                desc1={"An ecommerce website where you can take stuffs on rent for a speciifc period."}
techstacks={"HTML CSS JS"} linkg={"https://github.com/mdali-11/Rentomojo-clone"} linkd={"https://roaring-scone-4c2c2e.netlify.app/"} />
           
           <ProjectCard src={"https://github.com/mdali-11/mdali-11.github.io/blob/master/src/pics/Screenshot%20(15423).png?raw=true"} title={"Axios Clone"} 
desc1={"Collaborative Project - Built a fully responsive ecommerce website where you can buy clothes for your wardrobe"}
                  techstacks={"HTML CSS JS React JS Chakra UI"} linkg={"https://github.com/mehfoozkhangithub/tangible-robin-3650/tree/main/team_robin"} linkd={"https://strong-parfait-b1bad8.netlify.app/"} />
                <ProjectCard src={"https://github.com/mdali-11/Rentomojo-clone/raw/main/pics/Screenshot%20(13133).png"} title={"Rentomojo Clone"}
                desc1={"An ecommerce website where you can take stuffs on rent for a speciifc period."}
techstacks={"HTML CSS JS"} linkg={"https://github.com/mdali-11/Rentomojo-clone"} linkd={"https://roaring-scone-4c2c2e.netlify.app/"} />
          
            </div>
       
        {/* </section> */}
        </div>
        </div>

    );

}
