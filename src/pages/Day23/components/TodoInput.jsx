import { useContext } from "react";

import { TodoContext } from "../context/TodoContext";

const TodoInput = () => {

    const { todo, setTodo, handleAddTodo } = useContext(TodoContext);

    return (
        <div className="w-full flex gap-5 items-center">
            <input
                placeholder="Add todo here..."
                onChange={(e) => setTodo(e.target.value)}
                value={todo}
                className="w-full outline-none border-2 border-black/20 px-3 py-2 rounded-xl"
            />

            <button
                onClick={handleAddTodo}
                className="text-nowrap bg-blue-500 rounded-xl px-3 py-2 cursor-pointer font-semibold text-white"
            >Add Todo</button>
        </div>
    );
};

export default TodoInput;