import { useReducer } from "react";

const ReducerSyntax = ({ initialState }) => {

    // determines what is initial state in object (if init 3rd value used in reducer it won't be needed)
    // const initialState = { count: 0 };

    // reducer function determines what gonna change in our state
    const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return { count: state.count + 1 };
            case "decrement":
                return { count: state.count === 0 ? 0 : state.count - 1 };
            case "reset":
                return { count: 0 };
            default:
                throw new Error(`This is not an action ${action.type}`);
        }
    };

    // this one is optional but used to set initial state
    const init = (initialValue) => {
        return { count: initialValue };
    };

    const [state, dispatch] = useReducer(reducer, initialState, init);

    return (
        <div className="w-full md:w-[50%] mx-auto p-10 flex flex-col gap-10 justify-center items-center">
            <h1 className="font-semibold">useReducer basic syntax using counter app</h1>

            <div className="w-full flex flex-col gap-5 justify-center">

                <p className="text-2xl font-semibold">
                    Count value : <span className="text-blue-700">{state.count}</span>
                </p>

                <div className="flex gap-3 items-center">
                    <button
                        className="btn-style"
                        onClick={() => dispatch({ type: "increment" })}
                    >Inc</button>
                    <button
                        className="btn-style"
                        onClick={() => dispatch({ type: "decrement" })}
                    >Dec</button>
                    <button
                        className="btn-style"
                        onClick={() => dispatch({ type: "reset" })}
                    >Reset</button>
                </div>
            </div>
        </div>
    );
};

export default ReducerSyntax;