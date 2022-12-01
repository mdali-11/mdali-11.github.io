
import Githubcalendar from "react-github-calendar";
import ReactToolTip from "react-tooltip"


    const Calendar=()=>{
        const selectLastHalfYear = (contributions) => {
            const currentYear=new Date().getFullYear();
            const currentMonth=new Date().getMonth();
            const shownMonths=6;

            return contributions.filter((day)=> {
                const date=new Date(day.date);
                const monthOfDay=date.getMonth();

                return (
                    date.getFullYear() === currentYear && 
                    monthOfDay > currentMonth - shownMonths && 
                    monthOfDay <= currentMonth
                )
            })
        }

        return (
            <div>
                <Githubcalendar 
                style={{margin:"auto"}} 
                    username="mdali-11"
                    color="black"
                    transformData={selectLastHalfYear}
                    blockSize={20}
                    fontSize={20}
                >
                    <ReactToolTip delayHide={20} html />
                </Githubcalendar>
            </div>
        )
    };

    export default Calendar;