import { useContext } from "react";

import { TodoContext } from "../context/TodoContext";

const TodoInput = () => {

    const {
        state,
        handleInputChange,
        handleAddTodo,
        handleEditTodo
    } = useContext(TodoContext);

    return (
        <div className='w-full space-y-5 text-center'>
            <h1 className='font-bold text-xl'>Todo list using useReducer</h1>


            <form
                className='w-full flex gap-5 items-center'
                onSubmit={state.isEditAccess ?
                    (e) => handleEditTodo(e, state.todoVal) :
                    (e) => handleAddTodo(e, state.todoVal)
                }
            >
                <input
                    placeholder='Add todo here...'
                    className='w-full outline-none border-2 border-black/20 rounded-xl px-3 py-2'
                    value={state.todoVal}
                    onChange={(e) => handleInputChange(e.target.value)}
                />

                <button
                    className='bg-green-500 font-semibold text-white px-3 py-2 cursor-pointer rounded-xl'
                >
                    {state.isEditAccess ? "Update" : "Add"}
                </button>
            </form>
        </div>
    );
};

export default TodoInput;