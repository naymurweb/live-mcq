import {
  BeakerIcon,
  EyeDropperIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";
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
      toast.error(`wrongAnswer`);
    }
  };
  const rightAns = () => {
    toast.success(correctAnswer);
  };
  const questionText = question.slice(3, question.length - 4);

  return (
    <div className="bg-teal-200 my-5  p-6 mx-auto rounded">
      <div className="flex justify-between items-center">
        <p className="text-2xl text-start mt-4 mb-6">{questionText}</p>
        <EyeSlashIcon onClick={rightAns} className="h-6 w-6 text-red-500" />
      </div>

      <div className={`grid grid-cols-2 gap-2 text-lg justify-items-start`}>
        {options.map((quiz, index) => (
          <p key={index}>
            <button
              onClick={() => quizHandaler(quiz)}
              className={`border border-blue-800 hover:bg-blue-300 p-3 rounded text-start ${
                isFalse ? "bg-red-500" : "bg-teal-200"
              }`}
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
