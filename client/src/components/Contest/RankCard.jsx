import React from "react";

function RankCard() {
  return (
    <>
      {" "}
      <div className="ranking-card flex space-x-4  hover:bg-gray-800 text-white py-2 px-4 mt-4 rounded-md cursor-pointer">
        <div className="rank w-[10%]"> 1</div>
        <div className="image w-[20%]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4jExqGXHj4gBQbuXB5O84RD8onDJ3GyQYMQ&s"
            alt=""
            className="w-1/2 rounded-full"
          />
        </div>
        <div className="username w-[70%] flex flex-col justify-start items-start">
          <div className="name">Alok Gupta</div>
          <div className="more-info flex gap-4  w-full">
            <div className="rating text-sm">Rating: 1500</div>
            <div className="institution text-sm"> IIIT Ranchi</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RankCard;
