const Result = ({ resultHistory, restartQuiz, answers, score, userName, total }) => {

    const groupedResult = resultHistory.reduce((acc, result) => {
        if (!acc[result.userName]) {
            acc[result.userName] = [];
        }
        acc[result.userName].push(result);
        return acc;
    }, {});

    return (
        <div className="flex justify-center items-center flex-col gap-3">

            <div className="w-full text-center space-y-2">
                <h1 className="font-semibold text-2xl">Results</h1>

                <p className="font-semibold text-gray-700">Welldone, {userName}! You scored {score} of {total}</p>
            </div>

            <div className="space-x-3">
                <h3 className="font-semibold text-blue-700">Your answers</h3>

                <div className="space-y-2">
                    {answers.map((answer, idx) => (
                        <div key={idx} className="space-y-2 bg-gray-50 p-2 rounded-xl">
                            <h3 className="text-blue-900 font-semibold">{answer.question}</h3>
                            <p className="font-semibold">
                                {
                                    answer.isCorrect ?
                                        <span className="text-green-500">{answer.selectedAnswer}</span> :
                                        <span className="space-x-3">
                                            <span className="text-red-500">
                                                {answer.selectedAnswer === null ? "Not attended" : answer.selectedAnswer}
                                            </span>
                                            <span className="text-green-500">
                                                {answer.correctAnswer}
                                            </span>
                                        </span>
                                }
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full space-y-3">

                <h3 className="font-semibold text-blue-700">Result history</h3>

                {groupedResult.length === 0 ? "No history found" :
                    <table className="w-full text-sm text-center text-gray-800 border">
                        <thead className="bg-blue-100">
                            <tr className="font-semibold">
                                <td className="border p-2">Name</td>
                                <td className="border p-2">Date</td>
                                <td className="border p-2">Score</td>
                                <td className="border p-2">Total</td>
                            </tr>
                        </thead>

                        <tbody>
                            {Object.entries(groupedResult).map(([name, results], idx) => (
                                results.map((result, resIdx) => (
                                    <tr
                                        key={resIdx}
                                        className="text-left"
                                    >
                                        {
                                            resIdx === 0 ?
                                                <td className="p-2 border align-top" rowSpan={results.length}>{result.userName}</td> :
                                                null
                                        }
                                        <td className="p-2 border">{result.date}</td>
                                        <td className="p-2 border">{result.score}</td>
                                        <td className="p-2 border">{result.total}</td>
                                    </tr>
                                ))
                            ))}
                        </tbody>
                    </table>}
            </div>

            <button
                onClick={restartQuiz}
                className="w-full bg-blue-500 rounded-xl cursor-pointer px-3 py-2 shadow text-white font-semibold">
                Restart
            </button>
        </div>
    );
};

export default Result;