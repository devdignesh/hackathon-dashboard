import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import HackathonCard from "../components/HackathonCard";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Hero from "../components/Hero";
import PageContent from "../components/PageContent";
import HackathonList from "../components/HackathonList";
import { Hackathon } from "../types";
import { Checkbox } from "@mui/material";
import { IoCloseCircle } from "react-icons/io5";
import dayjs, { Dayjs } from "dayjs";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);

  const hackathons = useSelector((state: any) => state.hackathons.list);
  console.log("hackathons====>", hackathons);

  const handleLevelChange = (level: string) => {
    setSelectedLevels((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };

  const handleStatusChange = (status: string) => {
    setSelectedStatus((prev) =>
      prev.includes(status)
        ? prev.filter((l) => l !== status)
        : [...prev, status]
    );
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClearLevel = (level: string) => {
    setSelectedLevels((prev) => prev.filter((l) => l !== level));
  };

  const handleClearStatus = (status: string) => {
    setSelectedStatus((prev) => prev.filter((l) => l !== status));
  };

  const getStatus = (startDate: Dayjs | string, endDate: Dayjs | string) => {
    const now = dayjs();
    const start = dayjs(startDate);
    const end = dayjs(endDate);
    if (now.isBefore(start)) return "Upcoming";
    if (now.isAfter(end)) return "Past";
    return "Active";
  };

  const filteredHackathons = hackathons.filter((hackathon: Hackathon) => {
    const matchesSearch = hackathon.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesLevel =
      selectedLevels.length === 0 || selectedLevels.includes(hackathon.level);

    const status = getStatus(hackathon.startDate, hackathon.endDate);
    const matchesStatus =
      selectedStatus.length === 0 || selectedStatus.includes(status);

    return matchesSearch && matchesLevel && matchesStatus;
  });

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 "
          onClick={() => setIsOpen(false)}
        />
      )}

      <Header />
      <Hero />
      <PageContent />

      <div className="bg-[#002A3B]">
        <div className="max-w-6xl m-auto py-14 px-5">
          <div className="flex flex-col space-y-8 justify-center">
            <div className="flex flex-col justify-center">
              <span className="text-white font-bold text-3xl text-center">
                Explore Challenges
              </span>
            </div>
            <div className="flex flex-row w-full px-20 space-x-10">
              <div className="bg-white px-4 py-2 flex w-full flex-row space-x-4 items-center rounded-md">
                <IoSearchOutline />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-transparent outline-none border-none w-full"
                />
              </div>

              <div className="flex flex-col space-y-4 max-w-32 relative z-30">
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className={`flex justify-between items-center border min-w-44 rounded-md w-full font-semibold border-[#B7B7B7] p-2 bg-white text-black ${
                      isOpen ? "rounded-b-none" : ""
                    } `}
                  >
                    Filter
                    <span
                      className={`ml-2 transform transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <IoIosArrowDown />
                    </span>
                  </button>
                  <div
                    className={`absolute top-full left-0 min-w-44 transition-all duration-100 z-30 ease-in-out overflow-hidden overflow-y-auto ${
                      isOpen ? "max-h-[340px]" : "max-h-0"
                    }`}
                  >
                    <ul className="bg-white text-black border border-[#B7B7B7] shadow-md rounded-b-md">
                    <li className="px-2 py-1">
                        <span>Status</span>
                      </li>

                      {["Active", "Upcoming", "Past"].map((status) => (
                        <li
                          key={status}
                          className="px-2 hover:bg-neutral-400/30 flex flex-row items-center justify-start cursor-pointer"
                        >
                          <Checkbox
                            sx={{ "& .MuiSvgIcon-root": { fontSize: 22 } }}
                            checked={selectedStatus.includes(status)}
                            onChange={() => handleStatusChange(status)}
                          />
                          {status}
                        </li>
                      ))}

                      <li className="px-2 py-1">
                        <span>Level</span>
                      </li>
                      {["Easy", "Medium", "Hard"].map((level) => (
                        <li
                          key={level}
                          className="px-2 hover:bg-neutral-400/30 flex flex-row items-center justify-start cursor-pointer"
                        >
                          <Checkbox
                            sx={{ "& .MuiSvgIcon-root": { fontSize: 22 } }}
                            checked={selectedLevels.includes(level)}
                            onChange={() => handleLevelChange(level)}
                          />
                          {level}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap px-20 space-x-4">
               
              {selectedLevels.map((level) => (
                <p
                  key={level}
                  className="px-4 py-1 bg-[#F8F9FD7D] flex flex-row space-x-2 justify-center cursor-default items-center text-sm rounded-3xl text-white "
                >
                  <span>{level}</span>
                  <IoCloseCircle
                    size={18}
                    className="cursor-pointer"
                    onClick={() => handleClearLevel(level)}
                  />
                </p>
              ))}
              {selectedStatus.map((status) => (
                <p
                  key={status}
                  className="px-4 py-1 bg-[#F8F9FD7D] flex flex-row space-x-2 justify-center cursor-default items-center text-sm rounded-3xl text-white "
                >
                  <span>{status}</span>
                  <IoCloseCircle
                    size={18}
                    className="cursor-pointer"
                    onClick={() => handleStatusChange(status)}
                  />
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {filteredHackathons && <HackathonList data={filteredHackathons} />}
    </>
  );
};

export default Dashboard;
