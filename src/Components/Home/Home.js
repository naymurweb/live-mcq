import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";
import bgImg from "../Image/img1.jpg";

const Home = () => {
  const data = useLoaderData().data;
  const btnClick=(id)=>{
    console.log(id);
  }
  return (
      <div className="container mx-auto my-6">
        <div className="grid md:grid-cols-2 items-center gap-5 ">
          <div className="">
            <img src={bgImg} alt="" />
          </div>

          <div className="">
            <h1 className="text-6xl my-4 text-teal-400">
              The Best Course  you can get in eLearny
            </h1>
            <p>
              Sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt. Labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5 my-40">
          {data.map((element) => (
            <Course data={element} key={element.id} btn={btnClick}></Course>
          ))}
        </div>
      </div>
  );
};

export default Home;
