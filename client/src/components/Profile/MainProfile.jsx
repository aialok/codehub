import React from "react";
import { MdOutlineLocationOn , MdSchool} from "react-icons/md";
// import profilePage from '../../assets/react.png'

function MainProfile() {
  return (
    <div className=" rounded-md min-h-[85vh] bg-[#282828]">
      <div className="flex p-4 gap-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4jExqGXHj4gBQbuXB5O84RD8onDJ3GyQYMQ&s"
          className="w-24 h-24 rounded-md"
        />
        <div className="profile-info">
          <h1 className="text-xl font-bold mt-2">Alok Gupta</h1>
          <h3 className="text-base text-[#9c9c99]">ai_alok</h3>
          <p>Rank: {"10000"}</p>
        </div>
      </div>
      <div className="p-4">
        <p className="mb-2">I do code.....sometimes</p>
        <button className="p-2 px-4 w-full rounded-md bg-[#283A2E] text-green-500">Edit Profile </button>
        <div className="country mt-4 mb-2 flex items-center gap-2">
          <MdOutlineLocationOn className="text-green-500 text-xl" />
          <p>India</p>
        </div>
        <div className="studying flex items-center gap-2">
          <MdSchool className="text-green-500 text-xl" />
          <p>IIIT Ranchi</p>
        </div>
      </div>
    </div>
  );
}

export default MainProfile;
