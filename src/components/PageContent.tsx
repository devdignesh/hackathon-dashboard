import React from "react";

const PageContent = () => {
  return (
    <>
      <div className="max-w-6xl m-auto py-20 px-5">
        <div className="flex flex-row justify-center items-center">
          <p className="text-black font-bold text-[26px]">
            Why Participate in{" "}
            <span className="text-green-800">AI Challenges?</span>
          </p>
        </div>
        <div className="flex flex-col space-y-10 mt-16">
          <div className="flex flex-row space-x-10">
            <div className="flex flex-col space-y-3 py-10 px-6 w-full bg-[#F8F9FD] rounded-2xl">
              <img
                src="/images/carbon_notebook-reference.png"
                alt=""
                className="h-8 w-9"
              />
              <span className="text-xl font-bold text-black">
                Prove your skill
              </span>
              <span className="text-sm text-neutral-700">
                Gain substantial experience by solving real-world problems and
                pit against others to come up with innovative solutions.
              </span>
            </div>
            <div className="flex flex-col space-y-3 py-10 px-6 w-full bg-[#F8F9FD] rounded-2xl">
              <img
                src="/images/carbon_notebook-reference.png"
                alt=""
                className="h-8 w-9"
              />
              <span className="text-xl font-bold text-black">
                Learn from community
              </span>
              <span className="text-sm text-neutral-700">
                One can look and analyze the solutions submitted by the other
                Data Scientists in the community and learn from them.
              </span>
            </div>
          </div>
          <div className="flex flex-row space-x-10">
            <div className="flex flex-col space-y-3 py-10 px-6 w-full bg-[#F8F9FD] rounded-2xl">
              <img
                src="/images/carbon_notebook-reference.png"
                alt=""
                className="h-8 w-9"
              />
              <span className="text-xl font-bold text-black">
                Challenge yourself
              </span>
              <span className="text-sm text-neutral-700">
                There is nothing for you to lose by participating in a
                challenge. You can fail safe, learn out of the entire experience
                and bounce back harder.
              </span>
            </div>
            <div className="flex flex-col space-y-3 py-10 px-6 w-full bg-[#F8F9FD] rounded-2xl">
              <img
                src="/images/carbon_notebook-reference.png"
                alt=""
                className="h-8 w-9"
              />
              <span className="text-xl font-bold text-black">
                Earn recognition
              </span>
              <span className="text-sm text-neutral-700">
                You will stand out from the crowd if you do well in AI
                challenges, it not only helps you shine in the community but
                also earns rewards.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageContent;
