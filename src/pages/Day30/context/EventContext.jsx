import { createContext, useState, useEffect, useReducer } from "react";

const EventContext = createContext();

const EventProvider = ({ children }) => {

    const getYear = new Date().getFullYear();
    const getMonth = new Date().getMonth();

    const [currentDate, setCurrentDate] = useState(new Date(getYear, getMonth));

    const getDaysInMonth = (year, month) => {
        const date = new Date(year, month, 1);
        const days = [];
        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return days;
    };

    const formatDate = (date) => {
        const options = { timeZone: "Asia/Kolkata" };
        const istDate = new Date(date.toLocaleString("en-US", options));
        const yyyy = istDate.getFullYear();
        const mm = String(istDate.getMonth() + 1).padStart(2, "0");
        const dd = String(istDate.getDate()).padStart(2, "0");
        return `${yyyy}-${mm}-${dd}`;
    };

    //get values from current date
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);

    const monthYearLabel = currentDate.toLocaleString("default", {
        month: "long",
        year: "numeric",
    });

    // previous month btn
    const prevMonth = () => {
        const newDate = new Date(currentDate);
        newDate.setMonth(currentMonth - 1);
        setCurrentDate(newDate);
    };

    // next month btn
    const nextMonth = () => {
        const newDate = new Date(currentDate);
        newDate.setMonth(currentMonth + 1);
        setCurrentDate(newDate);
    };

    // reducer function
    const eventReducer = (state, action) => {
        switch (action.type) {
            case "ADD_EVENT":
                return [
                    ...state,
                    {
                        id: Date.now(),
                        title: action.payload.title,
                        date: action.payload.date,
                    },
                ];

            default:
                return state;
        }
    };

    // local storage name,
    const LOCAL_KEY = "event-calendar";

    const init = () => {
        const stored = localStorage.getItem(LOCAL_KEY);
        return stored ? JSON.parse(stored) : [];
    };

    // event reducer state management
    const [events, dispatch] = useReducer(eventReducer, [], init);
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");

    // setting local storage every time events change
    useEffect(() => {
        localStorage.setItem(LOCAL_KEY, JSON.stringify(events));
    }, [events]);

    // adding events in our date function
    const handleAdd = () => {
        if (title && date) {
            dispatch({
                type: "ADD_EVENT",
                payload: { title, date },
            });
            setTitle("");
            setDate("");
        } else {
            alert("Please fill all details");
            return;
        }
    };

    const eventValues = {
        monthYearLabel,
        daysInMonth,
        formatDate,
        prevMonth,
        nextMonth,
        events,
        title,
        setTitle,
        date,
        setDate,
        handleAdd
    };

    return (
        <EventContext.Provider value={eventValues}>
            {children}
        </EventContext.Provider>
    );
};

export { EventContext, EventProvider };