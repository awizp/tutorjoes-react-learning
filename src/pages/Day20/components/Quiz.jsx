import { useEffect, useState } from "react";

const Quiz = ({ question, currentQuestion, totalQuestions, handleAnswers }) => {

    const [selectedOption, setSelectedOption] = useState(null);
    const [timeLeft, setTimeLeft] = useState(10);

    // handle the selected option forward to handleAnswer func,
    const handleSelectedAnswer = (optionVal) => {
        if (!selectedOption) {
            setSelectedOption(optionVal);
            handleAnswers(optionVal);
        }
    };

    // reset values when question changes
    useEffect(() => {
        const resetfunc = () => {
            setSelectedOption(null);
            setTimeLeft(10);
        };

        resetfunc();
    }, [question]);

    // counting time left when state changes
    useEffect(() => {
        if (timeLeft === 0) {
            handleAnswers(null);
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, handleAnswers]);

    return (
        <div className="w-full flex flex-col gap-5">

            {/* question index */}
            <p className="text-gray-600 text-xs font-semibold">Question {currentQuestion} of {totalQuestions}</p>

            {/* actual question */}
            <p className="font-semibold">{question.question}</p>

            {/* time component */}
            <div className="space-y-1.5">
                <p className="text-sm">Time left: {timeLeft}s</p>

                <div className="w-full h-2 overflow-hidden rounded-full bg-gray-50">
                    <div style={{ width: `${(timeLeft / 10) * 100}%` }}
                        className="h-2 rounded-full bg-blue-500"></div>
                </div>
            </div>

            {/* quetion options */}
            <div className="w-full space-y-3">
                {question.options.map((option, idx) => (
                    <button
                        key={idx}
                        className={`w-full px-3 py-2 cursor-pointer rounded-xl border border-black/20 shadow ${selectedOption === option && "bg-blue-500 text-white font-semibold"}`}
                        onClick={() => handleSelectedAnswer(option)}
                    >{option}</button>
                ))}
            </div>

        </div>
    );
};

export default Quiz;