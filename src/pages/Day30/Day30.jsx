import { EventProvider } from "./context/EventContext";
import EventCalender from "./tasks/EventCalender";
import "./style.css";

const Day30 = () => {
    return (
        <EventProvider>
            <title>Event Calender</title>
            <EventCalender />
        </EventProvider>
    );
};

export default Day30;