import React from "react";
import { Link } from "react-router-dom";

const Course = ({ data}) => {
    // console.log(data);
  const { id, name, logo } = data;
  return (
    <div className="bg-red-400 rounded  flex items-center px-6">
      <div>
        <img className="w-6/12" src={logo} alt="" />
      </div>

      <div>
        <h1 className="text-4xl my-3">{name}</h1>
        <button  className="bg-teal-400 py-2 px-6 rounded ">
            <Link to={`/course/${data.id}`}>start practice</Link>
        </button>
      </div>
    </div>
  );
};

export default Course;
