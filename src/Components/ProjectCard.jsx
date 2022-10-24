import "./ProjectCard.css"

export default function ProjectCard({ src, title, desc1,techstacks, linkg, linkd }) {

    return (
        <>
            <div className="card">
                <div className="box">
                    <img src={src} alt="" />
                    <div className="abt_proj">
                    <div className="text">{title}</div>
                    <p className="desc">{desc1}</p>
                    {/* <p className="desc">{desc2}</p>
                    <br /> */}
                    <p className="techtext">TechStack Used: <span className="techStack">{techstacks}</span></p>
                    <div className="repo-links">
                        <div className="repo-div">
                            <button>  <a href={linkg} target="_blank" rel="noreferrer"> Git Repo </a></button>
                        </div>
                        <div className="demo-div">
                            <button> <a href={linkd} target="_blank" rel="noreferrer">  Live Site  </a></button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}