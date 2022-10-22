import { Button } from "@material-ui/core"
export default function Project(){

    return <div>
        <div className="projects">
            <div className="project_img">
                <img src="C:\Users\MD. ALI\OneDrive\Desktop\my Portfolio\my_portfolio\src\pics\Screenshot (13131).png" alt="pi" />
            </div>
            <div className="project_details">
            <div className="desc">
                <p>Individual Project - Built a fully responsive weather app using weather API where you can search for any location and get the weather data and 7-day weather forecast.</p>
                </div>
                <div className="project_button">
                    <Button>View Code</Button>
                    <Button>Netlify</Button>
                </div>
            </div>
        </div>
    </div>
}