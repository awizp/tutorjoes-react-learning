import { useContext, useState } from "react";
import { EventContext } from "../context/EventContext";

const EventCalender = () => {

    const {
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
    } = useContext(EventContext);

    return (
        <div className="w-full md:max-w-4xl p-10 mx-auto space-y-5">
            {/* month toggler */}
            <div className='w-full p-2 grid grid-cols-3 gap-10 justify-center items-center text-center'>
                <button
                    onClick={prevMonth}
                    className='font-semibold cursor-pointer bg-blue-100 p-2 rounded-lg hover:bg-blue-200'>
                    ◀ Prev
                </button>
                <div className='font-semibold text-xl'>{monthYearLabel}</div>
                <button
                    onClick={nextMonth}
                    className='font-semibold cursor-pointer bg-blue-100 p-2 rounded-lg hover:bg-blue-200'>
                    Next ▶
                </button>
            </div>

            {/* add events input and button */}
            <div className='w-full p-2 grid grid-cols-3 gap-10 text-center'>
                <input
                    type='text'
                    placeholder='Enter the event'
                    className='px-3 py-2 border-2 border-black/90 rounded-lg outline-none focus:outline-blue-500'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="date"
                    className="border-2 px-3 py-2 rounded-lg border-black/90 focus:outline-blue-500"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <button
                    onClick={handleAdd}
                    className="bg-blue-600 text-white py-2 hover:bg-blue-700 rounded-lg cursor-pointer"
                >
                    Add Event
                </button>
            </div>

            {/* dates boxes in grid */}
            <div className="grid grid-cols-7 border border-gray-300 p-3 gap-3">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="p-2 font-semibold bg-gray-100 border border-gray-300 text-center mb-2">
                        {day}
                    </div>
                ))}

                {/* Blank Days  */}
                {Array(daysInMonth[0].getDay())
                    .fill(0)
                    .map((_, i) => (
                        <div key={`blank-${i}`} className="h-28"></div>
                    ))}

                {/* Day Boxes */}
                {daysInMonth.map((day, index) => {
                    const dayStr = formatDate(day);
                    const dayEvents = events.filter((e) => e.date === dayStr);
                    return (
                        <div key={index} className="border border-gray-400 p-2 h-28 overflow-auto text-sm">
                            <div className="font-bold">{day.getDate().toString().padStart(2, "0")}</div>

                            {dayEvents.map((e) => (
                                <div key={e.id} className="mt-1 p-1 rounded font-semibold bg-green-100 text-green-800">
                                    {e.title}
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default EventCalender;