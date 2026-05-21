import Todo from "./tasks/Todo";
import { TodoProvider } from "./context/TodoContext";

const Day23 = () => {
    return (
        <TodoProvider>
            <title>Todo with Context API</title>
            <Todo />
        </TodoProvider>
    );
};

export default Day23;