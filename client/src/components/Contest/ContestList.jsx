import React from "react";
import RankCard from "./RankCard";
import ContestLists from "./ContestLists";

function ContestList() {
  return (
    <div className="flex gap-4 w-4/5  mx-auto pt-10">
      <div className="left-container w-9/12 text-center bg-slate-900 rounded-md">
        <div className="heading flex space-x-4 p-4">
          <div className="hover:bg-gray-800  px-2 text-xl py-2 rounded-md cursor-pointer">
            Past Contests
          </div>
          <div className="hover:bg-gray-800 px-2 text-xl py-2 rounded-md cursor-pointer">
            My Contests
          </div>
        </div>
        <div className="contest-lists  px-4 ">
          <ContestLists />
          <ContestLists />
          <ContestLists />
          <ContestLists />
          <ContestLists />
          <ContestLists />
          <ContestLists />
          <ContestLists />
        </div>
      </div>
      <div className="right-container w-1/2 text-center bg-slate-900">
        <div className=" hover:bg-gray-800 px-2 text-xl py-4 mt-2 rounded-md cursor-pointer">
          Global Ranking
        </div>
        <RankCard />
        <RankCard />
        <RankCard />
        <RankCard />
      </div>
    </div>
  );
}

export default ContestList;
