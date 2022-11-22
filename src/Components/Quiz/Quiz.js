import React from "react";
import { useLoaderData } from "react-router-dom";
import Options from "../Options/Options";

const Quiz = () => {
  const { questions, total, name } = useLoaderData().data;
  // console.log(questions);
  return (
    <div className="container mx-auto">
    <div className="grid grid-cols-4 gap-5">
      <div className="col-span-3">
        <h3 className="text-4xl font-semibold my-7">MCQ of {name}</h3>
        {questions.map((data,index) => (
          <Options data={data} key={index}></Options>
        ))}
      </div>
      <div className="col-span-1 bg-red-300">
        <h1 className="text-2xl p-5">total quiz: {total}</h1>
      </div>
    </div>

    </div>
  );
};

export default Quiz;
