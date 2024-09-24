import React, { useEffect, useState } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { FaImage } from "react-icons/fa"; 
import { useDispatch } from "react-redux";
import { Hackathon } from "../types";
import dayjs, { Dayjs } from "dayjs";
import { addHackathon, updateHackathon } from "../store/slices/hackathonsSlice";
import { useNavigate } from "react-router-dom";

interface HackathonFormProps {
  hackathon?: Hackathon;  
}

const HackathonForm = ({ hackathon }:HackathonFormProps) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("Easy");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState<any>(null);
  const [endDate, setEndDate] = useState<any>(null);
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  useEffect(() => {
    if (hackathon) {
      setName(hackathon.name);
      setStartDate(hackathon.startDate);
      setEndDate(hackathon.endDate);
      setDescription(hackathon.description);
      setSelectedLevel(hackathon.level);
      setSelectedImage(hackathon.image);
    }
  }, [hackathon]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log("file===>",file);

    if (file) {
      console.log("URL file===>",URL.createObjectURL(file));
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (level: string) => {
    setSelectedLevel(level);
    setIsOpen(false);
  };

  const handleSubmit = () => {
    const newHackathon = {
      id: hackathon ? hackathon.id : Date.now(),  
      name,
      startDate: startDate || "",
      endDate: endDate || "",
      description,
      image: selectedImage || "",
      level: selectedLevel,
    };

    console.log("newHackathon=========", newHackathon);
    
    if (hackathon) {
      dispatch(updateHackathon(newHackathon));  
    } else {
      dispatch(addHackathon(newHackathon));  

    }

    navigate("/");

  };
  

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 "
          onClick={() => setIsOpen(false)}
        />
      )}
      <div className="bg-[#F8F9FD]">
        <div className="max-w-7xl m-auto py-8 px-5">
          <span className="text-xl md:text-2xl capitalize font-bold">
          {hackathon ? "Update Challenge" : "Create Challenge"}
          </span>
        </div>
      </div>
      <div className="max-w-7xl m-auto py-8 px-5">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-4 max-w-md">
            <span className="md:text-base text-sm font-medium">Challenge Name</span>
            <input
              type="text"
              value={name} 
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent border border-[#B7B7B7] rounded-md py-2 px-2 placeholder:text-sm outline-none"
              placeholder="Challenge Name"
            />
          </div>
          <div className="flex flex-col space-y-4 max-w-md">
            <span className="md:text-base text-sm font-medium">Start date</span>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateTimePicker"]}>
                <DateTimePicker label="Add start date" className="p-0 m-0" onChange={(date) => setStartDate(date)} value={startDate}/>
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div className="flex flex-col space-y-4 max-w-md">
            <span className="md:text-base text-sm font-medium">End date</span>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateTimePicker"]}>
                <DateTimePicker label="Add end date" className="p-0 m-0"  onChange={(date) => setEndDate(date)} value={endDate}/>
              </DemoContainer>
            </LocalizationProvider>
          </div>

          <div className="flex flex-col space-y-4 max-w-2xl">
            <span className="md:text-base text-sm font-medium">Description</span>
            <textarea
              name="textarea"
              value={description} 
              onChange={(e) => setDescription(e.target.value)}
              className="bg-transparent border p-1 border-[#B7B7B7] rounded-md  px-2 placeholder:text-sm outline-none"
              rows={8}
            ></textarea>
          </div>
          <div className="flex flex-col space-y-4 max-w-40">
            <span className="md:text-base text-sm font-medium">Image</span>

            <input
              type="file"
              onChange={handleImageUpload}
              id="upload"
              hidden
              accept="image/png, image/jpeg"
            />

            {!selectedImage ? (
              <label
                htmlFor="upload"
                className="cursor-pointer text-center flex flex-row justify-center items-center gap-2 text-[#666666] hover:bg-[#cfcfcf] hover:text-black transition-all duration-200 py-[6px] capitalize rounded-md text-sm bg-[#F4F4F4] border border-[#D9D9D9]"
              >
                upload
                <IoMdCloudUpload size={18} />
              </label>
            ) :( 
                <div className="w-full">
                <div className="bg-[#F8F9FD] p-4 flex flex-col w-[250px] rounded-md border border-[#D1D5DB]">
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="rounded-md object-cover h-[120px] w-full"
                  />

                  <label
                    className="flex flex-row gap-2 text-green-700 items-center text-sm mt-4 cursor-pointer"
                    htmlFor="upload"
                  >
                    <FaImage size={16} />
                    Change image
                  </label>
                </div>
                
              </div>
            )
            }
             
          </div>

          <div className="flex flex-col space-y-4 max-w-40 relative z-30">
            <span className="text-base font-medium">Level Type</span>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className={`flex justify-between items-center border rounded-md w-full border-[#B7B7B7] p-2 bg-white text-black ${
                  isOpen ? "rounded-b-none" : ""
                } `}
              >
                {selectedLevel}
                <span
                  className={`ml-2 transform transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <IoIosArrowDown />
                </span>
              </button>
              <div
                className={`absolute top-full left-0 w-full transition-all duration-100 z-30 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-60" : "max-h-0"
                }`}
              >
                <ul className="bg-white text-black border border-[#B7B7B7] shadow-md rounded-b-md">
                  <li
                    className="p-2 hover:bg-neutral-400/30 cursor-pointer"
                    onClick={() => handleSelect("Easy")}
                  >
                    Easy
                  </li>
                  <li
                    className="p-2 hover:bg-neutral-400/30 cursor-pointer"
                    onClick={() => handleSelect("Medium")}
                  >
                    Medium
                  </li>
                  <li
                    className="p-2 hover:bg-neutral-400/30 cursor-pointer"
                    onClick={() => handleSelect("Hard")}
                  >
                    Hard
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button className="bg-[#44924C] hover:bg-[#33773a] transition-all duration-200 py-2 px-6 rounded-md text-white" onClick={handleSubmit}>
          {hackathon ? "Save Changes" : "Create Challenge"}
          </button>
        </div>
      </div>
    </>
  );
};

export default HackathonForm;
