import React from "react";
import MainProfile from "../../components/Profile/MainProfile";
import SolvedProblem from "../../components/Profile/SolvedProblem";
import ContestRating from "../../components/Profile/ContestRating";
import TopPercentage from "../../components/Profile/TopPercentage";
import AllSubmissions from "../../components/Profile/AllSubmissions";

const ProfilePage = () => (
  <div className="mx-auto w-[80%] flex gap-4 text-white mt-10 min-h-screen">
    <div className="w-[25%]">
      <MainProfile />
    </div>
    <div className="w-[75%] flex flex-col">
      <div className="flex gap-4">
        <ContestRating />
        <TopPercentage />
      </div>
      <AllSubmissions />
      <SolvedProblem />
    </div>
  </div>
);

export default ProfilePage;
