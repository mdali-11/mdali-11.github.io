
import ProjectCard from "./ProjectCard";
import "./Projects.css"
export default function Projects() {

    return (
        // <!-- project section start -->
         <div className="project_div">
        <section className="project" id="#projects">
    <h1 align="center" style={{fontSize:"40px"}}>Project</h1>
            <div className="carousel">
                <ProjectCard src={"https://github.com/mdali-11/weather-app/raw/main/weather/pics/Screenshot%20(13131).png"} title={"Weather App"} 
desc1={"Individual Project - Built a fully responsive weather app using weather API where you can search for any location"}
                  techstacks={"HTML CSS JS"} linkg={"https://github.com/mdali-11/weather-app"} linkd={"https://shimmering-tarsier-6ec760.netlify.app/"} />
                <ProjectCard src={"https://github.com/mdali-11/Rentomojo-clone/raw/main/pics/Screenshot%20(13133).png"} title={"Rentomojo Clone"}
                desc1={"An ecommerce website where you can take stuffs on rent for a speciifc period."}
techstacks={"HTML CSS JS"} linkg={"https://github.com/mdali-11/Rentomojo-clone"} linkd={"https://roaring-scone-4c2c2e.netlify.app/"} />
            </div>
       
        </section>
        </div>

    );

}
