import { useState, useEffect } from "react";

import "./style.css";

const Day08 = () => {

    const [users, setUsers] = useState([]);
    const [randomUser, setRandomUser] = useState(null);
    const [id, setId] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
                const data = await res.json();
                setUsers(data);
            } catch (error) {
                console.error('Fetching error: ', error);
            }
        };

        fetchData();
    }, []);

    const randomUserHandle = () => {
        const randomNumber = Math.floor((Math.random() * 10) + 1);
        setId(randomNumber);
        console.log(id);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                const data = await res.json();
                setRandomUser(data);
            } catch (error) {
                console.error('Fetching error: ', error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className="w-full py-10">
            <title>Random users</title>
            <div className="container px-3 md:px-0 mx-auto">
                <div className="flex flex-col gap-10 justify-center items-center w-full">
                    <h2 className="text-2xl font-bold">All users names</h2>

                    <div className="w-full space-y-2">
                        {users.length > 0 && users.map((user, idx) => (
                            <div key={user.id + idx} className="w-[50%] border border-black/50 p-2 rounded-xl flex items-center gap-5">
                                <h3 className="font-bold text-lg">{user.name}</h3>
                                <h4 className="font-semibold text-lg text-gray-800">{user.username}</h4>
                                <p className="text-blue-700">{user.email}</p>
                            </div>
                        ))}
                    </div>

                    <button onClick={randomUserHandle}
                        className="w-fit px-3 py-2 rounded-xl cursor-pointer bg-blue-600 font-semibold">Random user</button>
                </div>

                {randomUser && <div className="w-fit border border-black/50 p-2 rounded-xl flex items-center gap-5">
                    <h3 className="font-bold text-lg">{randomUser.name}</h3>
                    <h4 className="font-semibold text-lg text-gray-800">{randomUser.username}</h4>
                    <p className="text-blue-700">{randomUser.email}</p>
                </div>}
            </div>
        </div>
    );
};

export default Day08;