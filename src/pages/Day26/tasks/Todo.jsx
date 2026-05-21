import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const Todo = () => {
    return (
        <div className="w-full md:w-[55%] mx-auto p-10 flex justify-center items-center flex-col gap-10">
            <TodoInput />
            <TodoList />
        </div>
    );
};

export default Todo;