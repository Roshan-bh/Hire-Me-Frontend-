import React from "react";
import { Dropdown } from "../subparts/dropdown";
import {
  BsCalendarCheck,
  BsFillCalendarMinusFill,
  BsMapFill,
} from "react-icons/bs";
import Link from "next/link";
export const ManageJobs = () => {
  const jobStatus = [
    { name: "Pending", id: 1 },
    { name: "Active", id: 2 },
    { name: "Expired", id: 3 },
    { name: "Draft", id: 4 },
  ];
  return (
    <>
      <div className=" mt-5 ps-5 md:px-0  md:mt-[105px] w-full md:w-3/4">
        <div className="shadow-md p-5 overflow-x-auto">
          <div className="flex justify-between">
            <h2 className="text-2xl font-medium tracking-wider mb-7">
              Manage Jobs
            </h2>

            <div>
              <Dropdown value={jobStatus} name={"job status"} />
            </div>
          </div>
          <div>
            <table className="table-auto mt-5">
              <thead className="bg-slate-400 rounded-sm">
                <tr>
                  <th className="py-3 px-7">Job Title</th>
                  <th className="py-3 px-7">Status</th>
                  <th className="py-3 px-7">Applicants</th>
                  <th className="py-3 px-7">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-7">
                    <p className="text-lg font-medium py-2">Django Developer</p>
                    <p className="text-sm text-gray-600 flex flex-nowrap items-center py-1">
                      <span>
                        <BsCalendarCheck size={15} className="mr-1" />
                      </span>
                      Created:{" "}
                      <span className="text-gray-500 ms-1">June 8,2023</span>
                    </p>
                    <p className="text-sm text-gray-600 flex flex-nowrap items-center py-1">
                      <span>
                        <BsFillCalendarMinusFill size={15} className="mr-1" />
                      </span>
                      Deadline:{" "}
                      <span className="text-red-500 ms-1">June 8,2023</span>{" "}
                      <span className="font-semibold">&nbsp;(Expire Job)</span>
                    </p>
                    <p className="text-sm text-gray-600 flex flex-nowrap items-center py-1">
                      <span>
                        <BsMapFill size={15} className="mr-1" />
                      </span>
                      <span className="text-gray-500">
                        Bharatpur-04, Chitwan
                      </span>
                    </p>
                  </td>
                  <td className="py-3 px-7">
                    <span className="text-md font-semibold text-teal-700">
                      Admin Review
                    </span>
                  </td>
                  <td className="py-3 px-7">
                    <span className=" font-medium text-cyan-600">
                      12 Applicants
                    </span>
                  </td>
                  <td className="py-3 px-7">
                    <span className="px-1">
                      <Link
                        href=""
                        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4  text-center text-sm rounded-md"
                      >
                        Edit
                      </Link>
                    </span>
                    <span className="px-1">
                      <Link
                        href=""
                        className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 text-center text-sm rounded-md"
                      >
                        View
                      </Link>
                    </span>
                    <span className="px-1">
                      <Link
                        href=""
                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 text-center text-sm rounded-md"
                      >
                        Delete
                      </Link>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
