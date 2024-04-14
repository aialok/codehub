import React from "react";
import MainProfile from "../../components/Profile/MainProfile";
import SolvedProblem from "../../components/Profile/SolvedProblem";
import RatingGraph from "../../components/Profile/RatingGraph";

function ProfilePage() {
  return (
    <div className="mx-auto w-4/6 flex gap-4 text-white mt-10  min-h-screen">
      <div className="w-[30%]">
        <MainProfile />
      </div>
      <div className="w-[70%] flex flex-col ">
        <div className="w-full bg-[#282828] p-4 rounded-md mb-4">
          <div className="align-start flex w-full">
            <div className="mr-4">
              <div className="font-normal text-sm">Contest Rating</div>
              <div className="flex items-center text-2xl">2783</div>
            </div>
            <div className="mr-4">
              <div className="text-sm">Level</div>
              <div className="font-normal leading-[22px] text-blue-500">Guardian</div>
            </div>
            <div className="mr-4">
              <div className="text-sm">Global Ranking</div>
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

        <div className="top-percent w-full bg-[#282828] p-4 rounded-md h-[30vh] mb-4">
          <div className="relative min-h-[49px]">
            <div className="absolute left-0 top-0">
              <div className="text-base">Top</div>
              <div className="text-2xl">0.81%</div>
            </div>
            <div className="absolute left-[100px] top-0">
              <div className="text-xs"></div>
              <div className=""></div>
            </div>
          </div>
        </div>
        <div className="Submissions  w-full bg-[#282828] p-4 rounded-md h-[30vh] mb-4"></div>
        <div className="Submissions  w-full bg-[#282828] p-4 rounded-md h-[30vh] mb-4"></div>
      </div>
    </div>
  );
}

export default ProfilePage;
