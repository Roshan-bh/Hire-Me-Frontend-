import React, { useState, useEffect } from "react";
import {
  BsCalendarCheck,
  BsFillCalendarMinusFill,
  BsMapFill,
} from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

const baseUrl = "http://localhost:8000/api";
export const AppliedJobs = () => {
  const router = useRouter();
  const jobStatus = [
    { name: "Pending", id: 1 },
    { name: "Active", id: 2 },
    { name: "Expired", id: 3 },
    { name: "Draft", id: 4 },
  ];
  const [appliedJobData, setAppliedJobData] = useState([]);
  const candidate_id = localStorage.getItem("candidate_id");
  useEffect(() => {
    try {
      axios
        .get(baseUrl + "/fetch-applied-jobs/" + candidate_id)
        .then((response) => {
          setAppliedJobData(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const Swal = require("sweetalert2");
  const handleJobDelete = (job_id) => {
    Swal.fire({
      title: "Confirm",
      text: "Are you sure you want to Delete ?",
      icon: "info",
      confirmButtonText: "Continue",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios
            .delete(baseUrl + "/applied-jobs-details/" + job_id)
            .then((response) => {
              axios
                .get(baseUrl + "/fetch-applied-jobs/" + candidate_id)
                .then((response) => {
                  setAppliedJobData(response.data);
                });
              Swal.fire("success", "Data has been deleted successfully.");
            });
        } catch (error) {
          Swal.fire("error", "Data has not been deleted.");
        }
      } else {
        Swal.fire("error", "Data has not been deleted.");
      }
    });
  };
  return (
    <>
      <div className=" mt-5 ps-5 md:px-0  md:mt-[105px] w-full overflow-x-auto">
        <div className="shadow-md p-5 ">
          <div className="flex justify-between">
            <h2 className="text-2xl font-medium tracking-wider mb-7">
              Applied Jobs
            </h2>
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
                {appliedJobData.map((item, index) => (
                  <tr key={index}>
                    <td className="py-3 px-7">
                      <p className="text-lg font-medium py-2">
                        {item.job.title}
                      </p>
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
                        <span className="text-red-500 ms-1">
                          {item.job.application_deadline}
                        </span>{" "}
                        <span className="font-semibold">&nbsp;</span>
                      </p>
                      <p className="text-sm text-gray-600 flex flex-nowrap items-center py-1">
                        <span>
                          <BsMapFill size={15} className="mr-1" />
                        </span>
                        <span className="text-gray-500">
                          {item.job.exact_location}
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
                    <td className="py-3 px-7 flex items-center justify-center ">
                      <div className="px-1 mt-[45px]">
                        <Link
                          href=""
                          replace
                          className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 text-center text-sm rounded-md"
                        >
                          View
                        </Link>
                      </div>
                      <div className="px-1 mt-[45px]">
                        <button
                          type="button"
                          onClick={() => handleJobDelete(item.id)}
                          className="bg-red-500 hover:bg-red-600 text-white py-2
                          px-4 text-center text-sm rounded-md"
                        >
                          {" "}
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
