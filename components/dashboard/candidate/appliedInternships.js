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
  const job_id = router.query.jobId;
  const jobStatus = [
    { name: "Pending", id: 1 },
    { name: "Active", id: 2 },
    { name: "Expired", id: 3 },
    { name: "Draft", id: 4 },
  ];
  const [jobData, setJobData] = useState([]);
  const employer_id = localStorage.getItem("employer_id");
  useEffect(() => {
    try {
      axios.get(baseUrl + "/employer-jobs/" + employer_id).then((response) => {
        setJobData(response.data);
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
          axios.delete(baseUrl + "/jobs/" + job_id).then((response) => {
            axios.get(baseUrl + "/jobs/").then((response) => {
              setJobData(response.data);
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
      <div className=" mt-5 ps-5 md:px-0  md:mt-[105px] w-full md:w-3/4">
        <div className="shadow-md p-5 overflow-x-auto">
          <div className="flex justify-between">
            <h2 className="text-2xl font-medium tracking-wider mb-7">
              Manage Jobs
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
                {jobData.map((item, index) => (
                  <tr key={index}>
                    <td className="py-3 px-7">
                      <p className="text-lg font-medium py-2">{item.title}</p>
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
                          {item.application_deadline}
                        </span>{" "}
                        <span className="font-semibold">&nbsp;</span>
                      </p>
                      <p className="text-sm text-gray-600 flex flex-nowrap items-center py-1">
                        <span>
                          <BsMapFill size={15} className="mr-1" />
                        </span>
                        <span className="text-gray-500">
                          {item.exact_location}
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
                          href={`/dashboard/editJob/${item.id}`}
                          replace
                          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4  text-center text-sm rounded-md"
                        >
                          Edit
                        </Link>
                      </span>
                      <span className="px-1">
                        <Link
                          href=""
                          replace
                          className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 text-center text-sm rounded-md"
                        >
                          View
                        </Link>
                      </span>
                      <span className="px-1">
                        <button
                          type="button"
                          onClick={() => handleJobDelete(item.id)}
                          className="bg-red-500 hover:bg-red-600 text-white py-2
                          px-4 text-center text-sm rounded-md"
                        >
                          {" "}
                          Delete
                        </button>
                      </span>
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
