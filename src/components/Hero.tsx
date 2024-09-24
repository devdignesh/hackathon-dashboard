import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();

  return (
    <>
      <div className="bg-[#003145]">
        <div className="max-w-6xl m-auto py-14 px-5">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center text-white">
            <div className="flex flex-col flex-wrap space-y-10 max-w-lg">
              <span className="md:text-[42px] text-3xl font-semibold md:leading-[50px]">
                Accelerate Innovation with Global AI Challenges
              </span>
              <span className="text-sm">
                AI Challenges at DPhi simulate real-world problems. It is a
                great place to put your AI/Data Science skills to test on
                diverse datasets allowing you to foster learning through
                competitions.
              </span>
              <div>
                <button
                  onClick={() => navigate("/create-hackathon")}
                  className="bg-white text-black text-sm font-semibold py-2 px-4 rounded-md"
                >
                  Create Challenge
                </button>
              </div>
            </div>
            <div className="">
              <img src="/images/picsArt.png" alt="" className="md:w-[250px] w-[200px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#002A3B]">
        <div className="max-w-6xl m-auto md:py-12 md:px-5 py-8 px-2">
          <div className="flex flex-col space-y-6 md:space-y-0 justify-center md:flex-row items-center text-white md:justify-between">
            <div className="flex flex-row space-x-4">
              <img src="/images/group1.png" alt="" className="h-14 w-14" />
              <div className="flex flex-col">
                <span className="text-xl font-semibold">100k+</span>
                <span className="text-sm">Al model submissions</span>
              </div>
            </div>
            <div className="flex flex-row space-x-4">
              <img src="/images/group1.png" alt="" className="h-14 w-14" />
              <div className="flex flex-col">
                <span className="text-xl font-semibold">100k+</span>
                <span className="text-sm">Al model submissions</span>
              </div>
            </div>
            <div className="flex flex-row space-x-4">
              <img src="/images/group1.png" alt="" className="h-14 w-14" />
              <div className="flex flex-col">
                <span className="text-xl font-semibold">100k+</span>
                <span className="text-sm">Al model submissions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
