import React from "react";
import HackathonCard from "./HackathonCard";
import { Hackathon } from "../types";

const HackathonList = ({data}:{data:Hackathon[]}) => {
  return (
    <>
      <div className="bg-[#003145] ">
        <div className="max-w-6xl m-auto py-12 px-5 min-h-72">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {data.map((item:any) => (
              <>
                <HackathonCard data={item} key={item.id} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HackathonList;
