import { TodoProvider } from "./context/TodoContext";
import Todo from "./tasks/Todo";
import "./style.css";

const Day26 = () => {
    return (
        <TodoProvider>
            <title>Todo with useReducer</title>
            <Todo />
        </TodoProvider>
    );
};

export default Day26;