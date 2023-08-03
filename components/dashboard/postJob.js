import React, { useState } from "react";
import { useRef } from "react";
import JoditEditor from "jodit-react";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import { Dropdown } from "../subparts/dropdown";
import Multiselect from "multiselect-react-dropdown";
export const PostJob = () => {
  const jobSector = [
    { name: "Backend Developer", id: 1 },
    { name: "Frontend Developer", id: 2 },
    { name: "System Analytics", id: 3 },
    { name: "Project Manager", id: 4 },
    { name: "UX/UI Designer", id: 5 },
  ];
  const jobType = [
    { name: "Full Time", id: 1 },
    { name: "Part Time", id: 2 },
    { name: "Per Hour Paid", id: 3 },
    { name: "Volunteer", id: 4 },
    { name: "Internship", id: 5 },
  ];
  const salaryType = [
    { name: "Weekly", id: 1 },
    { name: "Monthly", id: 2 },
    { name: "Per Hour Paid", id: 3 },
    { name: "Volunteer", id: 4 },
    { name: "Internship", id: 5 },
  ];
  const [options, setOptions] = useState([
    "Frontend Developer",
    "Backend Developer",
    "Content Writer",
    "Web Developer",
    "a Developer",
    "v  Developer",
    "s Developer",
    "d Writer",
    "r Developer",
    "Fullstack Developer",
  ]);
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const config = { placeholder: "Start typing..." };
  const inputProps = {
    placeholder: "Select date and time..",
    disabled: false,
  };
  return (
    <>
      {" "}
      <div className=" mt-5 md:ps-5   md:mt-[105px] w-full md:w-3/4">
        <div>
          <form action="" method="post">
            <div className="shadow-md p-5">
              <h2 className="text-2xl font-medium tracking-wider mb-7">
                Post a New Job
              </h2>
              <div class="mb-7">
                <label
                  class=" text-gray-700 text-sm font-semibold mb-3"
                  htmlFor="jobTitle"
                >
                  Job Title*
                </label>
                <input
                  class="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="jobTitle"
                  type="text"
                  placeholder="Job Title"
                />
              </div>
              <div className="mb-7">
                <label
                  class=" text-gray-700 text-sm font-semibold mb-3"
                  htmlFor="jobDescription"
                >
                  Job Description*
                </label>
                <JoditEditor
                  ref={editor}
                  value={content}
                  tabIndex={1}
                  config={config}
                  onchange={(newContent) => setContent(newContent)}
                  id="jobDescription"
                />
              </div>
              <div className="flex w-full justify-between mb-7 space-x-2">
                {" "}
                <div className="">
                  <label
                    class=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="applicationDeadline"
                  >
                    Application Deadline*
                  </label>

                  <p className="shadow-lg">
                    <Datetime
                      inputProps={inputProps}
                      className=" h-10 p-2"
                      id="applicationDeadline"
                    />
                  </p>
                </div>
                <div className="">
                  {" "}
                  <label
                    class=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="jobType"
                  >
                    Job Type*
                  </label>
                  <Dropdown
                    value={jobType}
                    name={"Select Job Type"}
                    id="jobType"
                  />
                </div>
                <div className="">
                  {" "}
                  <label
                    class=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="jobSector"
                  >
                    Job Sector*
                  </label>
                  <Dropdown
                    value={jobSector}
                    name={"Select Job Sector"}
                    id="jobSector"
                  />
                </div>
              </div>
              <div className="mb-7">
                <label
                  class=" text-gray-700 text-sm font-semibold mb-3"
                  htmlFor="requiredSkills"
                >
                  Required Skills*
                </label>
                <Multiselect
                  isObject={false}
                  onRemove={(e) => {}}
                  onSelect={(e) => {}}
                  options={options}
                  showCheckbox
                  closeOnSelect="false"
                  placeholder="--Select sectors--"
                  id="requiredSkills"
                />
              </div>
              <div className="flex w-full justify-between mb-7 space-x-2">
                <div className="">
                  {" "}
                  <label
                    class=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="salaryType"
                  >
                    Salary Type*
                  </label>
                  <Dropdown
                    value={salaryType}
                    name={"Select Salary Type"}
                    id="salaryType"
                  />
                </div>
                <div className="">
                  {" "}
                  <label
                    class=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="minimum"
                  >
                    Minimum*
                  </label>
                  <input
                    type="number"
                    className="rounded-sm shadow-lg w-60 py-2 px-3 bg-white flex items-center hover:outline-none hover:border-none focus:outline-none focus:border-none"
                    min={0}
                    id="minimum"
                  />
                </div>
                <div className="">
                  {" "}
                  <label
                    class=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="maximum"
                  >
                    Maximum*
                  </label>
                  <input
                    type="number"
                    className="rounded-sm shadow-lg w-60 py-2 px-3 bg-white flex hover:outline-none hover:border-none focus:outline-none focus:border-none"
                    min={0}
                    id="maximum"
                  />
                </div>
              </div>
            </div>
            <div className="shadow-md p-5 mt-5">
              <h2 className="text-2xl font-medium tracking-wider mb-7">
                Other InhtmlFormation
              </h2>
              <div className="flex w-full justify-between mb-7 space-x-2">
                <div className="">
                  {" "}
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="experience"
                  >
                    Experience*
                  </label>
                  <Dropdown
                    value={jobType}
                    name={"Experience"}
                    id="experience"
                  />
                </div>
                <div className="">
                  {" "}
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="qualifications"
                  >
                    Qualifications*
                  </label>
                  <Dropdown
                    value={jobType}
                    name={"Qualifications"}
                    id="qualifications"
                  />
                </div>
                <div className="">
                  {" "}
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="industry"
                  >
                    Industry*
                  </label>
                  <Dropdown value={jobType} name={"Industry"} id="industry" />
                </div>
              </div>
            </div>
            <div className="shadow-md p-5 mt-5">
              <h2 className="text-2xl font-medium tracking-wider mb-7">
                Address/Location
              </h2>
              <div className="flex flex-wrap w-full justify-between mb-7 ">
                <div className="my-3">
                  {" "}
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="country"
                  >
                    Country*
                  </label>
                  <Dropdown
                    value={salaryType}
                    name={"Country.."}
                    id="country"
                  />
                </div>
                <div className="my-3">
                  {" "}
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="state"
                  >
                    State*
                  </label>
                  <Dropdown value={salaryType} name={"State"} id="state" />
                </div>
                <div className="my-3">
                  {" "}
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="metro"
                  >
                    Metro/submetropolitan*
                  </label>
                  <Dropdown
                    value={salaryType}
                    name={"Politan City.."}
                    id="metro"
                  />
                </div>
                <div className="my-3">
                  {" "}
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="city"
                  >
                    City*
                  </label>
                  <input
                    type="text"
                    className="rounded-sm shadow-lg w-60 py-2 px-3 bg-white flex items-center hover:outline-none hover:border-none focus:outline-none focus:border-none"
                    placeholder="Bypass Road 04, Bharatpur.."
                    id="city"
                  />
                </div>
                <div className="my-3">
                  {" "}
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="postalCode"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    className="rounded-sm shadow-lg w-60 py-2 px-3 bg-white flex items-center hover:outline-none hover:border-none focus:outline-none focus:border-none"
                    id="postalCode"
                  />
                </div>
                <div className="my-3">
                  {" "}
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="exactLocation"
                  >
                    Exact Location*
                  </label>
                  <input
                    type="text"
                    className="rounded-sm shadow-lg w-60 py-2 px-3 bg-white flex items-center hover:outline-none hover:border-none focus:outline-none focus:border-none"
                    placeholder="Bypass Road 04, Bharatpur.."
                    id="exactLocation"
                  />
                </div>
              </div>
            </div>
            <div className="flex mt-5">
              <input
                id="checked-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-white bg-black border-gray-300 rounded focus:ring-black"
              />
              <label
                htmlFor="checked-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Accept Terms & Conditions
              </label>
            </div>
            <button
              type="submit"
              className="text-white flex mx-auto rounded-md bg-black px-4 py-2 hover:bg-black/80 mt-7"
            >
              Post Job
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
