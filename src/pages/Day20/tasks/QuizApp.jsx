import { useState, useEffect } from "react";

import Quiz from "../components/Quiz";
import Result from "../components/Result";
import questionsData from "../data/questions.json";

const QuizApp = () => {

    const [userName, setUserName] = useState("");

    const [isQuizStart, setIsQuizStart] = useState(false);
    const [isQuizEnd, setIsQuizEnd] = useState(false);

    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [resultHistory, setResultHistory] = useState(() => {
        return JSON.parse(localStorage.getItem("quizResults")) || [];
    });

    // quiz start handle
    const handleQuizStart = (e) => {
        e.preventDefault();

        if (userName.trim()) {
            setIsQuizStart(true);
        }
    };

    //questions loading
    useEffect(() => {
        const questionsArrHandle = () => {
            if (isQuizStart && questions.length === 0) {
                const quizQuestions = [...questionsData].sort(() => Math.random() - 0.5);
                setQuestions(quizQuestions.slice(0, 5));
            }
        };

        questionsArrHandle();
    }, [isQuizStart]);

    // answer handle and next question forward func
    const handleAnswers = (selectedAnswer) => {
        const currentquestion = questions[currentQuestionIndex];
        const isCorrect = selectedAnswer === currentquestion.correctAnswer;

        if (isCorrect) setScore(score => score + 1);

        setAnswers([
            ...answers,
            {
                question: currentquestion.question,
                selectedAnswer,
                isCorrect,
                correctAnswer: currentquestion.correctAnswer
            }
        ]);

        if (currentQuestionIndex + 1 < questions.length) {
            // load next question in the questions array
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            // load the reult component
            const resultValue = {
                userName,
                score: score + (isCorrect ? 1 : 0),
                total: questions.length,
                date: new Date().toLocaleDateString(),
            };

            const resultUpdate = [...resultHistory, resultValue];
            setResultHistory(resultUpdate);
            localStorage.setItem("quizResults", JSON.stringify(resultUpdate));
            setIsQuizEnd(true);
        }
    };

    // restart the quiz
    const restartQuiz = () => {
        setUserName("");
        setQuestions([]);
        setAnswers([]);
        setScore(0);
        setCurrentQuestionIndex(0);
        setIsQuizEnd(false);
        setIsQuizStart(false);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-3 flex justify-center items-center">

            {/* quiz component */}
            <div className="bg-white rounded-xl p-5 shadow">

                {/* name component */}
                {!isQuizStart &&
                    <div className="flex justify-center gap-5 items-center flex-col">
                        <h1 className="font-semibold text-2xl">Answer the quiz questions!</h1>

                        <form
                            onSubmit={handleQuizStart}
                            className="flex gap-3 items-center">
                            <input
                                placeholder="Enter your name..."
                                className="w-full border-2 border-black/30 rounded-xl outline-none px-3 py-2"
                                onChange={(e) => setUserName(e.target.value)}
                            />

                            <button
                                className="bg-blue-500 rounded-xl cursor-pointer px-3 py-2 shadow text-white font-semibold">
                                Start
                            </button>
                        </form>
                    </div>
                }

                {/* quiz component */}
                {isQuizStart && !isQuizEnd && questions.length > 0 &&
                    <Quiz
                        key={currentQuestionIndex}
                        question={questions[currentQuestionIndex]}
                        currentQuestion={currentQuestionIndex + 1}
                        totalQuestions={questions.length}
                        handleAnswers={handleAnswers}
                    />
                }

                {/* result component */}
                {isQuizEnd &&
                    <Result
                        resultHistory={resultHistory}
                        restartQuiz={restartQuiz}
                        answers={answers}
                        score={score}
                        userName={userName}
                        total={questions.length}
                    />
                }

            </div>

        </div>
    );
};

export default QuizApp;