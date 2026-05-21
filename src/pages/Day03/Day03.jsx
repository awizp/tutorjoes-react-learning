import { useState } from "react";

import "./style.css";

const Day03 = () => {

    const [fruit, setFruit] = useState("");
    const [cart, setCart] = useState([]);
    const [table, setTable] = useState(null);
    const [limit, setLimit] = useState(null);
    const [tableValue, setTableValue] = useState([]);

    const addFruit = () => {
        if (fruit === "") return;
        setCart([...cart, fruit]);
        setFruit("");
    };

    const handleTable = () => {
        if (limit === "" && table === "") return;

        setTableValue([...tableValue, `${table} * ${limit} = ${table * limit}`]);
    };

    return (
        <div className="w-full h-screen bg-black text-white flex flex-col justify-center items-center">
            <title>Fruits cart</title>
            <h1 className="text-3xl font-bold italic mb-4">Learning useState Hook</h1>

            <div className="fruits-container">
                <h1>Fruits cart</h1>

                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Enter your fruit"
                        value={fruit}
                        onChange={(e) => setFruit(e.target.value)}
                        className="bg-zinc-900"
                    />
                    <button
                        type="button"
                        onClick={addFruit}
                    >
                        Add to cart
                    </button>
                </div>

                {cart.length > 0 && <h3>Lists of fruits</h3>}
                <ul>
                    {
                        cart.map((fruit, idx) => {
                            return <li key={idx}>{fruit}</li>;
                        })
                    }
                </ul>
            </div>

            <div className="fruits-container">
                <h1>Table limit calculation</h1>

                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Enter your table"
                        value={table}
                        onChange={(e) => setTable(e.target.value)}
                        className="bg-zinc-900"
                    />
                    <input
                        type="text"
                        placeholder="Enter your limit"
                        value={limit}
                        onChange={(e) => setLimit(e.target.value)}
                        className="bg-zinc-900"
                    />
                    <button
                        type="button"
                        onClick={handleTable}
                    >
                        See Table
                    </button>
                </div>

                {tableValue.length > 0 && <h3>Your Table Limit</h3>}
                <ul>
                    {
                        tableValue.map((table, idx) => {
                            return <li key={idx}>{table}</li>;
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default Day03;