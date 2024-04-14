import React from "react";
import { Link } from "react-router-dom";
import { ImFire } from "react-icons/im";

function Navbar() {
  return (
    <div className="text-xl p-2 text-[#9c9c99] bg-[#282828]">
      <nav className="flex justify-between">
        <ul className="flex space-x-4  mx-10 items-center">
          {navBarHeading.map((item) => (
            <Link to={item.path} key={item.name}>
              <li className="hover:text-white cursor-pointer">{item.name}</li>
            </Link>
          ))}
        </ul>
        <div className="flex items-center gap-4 hover:text-white cursor-pointer">
          <ImFire className="text-white hover:fill-orange-500 " />
          <Link to="/profile">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4jExqGXHj4gBQbuXB5O84RD8onDJ3GyQYMQ&s"
              alt="profile"
              className="w-[16%] rounded-full"
            />
          </Link>
        </div>
      </nav>
    </div>
  );
}

const navBarHeading = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Problems",
    path: "/problem-statements",
  },
  {
    name: "Contest",
    path: "/contest",
  },
  {
    name: "Discuss",
    path: "/discuss",
  },
  {
    name: "Interview",
    path: "/interview",
  },
];

export default Navbar;
