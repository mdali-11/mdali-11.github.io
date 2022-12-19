
import Calendar from "./Calender";
import "./Github.css";

export default function Github() {


    return <div className="gitcont">
    <h1 align="center" style={{fontSize:"40px", marginBottom:"50px"}}>Github</h1>
        <div className="git">
        <div className="calender">
        <Calendar />
        </div>
            <div>
                <p><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=mdali-11&show_icons=true&locale=en&layout=compact&theme=dracula" alt="mdali-11" /></p>
            </div>

            <div>
                <p>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=mdali-11&show_icons=true&locale=en&theme=dracula" alt="mdali-11" /></p>
            </div>
            <div>
                <p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=mdali-11&theme=dracula" alt="mdali-11" /></p>
            </div>
            {/* <div>
                <a href="https://github.com/mdali-11/github-readme-activity-graph"><img alt="Md Ali Activity Graph" src="https://denvercoder1-activity-graph.herokuapp.com/graph/?username=mdali-11&bg_color=1F222E&color=F8D866&line=F85D7F&point=FFFFFF&hide_border=true" /></a>
            </div> */}
            <div>
                <p>
                    <a href="https://github.com/mdali-11"><span>
                        <img align="center" src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=mdali-11&theme=dracula" alt="img" />
                    </span></a> </p>
            </div>
        </div>

    </div>
}