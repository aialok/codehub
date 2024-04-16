import React from "react";
import { MdOutlineLocationOn, MdSchool } from "react-icons/md";
import { FaGithub, FaEye } from "react-icons/fa";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { IoIosChatboxes } from "react-icons/io";
import { TiStarFullOutline } from "react-icons/ti";
// import profileImage from "../../assets/react.png";

function MainProfile() {
  return (
    <div className="rounded-md min-h-[85vh] bg-[#282828] p-4">
      <div className="flex items-center gap-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4jExqGXHj4gBQbuXB5O84RD8onDJ3GyQYMQ&s"
          alt="Profile"
          className="w-24 h-24 rounded-md"
        />
        <div>
          <h1 className="text-xl font-bold mt-2">Alok Gupta</h1>
          <h3 className="text-base text-[#9c9c99]">ai_alok</h3>
          <p>Rank: 482</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="mb-2">I do code... sometimes</p>
        <button className="p-2 px-4 w-full rounded-md bg-[#283A2E] text-green-500">
          Edit Profile
        </button>
        <ProfileInfo icon={<MdOutlineLocationOn />} text="India" />
        <ProfileInfo icon={<MdSchool />} text="IIIT Ranchi" />
        <ProfileInfo icon={<FaGithub />} text="aialok" />
        <hr className="bg-[#283A2E] my-4" />
        <h1 className="text-lg font-normal mt-4">Community Stats</h1>
        <ProfileInfo
          icon={<FaEye className="text-blue-500" />}
          text="Views 3008"
        />
        <ProfileInfo
          icon={<IoCheckmarkDoneCircle className="text-green-500" />}
          text="Solutions 1560"
        />
        <ProfileInfo
          icon={<IoIosChatboxes className="text-emerald-500" />}
          text="Discuss 12"
        />
        <ProfileInfo
          icon={<TiStarFullOutline className="text-yellow-500" />}
          text="Reputation 10000"
        />
      </div>
      <hr className="my-4" />
      <div>
        <h1 className="text-lg font-normal mt-4">Languages</h1>
        <div className="flex gap-4 mt-2 flex-wrap">
          <span className="p-2 px-4 w-full text-center rounded-md bg-[#283A2E] text-green-500">
            Go
          </span>
          <span className="p-2 px-4 w-full text-center rounded-md bg-[#283A2E] text-green-500">
            Scala
          </span>
          <span className="p-2 px-4 w-full text-center rounded-md bg-[#283A2E] text-green-500">
            Rust
          </span>
        </div>
      </div>
      <div className="skills">
        <h1 className="text-lg font-normal mt-4">Skills</h1>
        <div className="flex gap-4 mt-2 flex-wrap">
          <span className="p-2 px-4 w-full text-center rounded-md bg-[#283A2E] text-green-500">
            Dynamic Programming
          </span>
          <span className="p-2 px-4 w-full text-center rounded-md bg-[#283A2E] text-green-500">
            Segment Trees
          </span>
          <span className="p-2 px-4 w-full text-center rounded-md bg-[#283A2E] text-green-500">
            Bit Manipulation
          </span>
        </div>
      </div>
    </div>
  );
}

const ProfileInfo = ({ icon, text }) => (
  <div className="flex items-center gap-2 mt-4">
    {icon}
    <p>{text}</p>
  </div>
);

export default MainProfile;
