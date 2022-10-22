import { Button } from "@material-ui/core"
import { Typography } from "@material-ui/core"
import GithubCalender from "react-github-calender"
export default function Project() {

    return <div>
    <GithubCalender username="mdali-11" />
    <p><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=mdali-11&show_icons=true&locale=en&layout=compact&theme=dracula" alt="mdali-11" /></p>

<p>&nbsp;<img align="center" margin-Top="5px" src="https://github-readme-stats.vercel.app/api?username=mdali-11&show_icons=true&locale=en&theme=dracula" alt="mdali-11" /></p>

<p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=mdali-11&theme=dracula" alt="mdali-11" /></p>

<a href="https://github.com/mdali-11/github-readme-activity-graph"><img alt="Pandit Gangadhar's Activity Graph" src="https://denvercoder1-activity-graph.herokuapp.com/graph/?username=mdali-11&bg_color=1F222E&color=F8D866&line=F85D7F&point=FFFFFF&hide_border=true" /></a>


<p align="center">
<a href="https://github.com/mdali-11"><span>
<img align="center" src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=mdali-11&theme=dracula" alt="img" />
</span></a> </p>
        <h1 style={{ textAlign: "center" }}>Projects</h1>
        <div style={{display:"flex",justifyContent:"space-between",}}>
            <div>
                <img width="500px" src="https://github.com/mdali-11/mdali-11.github.io/blob/master/src/pics/Screenshot%20(13131).png?raw=true" alt="ss project" />
            </div>
            <div>
                <div>
                    <Typography style={{
                        width: "45vw",
                        fontSize: "30px",
                        margin: "auto",
                        textAlign: "center",
                        fontWeight: "lighter"
                    }}
                        variant="subtitle1"
                        color="initial">
                    </Typography>
                </div>
                <div>
                    <Button>View Code</Button>
                    <Button>Go to Site</Button>
                </div>

            </div>
        </div>

    </div>
}