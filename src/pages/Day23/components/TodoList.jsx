import { useContext } from "react";

import { TodoContext } from "../context/TodoContext";

const TodoList = () => {

    const { todoList, handleCompleteTodo, handleDeleteTodo } = useContext(TodoContext);

    return (
        <div className="w-full">
            <h3 className="text-xl font-semibold mb-5">Your Todos</h3>

            <div className="space-y-3">
                {
                    todoList.length === 0 ? "No todos here!" : (
                        todoList.map((todo, idx) => (
                            <div
                                key={idx}
                                className="w-full cursor-default bg-blue-100 p-3 rounded-xl flex justify-between items-center"
                            >
                                <p
                                    onClick={() => handleCompleteTodo(todo.id)}
                                    className={`font-semibold ${todo.completed && "text-green-500"}`}
                                >
                                    {todo.todoVal}
                                </p>

                                <button
                                    onClick={() => handleDeleteTodo(todo.id)}
                                    className="w-fit px-3 py-2 cursor-pointer rounded-xl font-semibold text-white bg-red-500"
                                >Delete</button>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    );
};

export default TodoList;