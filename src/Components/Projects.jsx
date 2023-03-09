
// import ProjectCard from "./ProjectCard";
import "./Projects.css"
export default function Projects() {

  const tools1 = [
    "HTML",
    "CSS",
    "JS"
  ]
  const tools2 = [
    "HTML",
    "CSS",
    "JS"
  ]
  const tools3 = [
    "HTML",
    "CSS",
    "JS",
    "React JS",
    "Chakra UI"
  ]
  const tools4 = [
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
      <section id="projects">
      </section>
      <div>
        <h1 style={{ fontSize: "3rem", marginBottom: "50px",color:"White" }}>Projects</h1>
      </div>


    
      <div className="proj_cont">
        <div className="card">
          <div className="left">
            <img src="https://github.com/mdali-11/weather-app/raw/main/weather/pics/Screenshot%20(13131).png" alt="ss" />
          </div>
          <div className="right">

            <div className="title">Weather App</div>
            <div className="desc">Individual Project - Built a fully responsive weather app using weather API where you can search for any location</div>
            <div className="stacks">{p1}</div>
             
             
            <div className="links">
              <button>  <a href="https://github.com/mdali-11/weather-app" target="_blank" rel="noreferrer"> Git Repo </a></button>

              <button>  <a href="https://eloquent-concha-9fefda.netlify.app/" target="_blank" rel="noreferrer"> Live Site </a></button>

            </div>


          </div>

        </div>
        <div className="card">
          <div className="left">
            <img src="https://github.com/mdali-11/Rentomojo-clone/raw/main/pics/Screenshot%20(13133).png" alt="ss" />
          </div>
          <div className="right">

            <div className="title">Rentomojo Clone</div>
            <div className="desc">Collaborative Project - Built a fully responsive a ecommerce website where you can take stuffs on rent for a speciifc period.</div>
            <div className="stacks">{p2}</div>



            <div className="links">
              <button>  <a href="https://github.com/mdali-11/Rentomojo-clone" target="_blank" rel="noreferrer"> Git Repo </a></button>

              <button>  <a href="https://roaring-scone-4c2c2e.netlify.app/" target="_blank" rel="noreferrer"> Live Site </a></button>

            </div>

          </div>

        </div>
        <div className="card">
          <div className="left">
            <img src="https://github.com/mdali-11/mdali-11.github.io/blob/master/src/pics/Screenshot%20(15423).png?raw=true" alt="ss" />

          </div>
          <div className="right">

            <div className="title">Asos Clone</div>
            <div className="desc">Collaborative Project - Built a fully responsive ecommerce website where you can buy clothes for your wardrobe</div>
            <div className="stacks">{p3}</div>



            <div className="links">
              <button>  <a href="https://github.com/mehfoozkhangithub/tangible-robin-3650" target="_blank" rel="noreferrer"> Git Repo </a></button>
              <button>  <a href="https://ali-asos-clone.vercel.app" target="_blank" rel="noreferrer"> Live Site </a></button>

            </div>

          </div>

        </div>
        <div className="card">
          <div className="left">
            <img src="https://github.com/mdali-11/mdali-11.github.io/blob/master/src/pics/Screenshot%20(17324).png?raw=true" alt="ss" />

          </div>
          <div className="right">

            <div className="title">Modesens Clone</div>
            <div className="desc">Collaborative Project - Built a fully responsive ecommerce website where you can buy and get best deals from brands.</div>
            <div className="stacks">{p4}</div>



            <div className="links">
              <button>  <a href="https://github.com/udhai-20/ultra-rabbit-9293" target="_blank" rel="noreferrer"> Git Repo </a></button>

              <button>  <a href="https://ali-modesens.vercel.app/" target="_blank" rel="noreferrer">Live Site </a></button>

            </div>

          </div>

        </div>
        <div className="card">
          <div className="left">
            <img src="https://user-images.githubusercontent.com/104342116/213980455-c8c6e7a5-3e17-4e40-bee0-0e211a835752.png" alt="ss" />

          </div>
          <div className="right">

            <div className="title">Nykaa Clone</div>
            <div className="desc">Collaborative Project - Built a fully responsive ecommerce website where you can buy and get best deals from cosmetics brands.</div>
            <div className="stacks">{p4}</div>



            <div className="links">
              <button>  <a href="https://github.com/Saurav02022/Nykaa-Clone" target="_blank" rel="noreferrer"> Git Repo </a></button>

              <button>  <a href="https://frontend-three-coral.vercel.app/" target="_blank" rel="noreferrer">Live Site </a></button>

            </div>

          </div>

        </div>

      </div>
    </div>

  );

}


