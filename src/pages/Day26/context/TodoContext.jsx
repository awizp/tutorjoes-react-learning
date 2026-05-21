import { createContext, useReducer } from "react";

const TodoContext = createContext();

// initial state value
const initialState = {
    todos: JSON.parse(localStorage.getItem('todo-list')) || [],
    filter: "all",
    isEditAccess: false,
    todoVal: "",
    updateTodo: {}
};

// state management thorugh reducer function
const reducerFunc = (state, action) => {
    switch (action.type) {
        case "CHANGE_TEXT": {
            return { ...state, todoVal: action.payload };
        }

        case "ADD_TODO": {
            const newTodo = {
                id: Date.now(),
                todo: action.payload,
                completed: false
            };

            const updatedTodos = [...state.todos, newTodo];
            localStorage.setItem('todo-list', JSON.stringify(updatedTodos));
            return { ...state, todos: updatedTodos, todoVal: "" };
        }

        case "COMPLETE_TODO": {
            const updatedStatusTodos = state.todos.map(
                (todo) => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo);
            localStorage.setItem('todo-list', JSON.stringify(updatedStatusTodos));
            return { ...state, todos: updatedStatusTodos };
        }

        case "DELETE_TODO": {
            const updatedTodos = state.todos.filter((todo) => todo.id !== action.payload);
            localStorage.setItem('todo-list', JSON.stringify(updatedTodos));
            return { ...state, todos: updatedTodos };
        }

        case "FILTER_TODO": {
            return { ...state, filter: action.payload };
        }

        case "EDIT_ACCESS": {
            return { ...state, isEditAccess: true, updateTodo: { ...action.payload }, todoVal: action.payload.todo };
        }

        case "EDIT_TODO": {
            const updatedTodos = state.todos.map(
                (todo) => todo.id === state.updateTodo.id ? { ...todo, todo: action.payload } : todo);
            localStorage.setItem('todo-list', JSON.stringify(updatedTodos));
            return { ...state, todos: updatedTodos, todoVal: "", updateTodo: {}, isEditAccess: false };
        }

        default:
            return state;
    }
};

const TodoProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducerFunc, initialState);

    //handle the change in input value
    const handleInputChange = (eventVal) => {
        dispatch({ type: "CHANGE_TEXT", payload: eventVal });
    };

    // handle adding todo in state
    const handleAddTodo = (e, todo) => {
        e.preventDefault();
        if (todo.trim()) {
            dispatch({ type: "ADD_TODO", payload: todo });
        }
    };

    // handle completed status
    const handleComleteTodo = (id) => {
        if (id) {
            dispatch({ type: "COMPLETE_TODO", payload: id });
        }
    };

    // handle delte todo
    const handleDeleteTodo = (id) => {
        if (window.confirm("Are you sure want to delete this todo?")) {
            dispatch({ type: "DELETE_TODO", payload: id });
        }
    };

    // handle filtered todos
    const getFilteredTodos = () => {
        switch (state.filter) {
            case "completed":
                return state.todos.filter((todo) => todo.completed);
            case "active":
                return state.todos.filter((todo) => !todo.completed);
            default:
                return state.todos;
        }
    };

    // handle todos filter
    const handleFilterTodos = (filterBy) => {
        dispatch({ type: "FILTER_TODO", payload: filterBy });
    };

    // handle edit access
    const handleEditAccess = (todo) => {
        dispatch({ type: "EDIT_ACCESS", payload: todo });
    };

    // handle edit todo
    const handleEditTodo = (e, updateVal) => {
        e.preventDefault();
        if (updateVal.trim()) {
            dispatch({ type: "EDIT_TODO", payload: updateVal });
        }
    };

    // seperate value object for dx
    const providerValues = {
        state,
        handleInputChange,
        handleAddTodo,
        handleComleteTodo,
        handleDeleteTodo,
        getFilteredTodos,
        handleFilterTodos,
        handleEditAccess,
        handleEditTodo
    };

    return (
        <TodoContext.Provider value={providerValues}>
            {children}
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider };