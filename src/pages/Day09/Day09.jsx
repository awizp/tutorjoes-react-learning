import { useEffect, useState } from "react";

const Day09 = () => {

    const [time, setTime] = useState(new Date());
    const [timezone, setTimezone] = useState('Asia/Kolkata');
    const [is24Hour, setIs24Hour] = useState(false);

    const timeZones = ['Asia/Kolkata', "Asia/Tokyo", "America/New_York", "America/Los_Angeles", "Australia/Sydney", "Europe/London"];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        const titleUpdate = () => {
            const timeFormat = time.toLocaleTimeString('en-US', {
                timeZone: timezone,
                hour12: !is24Hour,
            });

            document.title = `Time: ${timeFormat} (${timezone})`;
        };

        titleUpdate();
    }, [timezone, is24Hour, time]);

    const timeFormat = time.toLocaleTimeString('en-US', {
        timeZone: timezone,
        hour12: !is24Hour,
    });

    const handleZone = (e) => {
        setTimezone(e.target.value);
    };


    return (
        <div className="w-full py-10">
            <div className="container px-3 md:px-0 mx-auto">

                <div className="flex flex-col justify-center items-center gap-10 w-full">
                    <h1 className="font-bold italic text-2xl mb-5">Actual Time</h1>

                    <div className="w-fit p-3 rounded-xl bg-black text-white border-2 border-gray-500 text-5xl">
                        {timeFormat}
                    </div>

                    <button onClick={() => setIs24Hour(prev => !prev)}
                        className="bg-blue-600 rounded-lg cursor-pointer px-3 py-2 font-semibold">
                        Switch to {is24Hour ? '12 Hour' : '24 Hour'}
                    </button>

                    <select onChange={handleZone} value={timezone}
                        className="bg-black/60 w-fit text-white px-3 py-2 rounded-lg cursor-pointer">
                        {timeZones.map((zone, idx) => {
                            return <option key={idx}>{zone}</option>;
                        })}
                    </select>
                </div>

            </div>
        </div>
    );
};

export default Day09;