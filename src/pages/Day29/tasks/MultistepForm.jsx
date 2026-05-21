import { useContext } from "react";

import { FormContext } from "../context/FormContext";
import { Step1, Step2, Step3 } from "../components";

const MultistepForm = () => {

    const { state } = useContext(FormContext);

    const stepBasedForm = () => {
        switch (state.step) {
            case 1:
                return <Step1 />;
            case 2:
                return <Step2 />;
            case 3:
                return <Step3 />;
            default:
                return <p>No such step is found!</p>;
        }
    };

    return (
        <div className="w-full space-y-5">
            <h1 className="font-bold text-center text-xl">Multistep Form based on useReducer</h1>

            <div className="w-full flex flex-col gap-10 items-center p-5 rounded-2xl shadow-lg border border-black/10">

                <div className="flex gap-10 items-center">
                    {
                        [1, 2, 3].map((step, idx) => (
                            <div
                                className={`w-8 h-8 rounded-full shadow flex justify-center items-center font-semibold ${state.step === step ? "bg-blue-500 text-white" : "bg-blue-200"}`}
                            >
                                {step}
                            </div>
                        ))
                    }
                </div>

                {stepBasedForm()}
            </div>
        </div>
    );

};

export default MultistepForm;