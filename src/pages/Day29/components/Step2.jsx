import { useContext } from "react";

import { ErrorContext } from "../context/ErrorContext";
import { FormContext } from "../context/FormContext";

const Step2 = () => {

    const { errState, handleErrorState } = useContext(ErrorContext);
    const { state, handleNextStep, handlePrevStep, handleStateChange } = useContext(FormContext);

    // handle course validation
    const handleCourseErr = () => {
        if (state.course === "") {
            handleErrorState("courseErr", "Please pick one of the courses");
            return;
        }

        handleErrorState("courseErr", "");
    };

    // handle course duration error
    const handleDurationErr = () => {
        if (state.courseDuration === "") {
            handleErrorState("courseDurationErr", "Please pick one of the course durations");
            return;
        }

        handleErrorState("courseDurationErr", "");
        handleNextStep();
    };

    const handleValidation = () => {
        handleCourseErr();
        handleDurationErr();
    };

    return (
        <div className='w-full flex flex-col gap-5 justify-center items-center p-3'>
            <div className='w-full space-y-3'>
                <div className='flex flex-col justify-center items-start gap-1'>
                    <p className='font-semibold text-sm'>What is the program you want to choose?</p>
                    {
                        ["frontend", "backend", "fullstack"].map((program, idx) => (
                            <label
                                key={idx}
                                className="flex items-center gap-3 capitalize"
                            >
                                <input
                                    name='course'
                                    type="radio"
                                    className="accent-blue-500"
                                    value={program}
                                    checked={state.course === program}
                                    onChange={(e) => handleStateChange(e)}
                                />
                                {program}
                            </label>
                        ))
                    }
                    {errState.courseErr !== "" &&
                        <p className='text-xs font-semibold text-red-500'>* {errState.courseErr}</p>
                    }
                </div>

                <div className='flex flex-col justify-center items-start gap-1'>
                    <p className='font-semibold text-sm'>What is the duration you prefer?</p>
                    {
                        ["3 months", "6 months", "1 year"].map((duration, idx) => (
                            <label
                                key={idx}
                                className="flex items-center gap-3 capitalize"
                            >
                                <input
                                    name='courseDuration'
                                    type="radio"
                                    className="accent-blue-500"
                                    value={duration}
                                    checked={state.courseDuration === duration}
                                    onChange={(e) => handleStateChange(e)}
                                />
                                {duration}
                            </label>
                        ))
                    }
                    {errState.courseDurationErr !== "" &&
                        <p className='text-xs font-semibold text-red-500'>* {errState.courseDurationErr}</p>
                    }
                </div>
            </div>

            <div className='w-full flex justify-between items-center p-3'>
                <button
                    className='ring ring-blue-500 rounded-lg px-3 py-1.5 cursor-pointer text-blue-700 font-semibold shadow-sm transition-colors duration-300'
                    onClick={handlePrevStep}
                >
                    Prev
                </button>
                <button
                    className='bg-blue-500 rounded-lg px-3 py-1.5 cursor-pointer hover:bg-blue-600 text-white font-semibold shadow-sm transition-colors duration-300'
                    onClick={handleValidation}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Step2;