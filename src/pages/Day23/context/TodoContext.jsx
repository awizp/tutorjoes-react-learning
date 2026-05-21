import { createContext, useState } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {

    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    // handle the todo to add in the list
    const handleAddTodo = () => {
        if (todo.trim()) {

            const newTodo = {
                id: Date.now(),
                todoVal: todo,
                completed: false,
            };

            setTodoList([...todoList, newTodo]);
        }
        setTodo("");
    };

    // handle completed func
    const handleCompleteTodo = (id) => {
        const updateTodoList = todoList.map((todo) =>
            todo.id === id ?
                {
                    ...todo,
                    completed: !todo.completed
                } :
                todo);

        setTodoList(updateTodoList);
    };

    // handle delete func
    const handleDeleteTodo = (id) => {
        if (window.confirm("Are you sure want to delete?")) {
            const updateTodoList = todoList.filter((todo) => todo.id !== id);
            setTodoList(updateTodoList);
        }
    };

    return (
        <TodoContext.Provider value={{ todo, setTodo, todoList, handleAddTodo, handleCompleteTodo, handleDeleteTodo }}>
            {children}
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider };