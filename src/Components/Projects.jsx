
import ProjectCard from "./ProjectCard";
import "./Projects.css"
export default function Projects() {

    const tools1=[
        "HTML",
        "CSS",
        "JS"
    ]
    const tools2=[
        "HTML",
        "CSS",
        "JS"
    ]
    const tools3=[
        "HTML",
        "CSS",
        "JS",
        "React JS",
        "Chakra UI"
    ]
    const tools4=[
        "HTML",
        "CSS",
        "JS",
        "React JS",
        "Node JS",
        "Express JS",
        "Mongo DB",
        "Chakra UI"
    ]

    let p1 = tools1.map((el) => (
        <button key={el} className="tool">
           {el}
        </button>
      ));
      let p2 = tools2.map((el) => (
        <button key={el} className="tool">
           {el}
        </button>
      ));
      let p3 = tools3.map((el) => (
        <button key={el} className="tool">
           {el}
        </button>
      ));
      let p4 = tools4.map((el) => (
        <button key={el} className="tool">
           {el}
        </button>
      ));

    return (
        // <!-- project section start -->
         <div className="project_main_div">
        {/* <section className="project" id="#projects"> */}
        <section style={{position:"absolute",marginTop:"300px"}} id="#projects">
        </section>
        <div>
        <h1 style={{fontSize:"40px" , marginBottom:"50px"}}>Projects</h1>
        </div>
     

        <div className="project_div">
            <div className="carousel">
                <ProjectCard src={"https://github.com/mdali-11/weather-app/raw/main/weather/pics/Screenshot%20(13131).png"} title={"Weather App"} 
desc1={"Individual Project - Built a fully responsive weather app using weather API where you can search for any location"}
                  techstacks={p1} linkg={"https://github.com/mdali-11/weather-app"} linkd={"https://eloquent-concha-9fefda.netlify.app/"} />
                <ProjectCard src={"https://github.com/mdali-11/Rentomojo-clone/raw/main/pics/Screenshot%20(13133).png"} title={"Rentomojo Clone"}
                desc1={"Collaborative Project - Built a fully responsive a ecommerce website where you can take stuffs on rent for a speciifc period."}
techstacks={p2} linkg={"https://github.com/mdali-11/Rentomojo-clone"} linkd={"https://roaring-scone-4c2c2e.netlify.app/"} />
           
           <ProjectCard src={"https://github.com/mdali-11/mdali-11.github.io/blob/master/src/pics/Screenshot%20(15423).png?raw=true"} title={"Asos Clone"} 
desc1={"Collaborative Project - Built a fully responsive ecommerce website where you can buy clothes for your wardrobe"}
                  techstacks={p3} linkg={"https://github.com/mehfoozkhangithub/tangible-robin-3650/tree/main/team_robin"} linkd={"https://ali-asos-clone.vercel.app"} />
                <ProjectCard src={"https://github.com/mdali-11/mdali-11.github.io/blob/master/src/pics/Screenshot%20(17324).png?raw=true"} title={"Modesens Clone"}
                desc1={"Collaborative Project - Built a fully responsive ecommerce website where you buy and get best brands deals on latest fashionwear."}
techstacks={p4} linkg={"https://github.com/udhai-20/ultra-rabbit-9293"} linkd={"https://ali-modesens.vercel.app/"} />
          
            </div>
       
        {/* </section> */}
        </div>
        </div>

    );

}
