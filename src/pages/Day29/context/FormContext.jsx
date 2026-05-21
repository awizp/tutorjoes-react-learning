import { createContext, useReducer } from "react";

const FormContext = createContext();

const initialState = {
    step: 1,
    name: "",
    email: "",
    password: "",
    course: "",
    courseDuration: "",
    paymentVia: "",
    paymentNo: ""
};

const formReducer = (state, action) => {
    switch (action.type) {
        case "NEXT_STEP": {
            return { ...state, step: state.step + 1 };
        }

        case "PREV_STEP": {
            return { ...state, step: state.step === 1 ? 1 : state.step - 1 };
        }

        case "STATE_CHANGE": {
            return { ...state, [action.payload.name]: action.payload.value };
        }

        default:
            return state;
    }
};

const FormProvider = ({ children }) => {

    const [state, dispatch] = useReducer(formReducer, initialState);

    // handle next step
    const handleNextStep = () => {
        dispatch({ type: "NEXT_STEP" });
    };

    // handle prev step
    const handlePrevStep = () => {
        dispatch({ type: "PREV_STEP" });
    };

    // handle state change
    const handleStateChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: "STATE_CHANGE", payload: { name: name, value: value } });
    };

    // form value
    const formProviderValues = {
        state,
        handleNextStep,
        handlePrevStep,
        handleStateChange
    };

    return (
        <FormContext.Provider value={formProviderValues}>
            {children}
        </FormContext.Provider>
    );
};

export { FormContext, FormProvider };