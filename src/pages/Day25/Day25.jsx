import ReducerSyntax from "./tasks/ReducerSyntax";
import "./style.css";

const Day25 = () => {
    return (
        <div>
            <title>Counter with useReducer</title>
            <ReducerSyntax initialState={5} />
        </div>
    );
};

export default Day25;