
import Githubcalendar from "react-github-calendar";
import ReactToolTip from "react-tooltip"


    const Calendar=()=>{
        // const selectLastHalfYear = (contributions) => {
        //     const currentYear=new Date().getFullYear();
        //     const currentMonth=new Date().getMonth();
        //     const shownMonths=6;

        //     return contributions.filter((day)=> {
        //         const date=new Date(day.date);
        //         const monthOfDay=date.getMonth();

        //         return (
        //             date.getFullYear() === currentYear && 
        //             monthOfDay > currentMonth - shownMonths && 
        //             monthOfDay <= currentMonth
        //         )
        //     })
        // }


        return (
            <div >
                <Githubcalendar 
                style={{margin:"auto",width:"100%", cursor:"pointer"}} 
                    username="mdali-11"
                    color="#16DB94"                >
                    <ReactToolTip delayHide={30} html />
                </Githubcalendar>
            </div>
        )
    };

    export default Calendar;