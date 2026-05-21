import { useContext, useState } from "react";

import { ErrorContext } from "../context/ErrorContext";
import { FormContext } from "../context/FormContext";

const Step1 = () => {

    const { errState, handleErrorState } = useContext(ErrorContext);
    const { state, handleNextStep, handleStateChange } = useContext(FormContext);

    const [passType, setPassType] = useState("password");

    const handlePassTypeChange = () => {
        setPassType(prev => prev === "password" ? "text" : "password");
    };

    // validation for name
    const handleNameErr = () => {
        if (state.name === "") {
            handleErrorState("nameErr", "Please fill the name field");
            return;
        }

        if (state.name.length < 3) {
            handleErrorState("nameErr", "Name should be more than 3 words");
            return;
        }

        const nameRegex = /^[a-zA-Z]+$/;

        if (!nameRegex.test(state.name)) {
            handleErrorState("nameErr", "Please enter the valid name");
            return;
        }

        handleErrorState("nameErr", "");
    };

    // validation for email
    const handleEmailErr = () => {
        if (state.email === "") {
            handleErrorState("emailErr", "Please fill the email field");
            return;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailRegex.test(state.email)) {
            handleErrorState("emailErr", "Please enter the valid email");
            return;
        }

        handleErrorState("emailErr", "");
    };

    // validation for password
    const handlePasswordErr = () => {
        if (state.password === "") {
            handleErrorState("passwordErr", "Please fill the password field");
            return;
        }

        if (state.password.length < 8) {
            handleErrorState("passwordErr", "Password should be contain atleast 8 words");
            return;
        }

        if (!(/[A-Z]/.test(state.password))) {
            handleErrorState("passwordErr", "Password must contain one uppercase word");
            return;
        }

        if (!(/[a-z]/.test(state.password))) {
            handleErrorState("passwordErr", "Password must contain one lowercase word");
            return;
        }

        if (!(/[0-9]/.test(state.password))) {
            handleErrorState("passwordErr", "Password must contain one number");
            return;
        }

        if (!(/[@$!%*?&]/.test(state.password))) {
            handleErrorState("passwordErr", "Password must contain one special character");
            return;
        }

        handleErrorState("passwordErr", "");
        handleNextStep();
    };

    // all error handle
    const handleValidation = () => {
        handleNameErr();
        handleEmailErr();
        handlePasswordErr();
    };

    return (
        <div className='w-full flex flex-col gap-5 justify-center items-center p-3'>
            <div className='w-full space-y-3'>
                <div className='flex flex-col justify-center items-start gap-1'>
                    <label className='font-semibold text-sm'>Name:</label>
                    <input
                        placeholder='Enter your name'
                        name='name'
                        type="text"
                        className='w-full border-2 border-black/20 rounded-xl outline-none px-3 py-2 focus:border-blue-500'
                        required
                        value={state.name}
                        onChange={(e) => handleStateChange(e)}
                    />
                    {errState.nameErr !== "" &&
                        <p className='text-xs font-semibold text-red-500'>* {errState.nameErr}</p>
                    }
                </div>

                <div className='flex flex-col justify-center items-start gap-1'>
                    <label className='font-semibold text-sm'>Email:</label>
                    <input
                        placeholder='Enter your email'
                        name='email'
                        type='email'
                        className='w-full border-2 border-black/20 rounded-xl outline-none px-3 py-2 focus:border-blue-500'
                        required
                        value={state.email}
                        onChange={(e) => handleStateChange(e)}
                    />
                    {errState.emailErr !== "" &&
                        <p className='text-xs font-semibold text-red-500'>* {errState.emailErr}</p>
                    }
                </div>

                <div className='flex flex-col justify-center items-start gap-1'>
                    <label className='font-semibold text-sm'>Password:</label>
                    <div className="w-full flex items-center gap-3">
                        <input
                            placeholder='Enter your name'
                            name='password'
                            type={`${passType}`}
                            className='w-full border-2 border-black/20 rounded-xl outline-none px-3 py-2 focus:border-blue-500'
                            required
                            value={state.password}
                            onChange={(e) => handleStateChange(e)}
                        />
                        <button
                            onClick={handlePassTypeChange}
                            className="w-fit rounded-xl px-3 py-2 cursor-pointer border-2 border-black/20 font-semibold text-sm"
                        >
                            {passType === "password" ? "Show" : "Hide"}
                        </button>
                    </div>
                    {errState.passwordErr !== "" &&
                        <p className='text-xs font-semibold text-red-500'>* {errState.passwordErr}</p>
                    }
                </div>
            </div>

            <div className='w-full flex justify-end items-center p-3'>
                <button
                    onClick={handleValidation}
                    className='bg-blue-500 rounded-lg px-3 py-1.5 cursor-pointer hover:bg-blue-600 text-white font-semibold shadow-sm transition-colors duration-300'
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Step1;