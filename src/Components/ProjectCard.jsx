import "./ProjectCard.css"

export default function ProjectCard({ src, title, desc1, techstacks, linkg, linkd }) {

    return (
        <>
            <div className="card">
                <div className="box">
                    <div className="left_box">
                        <img className="img" src={src} alt="" />
                    </div>
                    <div className="right_box">
                        <div className="text">{title}</div>
                        <div className="desc">
                            <p>{desc1}</p>
                        </div>
                        <div  className="techtext">
                            <p><span className="techStack">{techstacks}</span></p>
                        </div>
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