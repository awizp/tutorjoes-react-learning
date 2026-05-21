import TodoList from "../components/TodoList";
import TodoInput from "../components/TodoInput";

const Todo = () => {
    return (
        <div className="w-full md:w-[45%] mx-auto flex flex-col justify-center items-center gap-5 p-10">
            <TodoInput />
            <TodoList />
        </div>
    );
};

export default Todo;