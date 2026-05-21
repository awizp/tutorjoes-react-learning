import { useState } from "react";

const Todo = () => {

    const [todo, setTodo] = useState("");
    const [list, setList] = useState([]);

    const handleTodo = () => {
        if (todo == "") { alert("Enter todo"); return; }

        const newTodo = {
            id: Date.now(),
            todo: todo,
            completed: false,
        };

        setList([...list, newTodo]);
        setTodo("");
    };

    const completedTodo = (idValue) => {
        const completeTodo = list.map((listItem) => listItem.id === idValue ? { ...listItem, completed: !listItem.completed } : listItem);
        setList(completeTodo);
    };

    return (
        <section className="w-full text-white">
            <nav className="w-full bg-purple-700 text-white text-center p-3">
                Todo List
            </nav>

            <div className="w-full bg-zinc-950 py-20">

                <div className="flex justify-center gap-3 items-center">
                    <input type="text" className="bg-zinc-800 rounded-xl px-3 py-2 border border-white/20"
                        placeholder="Enter your todo"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                    <button type="button" className="bg-purple-600 rounded-lg cursor-pointer px-3 py-1.5"
                        onClick={handleTodo}
                    >
                        Add Todo
                    </button>
                </div>

                {list.length > 0 && <ul className="w-full bg-zinc-700 space-y-4 text-white mt-10 flex flex-col justify-center items-center p-5">
                    <h3 className="font-semibold text-lg italic mb-8 text-center">Todo items</h3>
                    {
                        list.map((item) => {
                            return <li key={item.id}
                                className={`w-fit bg-black rounded-xl px-4 py-2 cursor-pointer text-white capitalize text-lg font-semibold ${item.completed && "line-through"}`}
                                onClick={() => completedTodo(item.id)}
                            >
                                {item.todo}
                            </li>;
                        })
                    }
                </ul>}

            </div>
        </section>
    );
};

export default Todo;