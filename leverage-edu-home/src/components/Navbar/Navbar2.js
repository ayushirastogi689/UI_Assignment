import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-#050607 grid grid-flow-col p-4 shadow-lg">
      <div className="flex col-span-1">
        <a href="/">
          <img
            className="h-7 mx-8"
            src="https://leverageedunew.s3.us-east-1.amazonaws.com/assets/img/logo.png"
            alt="company_logo"
          />
        </a>
      </div>
      <div className="col-span-10 mb-1 px-10">
        <div>
          <input
            className="px-5 w-1/2 py-1.5 border border-gray-400 rounded-l-full"
            type="text"
            placeholder="Search"
          />
          <button className="px-5 py-1.5 bg-gray-100 border border-gray-400 rounded-r-full">
            {" "}
            🔍
          </button>
        </div>

        <div className="fixed bg-white px-2 py-2 w-[35rem] shadow-lg rounded-lg border border-gray-100"></div>
      </div>
      <div className="col-span-1">
        <img
          className="h-7 cursor-pointer"
          src="https://www.seekpng.com/png/small/41-410093_circled-user-icon-user-profile-icon-png.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Navbar;
