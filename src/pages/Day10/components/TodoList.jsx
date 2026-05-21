import { useState, useRef } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const TodoList = ({ todo, onDelete, completeHandle, editTodoHandle }) => {

    const [updateTodo, setUpdateTodo] = useState("");
    const [isInputShowing, setIsInputShowing] = useState(false);

    const inputRef = useRef();

    const editingTodoHandle = (todo) => {
        setIsInputShowing(true);
        setUpdateTodo(todo.todoName);
    };

    const setTodoHandle = (todo) => {
        if (updateTodo.trim() === "") {
            editTodoHandle(todo.id, todo.todoName);
            setUpdateTodo("");
            setIsInputShowing(false);
            return;
        }
        editTodoHandle(todo.id, updateTodo);
        setUpdateTodo("");
        setIsInputShowing(false);
    };

    return (
        <div onBlur={() => setTodoHandle(todo)}
            className="w-full bg-gray-200 p-3 rounded-lg cursor-default flex justify-between items-center hover:shadow-lg transition hover:-translate-y-1.5">
            {!isInputShowing && <p
                onClick={() => completeHandle(todo.id)}
                onDoubleClick={() => editingTodoHandle(todo)}
                className={`text-lg font-semibold capitalize select-none ${todo.completed && 'line-through text-gray-500'}`}>
                {todo.todoName}
            </p>}

            {isInputShowing &&
                <input
                    ref={inputRef}
                    type="text"
                    value={updateTodo}
                    onChange={(e) => setUpdateTodo(e.target.value)}
                    className="w-full p-2 rounded-lg border border-black/60 outline-none"
                    autoFocus
                />
            }

            {!isInputShowing && <div onClick={() => onDelete(todo.id)}
                className="text-red-500 p-1 border-2 border-red-500 rounded-lg flex justify-center items-center cursor-pointer">
                <RiDeleteBin6Line />
            </div>}
        </div>
    );
};

export default TodoList;