import { useEffect, useState } from "react";

import TodoList from "./TodoList";

const TodoForm = () => {

    const instructions = [
        {
            id: 1,
            todoName: "Click one time to complete the todo",
            completed: true
        },
        {
            id: 2,
            todoName: "Click double click to edit the todo value",
            completed: false
        },
        {
            id: 3,
            todoName: "Click outer scope of todo message to update",
            completed: false
        },
    ];

    const [todoValue, setTodoValue] = useState("");
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || instructions);

    const addTodoHandle = () => {
        if (todoValue.trim() == "") return;
        setTodos([...todos, { id: Date.now(), todoName: todoValue, completed: false }]);
        setTodoValue("");
    };

    const deleteTodoHandle = (id) => {
        if (confirm("Are you sure want to delete?")) {
            setTodos(todos.filter((todo) => todo.id != id));
        }
    };

    const editTodoHandle = (id, updateTodo) => {
        setTodos(todos.map((todo) => (
            todo.id === id ? { ...todo, todoName: updateTodo } : todo
        )));
    };

    const completeHandle = (id) => {
        setTodos(todos.map((todo) => (
            todo.id === id ?
                { ...todo, completed: !todo.completed } :
                todo
        )));
    };

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="w-full flex flex-col justify-center items-center gap-15">
            <h1 className="text-2xl italic font-bold">Todo list</h1>

            <div className="w-[50%] flex gap-3 items-center">
                <input
                    type="text"
                    placeholder="Add todo here..."
                    className="w-full rounded-lg p-2 outline-none border-2 border-black/60"
                    value={todoValue}
                    onChange={(e) => setTodoValue(e.target.value)}
                />

                <button onClick={addTodoHandle}
                    className="px-3 w-fit py-2 rounded-lg cursor-pointer bg-black text-white">Add</button>
            </div>

            <div className="w-[50%] space-y-4">
                {
                    todos.map((todo) => (
                        <TodoList
                            key={todo.id}
                            todo={todo}
                            onDelete={deleteTodoHandle}
                            completeHandle={completeHandle}
                            editTodoHandle={editTodoHandle}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default TodoForm;