import React, { useState } from "react";
import Questions from "../data/question.json";

const Main = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnsweredOption = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Questions.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="p-4 bg-gray-100 m-4 lg:w-2/4 w-3/4 mx-auto rounded-lg">
      {showScore ? (
        <div>
          <h1>
            Your score {score} out of {Questions.questions.length}
          </h1>
        </div>
      ) : (
        <div className="flex">
          <div className="mr-8">
            <span>
              Question {currentQuestion + 1}/{Questions.questions.length}
            </span>
            <h1 className="font-bold">
              {Questions.questions[currentQuestion].title}
            </h1>
          </div>

          <ul className="">
            {Questions.questions[currentQuestion].options.map(
              (answerOption) => (
                <li
                  className="m-1 bg-purple-400 cursor-pointer text-white px-2 rounded"
                  onClick={() => handleAnsweredOption(answerOption.isCorrect)}
                >
                  {answerOption.answer}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Main;
