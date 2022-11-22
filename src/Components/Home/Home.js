import React from "react";
import bgImg from "../Image/img1.jpg";

const Home = () => {
  return (

      <div className="container mx-auto">
        <div className="grid grid-cols-2 items-center gap-5 ">

          <div className="">
            <img src={bgImg} alt="" />
          </div>

          <div className="">
            <h1 className="text-6xl my-4">The Best Course you can get in eLearny</h1>
            <p>Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
         
        </div>
      </div>
  );
};

export default Home;
