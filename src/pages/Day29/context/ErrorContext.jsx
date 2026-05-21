import { createContext, useReducer } from "react";

const ErrorContext = createContext();

const initialState = {
    nameErr: "",
    emailErr: "",
    passwordErr: "",
    courseErr: "",
    courseDurationErr: "",
    paymentViaErr: "",
    paymentNoErr: ""
};

const errorReducer = (state, action) => {
    switch (action.type) {
        case "ERR_HANDLE":
            return { ...state, [action.payload.name]: action.payload.value };

        default:
            return state;
    }
};

const ErrorProvider = ({ children }) => {

    const [state, dispatch] = useReducer(errorReducer, initialState);

    const handleErrorState = (errName, errValue) => {
        dispatch({ type: "ERR_HANDLE", payload: { name: errName, value: errValue } });
    };

    // handle error values
    const errorValues = {
        errState: state,
        handleErrorState
    };

    return (
        <ErrorContext.Provider value={errorValues}>
            {children}
        </ErrorContext.Provider>
    );
};

export { ErrorContext, ErrorProvider };