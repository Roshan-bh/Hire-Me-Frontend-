import React from "react";
import {
  MdOutlineDashboard,
  MdLogout,
  MdOutlineDeleteOutline,
} from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import { BiAddToQueue } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import Link from "next/link";

export const DashboardSidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem("userLoginStatus");
    window.location.href = "/login";
  };
  return (
    <>
      <div className="mt-[100px] px-5">
        <div id="view" className="h-full w-full md:w-1/4 flex flex-col">
          <div
            id="sidebar"
            className="bg-white h-screen shadow-xl px-3 w-30 md:w-60 lg:w-60 transition-transform duration-300 ease-in-out"
            x-show="sidenav"
          >
            <div className="space-y-6 md:space-y-10 mt-10">
              <div id="profile" className="space-y-3">
                <img
                  src="/images/p1.jpg"
                  alt="user"
                  className="w-16 rounded-full mx-auto"
                />
                <div>
                  <h2 className="font-medium text-center text-teal-500">
                    Roshan Bhandary
                  </h2>
                  <p className="text-xs text-gray-500 text-center">
                    Administrator
                  </p>
                </div>
              </div>
              <div id="menu" className="flex flex-col space-y-2">
                <Link
                  href={{ pathname: "/dashboard" }}
                  className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
                >
                  <span>
                    <MdOutlineDashboard className="inline-block text-2xl mr-1 pb-1" />
                  </span>
                  <span className="">Dashboard</span>
                </Link>
                <Link
                  href={{
                    pathname: "/dashboard/[layout]",
                    query: { layout: "companyProfile" },
                  }}
                  className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <span>
                    <ImProfile className="inline-block text-2xl mr-1 pb-1" />
                  </span>
                  <span className="">Company Profile</span>
                </Link>
                <Link
                  href={{
                    pathname: "/dashboard/[layout]",
                    query: { layout: "postJob" },
                  }}
                  className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <span>
                    <BiAddToQueue className="inline-block text-3xl mr-1 pb-1 -ms-1" />
                  </span>
                  <span className="">Post a New Job</span>
                </Link>
                <Link
                  href={{
                    pathname: "/dashboard/[layout]",
                    query: { layout: "manageJobs" },
                  }}
                  className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <span>
                    <BsPersonWorkspace className="inline-block text-2xl mr-1 pb-1" />
                  </span>
                  <span className="">Manage Jobs</span>
                </Link>
                <Link
                  href={{
                    pathname: "/dashboard/[layout]",
                    query: { layout: "deleteProfile" },
                  }}
                  className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <span>
                    <MdOutlineDeleteOutline className="inline-block text-3xl mr-1 pb-1 -ms-2" />
                  </span>
                  <span className="">Delete Profile</span>
                </Link>
                <Link
                  href=""
                  className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                  onClick={handleLogout}
                >
                  <span>
                    <MdLogout className="inline-block text-3xl mr-1 pb-1 -ms-1" />
                  </span>
                  <span className="">Logout</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
