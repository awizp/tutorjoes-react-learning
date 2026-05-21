import { useContext } from "react";

import { FormContext } from "../context/FormContext";
import { ErrorContext } from "../context/ErrorContext";

const Step3 = () => {

    const { errState, handleErrorState } = useContext(ErrorContext);
    const { state, handlePrevStep, handleStateChange } = useContext(FormContext);

    // handle submition
    const handleSubmit = () => {

    };

    // handle payment method error
    const handlePayViaErr = () => {
        if (state.paymentVia === "") {
            handleErrorState("paymentViaErr", "Please choose one of the payment method");
            return;
        }

        handleErrorState("paymentViaErr", "");
    };

    // validation for payment number
    const handlePaymentNoErr = () => {
        if (state.paymentNo == "") {
            handleErrorState("paymentNoErr", "Please fill the payment number");
            return;
        }

        if (!(/^[0-9]*$/.test(state.paymentNo))) {
            handleErrorState("paymentNoErr", "Payment number should be in valid numbers");
            return;
        }

        if (state.paymentNo.length !== 12) {
            handleErrorState("paymentNoErr", "Payment number should be maintain 12 numbers");
            return;
        }

        handleErrorState("paymentNoErr", "");

        alert(`
            Hi ${state.name}, 
            Your ${state.course} course with ${state.courseDuration} duration
            added with your account ${state.email}
            payment details sent on this ${state.paymentNo}
            `);
    };

    const handleValidation = () => {
        handlePayViaErr();
        handlePaymentNoErr();
    };

    return (
        <div className='w-full flex flex-col gap-5 justify-center items-center p-3'>
            <div className='w-full space-y-3'>
                <div className='flex flex-col justify-center items-start gap-1'>
                    <p className='font-semibold text-sm'>What is the payment method?</p>
                    {
                        ["UPI", "gpay", "card"].map((payment, idx) => (
                            <label
                                key={idx}
                                className="flex items-center gap-3 capitalize"
                            >
                                <input
                                    name='paymentVia'
                                    type="radio"
                                    className="accent-blue-500"
                                    value={payment}
                                    checked={state.paymentVia === payment}
                                    onChange={(e) => handleStateChange(e)}
                                />
                                {payment}
                            </label>
                        ))
                    }
                    {errState.paymentViaErr !== "" &&
                        <p className='text-xs font-semibold text-red-500'>* {errState.paymentViaErr}</p>
                    }
                </div>

                <div className='flex flex-col justify-center items-start gap-1'>
                    <p className='font-semibold text-sm'>Payment number details?</p>
                    <input
                        placeholder='Enter card details'
                        name='paymentNo'
                        type="text"
                        className="w-full border-2 border-black/20 rounded-xl outline-none px-3 py-2 focus:border-blue-500"
                        required
                        value={state.paymentNo}
                        onChange={(e) => handleStateChange(e)}
                    />
                    {errState.paymentNoErr !== "" &&
                        <p className='text-xs font-semibold text-red-500'>* {errState.paymentNoErr}</p>
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
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Step3;