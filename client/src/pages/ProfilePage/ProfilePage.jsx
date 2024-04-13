import React from "react";
import MainProfile from "../../components/Profile/MainProfile";
function ProfilePage() {
  return (
    <div className="mx-auto w-4/6 flex gap-4 text-white mt-10">
      <div className="w-[30%]">
        <MainProfile />
      </div>
      <div className="w-[70%] bg-[#282828] flex justify-center items-center rounded-md">Profile Dashboard</div>
    </div>
  );
}

export default ProfilePage;
