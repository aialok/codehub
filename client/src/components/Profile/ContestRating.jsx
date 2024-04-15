import React from "react";
import RatingGraph from "./RatingGraph";

function ContestRating() {
  return (
    <div className="w-full bg-[#282828] p-4 rounded-md mb-4">
      <div className="align-start flex w-full">
        <div className="mr-4">
          <div className="font-normal text-sm">Contest Rating</div>
          <div className="flex items-center text-2xl">2783</div>
        </div>
        <div className="mr-4">
          <div className="text-base">Level</div>
          <div className="font-normal leading-[22px] text-blue-500">
            Guardian
          </div>
        </div>
        <div className="mr-4">
          <div className="text-base">Global Ranking</div>
          <div className="font-normal leading-[22px]">
            482
            <span className=" ">/520,873</span>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="text-sm">Attended</div>
          <div className="font-normal leading-[22px]">3</div>
        </div>
      </div>
      <div className="h-[20vh] text-black">
        <RatingGraph />
      </div>
    </div>
  );
}

export default ContestRating;
