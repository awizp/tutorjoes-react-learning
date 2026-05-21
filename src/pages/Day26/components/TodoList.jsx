import { useContext } from "react";

import { TodoContext } from "../context/TodoContext";

const TodoList = () => {

    const {
        state,
        handleComleteTodo,
        handleDeleteTodo,
        getFilteredTodos,
        handleFilterTodos,
        handleEditAccess
    } = useContext(TodoContext);

    return (
        <div className="w-full space-y-5">
            <div className="flex gap-3 items-center">
                {
                    ["all", "active", "completed"].map((filter, idx) => (
                        <button
                            key={idx}
                            className={`${state.filter === filter ? "bg-green-500" : "bg-green-300"} font-semibold text-white px-3 py-2 cursor-pointer rounded-xl`}
                            onClick={() => handleFilterTodos(filter)}
                        >
                            {filter}
                        </button>
                    ))
                }
            </div>

            {/* Todo Stats */}
            <div className="text-sm text-gray-600 font-semibold flex items-center gap-3 w-full">
                <p>Total : {state.todos.length}</p>
                <p>Completed : {state.todos.filter((t) => t.completed).length}</p>
                <p>Active : {state.todos.filter((t) => !t.completed).length}</p>
            </div>

            <div className="space-y-3">
                {
                    state.todos.length === 0 ? "No todos here..!" :
                        (
                            getFilteredTodos().map((todo, idx) => (
                                <div
                                    key={todo.id}
                                    className="w-full bg-green-50 rounded-xl p-3 flex justify-between items-center"
                                >
                                    <p
                                        className={`font-semibold cursor-default ${todo.completed && "text-green-500 line-through"}`}
                                        onClick={() => handleComleteTodo(todo.id)}
                                    >{todo.todo}</p>

                                    <div className="space-x-3">
                                        <button
                                            className="font-semibold text-xs cursor-pointer bg-blue-400 text-white px-3 py-2 rounded-lg"
                                            onClick={() => handleEditAccess(todo)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="font-semibold text-xs cursor-pointer bg-red-400 text-white px-3 py-2 rounded-lg"
                                            onClick={() => handleDeleteTodo(todo.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))
                        )
                }
            </div>
        </div>
    );
};

export default TodoList;