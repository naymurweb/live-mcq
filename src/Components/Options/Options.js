import React, { useState } from "react";
import toast from "react-hot-toast";
import "./Options.css";

const Options = ({ data }) => {
  const { options, question, correctAnswer, id } = data;

  const [isFalse, setIsfalse] = useState(false);
  const quizHandaler = (ans) => {
    if (ans === correctAnswer) {
      setIsfalse(false);
      toast.success(`RightAnswer`);
    } else {
      setIsfalse(true);
      toast.success(`${correctAnswer}`);
    }

  };
  const questionText = question.slice(3, question.length - 4);

  return (
    <div className={`bg-teal-200 my-5  p-6 mx-auto rounded `}>
      <p className="text-2xl text-start my-4">{questionText}</p>

      <div
        className={`grid grid-cols-2 gap-4 text-lg justify-items-start text-start `}
      >
        {options.map((quiz, index) => (
          <p key={index}>
            <button
              onClick={() => quizHandaler(quiz)}
              className={`  ${isFalse ? "bg-red-500" : "bg-teal-200"}`}
            >
              {quiz}
            </button>   
          </p>
        ))}
      </div>
    </div>
  );
};

export default Options;
