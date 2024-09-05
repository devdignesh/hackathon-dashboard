import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Hackathon } from "../types";
import { calculateTimeLeft } from "../utils/calculateTimeLeft";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const HackathonCard = ({ data }: { data: Hackathon }) => {

  const now = dayjs();
  const startTimeLeft = calculateTimeLeft(dayjs(data.startDate));
  const endTimeLeft = calculateTimeLeft(dayjs(data.endDate));

  const isActive = now.isAfter(data.startDate) && now.isBefore(data.endDate);
  const isUpcoming = now.isBefore(data.startDate);
  const isPast = now.isAfter(data.endDate);

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/hackathonDetails/${data.id}`);
  };

  return (
    <div className="flex flex-col rounded-2xl overflow-hidden shadow-md cursor-pointer hover:scale-95 transition-all duration-200 bg-white "  onClick={handleCardClick}>
      <img src={data.image} alt="" className="w-full object-cover" />
      <div className="flex flex-col items-center bg-white  space-y-4 p-6">
        {isUpcoming && (
          <span className="text-sm items-center rounded-lg bg-[#F2C94C40] text-black px-3 py-1">
            Upcoming
          </span>
        )}
        {isActive && (
          <span className="text-sm items-center rounded-lg bg-[#38c96f40] text-black px-3 py-1">
            Active
          </span>
        )}
        {isPast && (
          <span className="text-sm items-center rounded-lg bg-[#f24c4c40] text-black px-3 py-1">
            Past
          </span>
        )}
        <span className="text-black font-semibold text-center">
          {data.name}
        </span>

        <div className="flex flex-col justify-center">
          {isUpcoming && startTimeLeft && ( 
            <>
              <span className="text-black text-sm font-semibold text-center">
                Starts in
              </span>
              <div className="flex flex-row mt-1 ">
                <div className="flex flex-col justify-center items-center">
                  <span className="text-black font-semibold text-xl">
                    {startTimeLeft.days}
                  </span>
                  <span className="text-sm ">Days</span>
                </div>
                <span className="font-bold mx-2">:</span>
                <div className="flex flex-col justify-center items-center">
                  <span className="text-black font-semibold text-xl">
                    {startTimeLeft.hours}
                  </span>
                  <span className="text-sm ">Hours</span>
                </div>
                <span className="font-bold mx-2">:</span>
                <div className="flex flex-col justify-center items-center">
                  <span className="text-black font-semibold text-xl">
                    {startTimeLeft.minutes}
                  </span>
                  <span className="text-sm ">Mins</span>
                </div>
              </div>
            </>
          )}

          {isActive && endTimeLeft && (
            <>
              <span className="text-black text-sm font-semibold text-center">
                Ends in
              </span>
              <div className="flex flex-row mt-1 ">
                <div className="flex flex-col justify-center items-center">
                  <span className="text-black font-semibold text-xl">
                    {endTimeLeft.days}
                  </span>
                  <span className="text-sm ">Days</span>
                </div>
                <span className="font-bold mx-2">:</span>
                <div className="flex flex-col justify-center items-center">
                  <span className="text-black font-semibold text-xl">
                    {endTimeLeft.hours}
                  </span>
                  <span className="text-sm ">Hours</span>
                </div>
                <span className="font-bold mx-2">:</span>
                <div className="flex flex-col justify-center items-center">
                  <span className="text-black font-semibold text-xl">
                    {endTimeLeft.minutes}
                  </span>
                  <span className="text-sm ">Mins</span>
                </div>
              </div>
            </>
          )}

          {isPast && (
            <>
              <span className="text-neutral-600 text-sm font-semibold text-center">
                Start date
              </span>
              <span className="font-semibold">
                {dayjs(data.startDate).format("DD MMM'YY hh:mm A")}
              </span>
              <span className="text-neutral-600 text-sm font-semibold text-center mt-2">
                End date
              </span>
              <span className="font-semibold">
                {dayjs(data.endDate).format("DD MMM'YY hh:mm A")}
              </span>
            </>
          )}
        </div>

        <div>
          <button className="bg-[#44924C] text-white rounded-lg flex flex-row space-x-2 justify-center items-center px-4 py-2">
            <IoMdCheckmarkCircleOutline size={18} />
            <span>Participate Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HackathonCard;
