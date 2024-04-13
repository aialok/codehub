import React from "react";
import MainProfile from "../../components/Profile/MainProfile";
function ProfilePage() {
  return (
    <div className="mx-auto w-4/6 flex text-white mt-10">
      <div className="w-[25%]">
        <MainProfile />
      </div>
      <div className="w-3/4">ProfileDashboard</div>
    </div>
  );
}

export default ProfilePage;
