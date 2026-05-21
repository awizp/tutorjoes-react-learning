import MultistepForm from "./tasks/MultistepForm";
import { FormProvider } from "./context/FormContext";
import { ErrorProvider } from "./context/ErrorContext";
import "./style.css";

const Day29 = () => {
    return (
        <div className="w-full md:w-[45%] mx-auto flex justify-center items-center p-10">
            <title>Multistep form with useReducer</title>
            <FormProvider>
                <ErrorProvider>
                    <MultistepForm />
                </ErrorProvider>
            </FormProvider>
        </div>

    );
};

export default Day29;