import React, { useState, useEffect } from "react";
import {
  MdOutlineDashboard,
  MdLogout,
  MdOutlineDeleteOutline,
} from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import { BiAddToQueue } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import Link from "next/link";
import axios from "axios";

const baseUrl = "http://localhost:8000/api";
export const DashboardSidebar = () => {
  const Swal = require("sweetalert2");
  const [canName, setCanName] = useState({});
  const handleLogout = () => {
    Swal.fire({
      title: "Confirm",
      text: "Are you sure you want to Logout ?",
      icon: "info",
      confirmButtonText: "Continue",
      showCancelButton: true,
    });
    localStorage.removeItem("userLoginStatus");
    localStorage.removeItem("employerLoginStatus");
    localStorage.removeItem("candidateLoginStatus");
    localStorage.removeItem("candidate_id");
    localStorage.removeItem("candidate_name");
    window.location.href = "/candidate/login";
  };
  useEffect(() => {
    const candidate_id = localStorage.getItem("candidate_id");
    try {
      axios.get(baseUrl + "/candidate/" + candidate_id).then((response) => {
        setCanName(response.data);
      });
      if (res.status == 200 || res.status == 201) {
        localStorage.setItem(
          "candidate_name",
          canName.first_name + " " + canName.last_name
        );
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(canName);
  // const candidate_name = localStorage.getItem("candidate_name");

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
                    {canName.first_name + " " + canName.last_name}
                  </h2>
                  <p className="text-xs text-gray-500 text-center">Candidate</p>
                </div>
              </div>
              <div id="menu" className="flex flex-col space-y-2">
                <Link
                  // href={{ pathname: "/dashboard" }}
                  href="/dashboard/candidate"
                  replace
                  className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
                >
                  <span>
                    <MdOutlineDashboard className="inline-block text-2xl mr-1 pb-1" />
                  </span>
                  <span className="">Dashboard</span>
                </Link>
                <Link
                  // href={{
                  //   pathname: "/dashboard/[layout]",
                  //   query: { layout: "companyProfile" },
                  // }}
                  href="/dashboard/candidate/appliedJobs"
                  replace
                  className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <span>
                    <ImProfile className="inline-block text-2xl mr-1 pb-1" />
                  </span>
                  <span className="">Applied Jobs</span>
                </Link>
                <Link
                  // href={{
                  //   pathname: "/dashboard/[layout]",
                  //   query: { layout: "postJob" },
                  // }}
                  href="/dashboard/candidate/appliedInternships"
                  replace
                  className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <span>
                    <BiAddToQueue className="inline-block text-3xl mr-1 pb-1 -ms-1" />
                  </span>
                  <span className="">Applied Internships</span>
                </Link>
                <Link
                  // href={{
                  //   pathname: "/dashboard/[layout]",
                  //   query: { layout: "manageJobs" },
                  // }}
                  href="/dashboard/candidate/changePassword"
                  replace
                  className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <span>
                    <BsPersonWorkspace className="inline-block text-2xl mr-1 pb-1" />
                  </span>
                  <span className="">Change Password</span>
                </Link>
                <Link
                  // href={{
                  //   pathname: "/dashboard/[layout]",
                  //   query: { layout: "companyProfile" },
                  // }}
                  href="/dashboard/candidate/profileSetting"
                  replace
                  className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <span>
                    <ImProfile className="inline-block text-2xl mr-1 pb-1" />
                  </span>
                  <span className="">Profile Setting</span>
                </Link>
                <Link
                  // href={{
                  //   pathname: "/dashboard/[layout]",
                  //   query: { layout: "deleteProfile" },
                  // }}
                  href="/dashboard/candidate/deleteProfile"
                  replace
                  className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <span>
                    <MdOutlineDeleteOutline className="inline-block text-3xl mr-1 pb-1 -ms-2" />
                  </span>
                  <span className="">Delete Profile</span>
                </Link>
                <button
                  type="button"
                  className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                  onClick={handleLogout}
                >
                  <span>
                    <MdLogout className="inline-block text-3xl mr-1 pb-1 -ms-1" />
                  </span>
                  <span className="">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
