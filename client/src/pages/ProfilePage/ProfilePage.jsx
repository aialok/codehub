import React from "react";
import MainProfile from "../../components/Profile/MainProfile";
import SolvedProblem from "../../components/Profile/SolvedProblem";
import ContestRating from "../../components/Profile/ContestRating";
import TopPercentage from "../../components/Profile/TopPercentage";
import AllSubmissions from "../../components/Profile/AllSubmissions";

const ProfilePage = () => (
  <div className="mx-auto w-4/6 flex gap-4 text-white mt-10 min-h-screen">
    <div className="w-[30%]">
      <MainProfile />
    </div>
    <div className="w-[70%] flex flex-col">
      <ContestRating />
      <TopPercentage />
      <SolvedProblem />
      <AllSubmissions />
    </div>
  </div>  
);

export default ProfilePage;
