import React from "react";
import Header from "./Header";
import { HiChartBar } from "react-icons/hi2";
import { Hackathon } from "../types";
import { HiMiniChartBar } from "react-icons/hi2";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { FaRegClock } from "react-icons/fa";
import { removeHackathon } from "../store/slices/hackathonsSlice";


const HackathonDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const hackathon = useSelector((state: any) =>
    state.hackathons.list.find((hackathon: any) => {
      console.log("hackathon ID=====", id);

      return hackathon.id === Number(id);
    })
  );

  const now = dayjs();
  const isActive =
    now.isAfter(hackathon.startDate) && now.isBefore(hackathon.endDate);
  const isUpcoming = now.isBefore(hackathon.startDate);
  const isPast = now.isAfter(hackathon.endDate);

  if (!hackathon) {
    return (
      <>
        <Header />
        <div className="max-w-6xl m-auto py-8 px-5">
          <span>Hackathon not found</span>
        </div>
      </>
    );
  }
  console.log("hackathon======", hackathon);

  const handleDelete = () => {
    dispatch(removeHackathon(hackathon.id));
    navigate("/"); // redirect to home page after successful deletion
  };

  const handleEdit = () => {
    navigate(`/createHackathon/${hackathon.id}`);
  };

  return (
    <>
      <Header />

      <div className="bg-[#003145]">
        <div className="max-w-6xl m-auto py-12 px-5">
          <div className="flex flex-row justify-start items-start ">
             
            {(isActive || isUpcoming) && (
              <>
                <span
                  className={`${
                    isActive ? "bg-[#a8ffa8] " : "bg-[#FFCE5C]"
                  } px-4 py-1 rounded-md flex items-center font-semibold text-sm`}
                >
                  <FaRegClock className="mr-2"/>
                  {isActive
                    ? `Ends on ${dayjs(hackathon.endDate).format(
                        "DD MMM'YY hh:mm A"
                      )} (India Standard Time)`
                    : `Starts on ${dayjs(hackathon.startDate).format(
                        "DD MMM'YY hh:mm A"
                      )} (India Standard Time)`}
                </span>
              </>
            )}
            {isPast && (
              <>
                <span className="bg-[#ff9aa3] flex items-center px-4 py-1 rounded-md font-semibold text-sm">
                  <FaRegClock className="mr-2"/>
                  Ended on{" "}
                  {dayjs(hackathon.endDate).format("DD MMM'YY hh:mm A")} (India
                  Standard Time)
                </span>
              </>
            )}
          </div>
          <div className="flex flex-col justify-start items-start">
            <span className="text-white text-4xl capitalize font-bold mt-4">
              {hackathon.name}
            </span>
            <span className="text-white mt-6">
              Identify the class to which each butterfly belongs to
            </span>
            <span className="text-neutral-700 bg-white px-3 py-1 rounded-md flex mt-10 flex-row items-center font-semibold ">
              <HiMiniChartBar size={18} className="mr-2" /> {hackathon.level}
            </span>
          </div>
        </div>
      </div>
      <div className="shadow-md">
        <div className="max-w-6xl m-auto flex flex-row justify-between pt-4 px-5">
          <span className="text-black font-semibold border-b-4 border-[#44924C] px-4 pb-2">
            Overview
          </span>

          <div className="space-x-4">
            <span className="bg-[#44924C] py-2 px-4 cursor-pointer text-white text-sm font-semibold rounded-md" onClick={handleEdit}>
              Edit
            </span>
            <span className="bg-white border border-red-600 py-2 px-4 cursor-pointer text-red-600 font-semibold text-sm  rounded-md" onClick={handleDelete}>
              Delete
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl m-auto py-12 px-5">
        <span>{hackathon.description}</span>
      </div>
    </>
  );
};

export default HackathonDetails;
