import React, { useState } from "react";
import { useRef } from "react";
import JoditEditor from "jodit-react";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import { Dropdown } from "../subparts/dropdown";
import Multiselect from "multiselect-react-dropdown";
import countryData from "./countrydata.json";
export const CompanyProfile = () => {
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
      <div className=" mt-5 md:ps-5 md:px-0  md:mt-[105px] w-full md:w-3/4">
        <div>
          <form action="" method="post">
            <div className="shadow-md p-5">
              <h2 className="text-2xl font-medium tracking-wider mb-7">
                Basic Information
              </h2>
              <div className="flex justify-between items-center w-full">
                {/* <div className="mb-7 w-2/5">
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="firstName"
                  >
                    First Name*
                  </label>
                  <input
                    className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="firstName"
                    type="text"
                    placeholder="Enter firsr name.."
                  />
                </div> */}
                {/* <div className="mb-7 w-2/5">
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="lastName"
                  >
                    Last Name*
                  </label>
                  <input
                    className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="Enter last name.."
                  />
                </div> */}
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="mb-7 w-2/5">
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="companyName"
                  >
                    Company Name*
                  </label>
                  <input
                    className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="companyName"
                    type="text"
                    placeholder="Enter company name.."
                  />
                </div>
                <div className="mb-7 w-2/5">
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="email"
                  >
                    Email*
                  </label>
                  <input
                    className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="xyz@gmail.com"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <div class="mb-7 w-2/5">
                  <label
                    class=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="title"
                  >
                    Website
                  </label>
                  <input
                    class="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title"
                    type="text"
                    placeholder="Enter website url.."
                  />
                </div>
                <div class="mb-7 w-2/5">
                  <label
                    class=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="title"
                  >
                    Sector*
                  </label>
                  <Multiselect
                    isObject={false}
                    onRemove={(e) => {}}
                    onSelect={(e) => {}}
                    options={options}
                    showCheckbox
                    closeOnSelect="false"
                    placeholder="--Select sectors--"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="mb-7 w-2/5">
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="establishedDate"
                  >
                    Established Date*
                  </label>
                  <p className="shadow-lg">
                    <Datetime
                      inputProps={inputProps}
                      timeFormat={false}
                      className="h-10 p-2 hover:outline-none hover:border-none focus:outline-none focus:border-none"
                      id="establishedDate"
                    />
                  </p>
                </div>
                <div className="mb-7 w-2/5">
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="contactNumber"
                  >
                    Contact Number*
                  </label>
                  <input
                    className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="contactNumber"
                    type="text"
                    placeholder="Enter contact number.."
                  />
                </div>
              </div>
              <div className="mb-7">
                <label
                  class=" text-gray-700 text-sm font-semibold mb-3"
                  htmlFor="aboutCompany"
                >
                  About Company*
                </label>
                <JoditEditor
                  ref={editor}
                  value={content}
                  tabIndex={1}
                  config={config}
                  onchange={(newContent) => setContent(newContent)}
                  id="aboutCompany"
                />
              </div>
              <div className="mb-7">
                <label
                  className="block mb-3 text-sm font-semibold text-gray-900"
                  htmlFor="file_input"
                >
                  Company Profile Logo
                </label>
                <input
                  className="block w-full text-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-100 dark:text-gray-400 focus:outline-none"
                  id="file_input"
                  type="file"
                />
              </div>
            </div>
            <div className="shadow-md p-5 mt-5">
              <h2 className="text-2xl font-medium tracking-wider mb-7">
                Social Links
              </h2>
              <div className="flex w-full justify-between mb-7 space-x-2">
                <div className="">
                  {" "}
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="facebook"
                  >
                    Facebook*
                  </label>
                  <input
                    className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="facebook"
                    type="text"
                    placeholder=""
                  />
                </div>
                <div className="">
                  {" "}
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="twitter"
                  >
                    Twitter*
                  </label>
                  <input
                    className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="twitter"
                    type="text"
                    placeholder=""
                  />
                </div>
                <div className="">
                  {" "}
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="linkedin"
                  >
                    Linkedin*
                  </label>
                  <input
                    className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="linkedin"
                    type="text"
                    placeholder=""
                  />
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
                    class=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="country"
                  >
                    Country*
                  </label>
                  <Dropdown
                    value={countryData}
                    name={"Country.."}
                    id="country"
                  />
                </div>
                {/* <div className="my-3">
                  {" "}
                  <label
                    class=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="state"
                  >
                    State*
                  </label>
                  <Dropdown value={salaryType} name={"State"} id="state" />
                </div> */}
                {/* <div className="my-3">
                  {" "}
                  <label
                    class=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="metro"
                  >
                    Metro/submetropolitan*
                  </label>
                  <Dropdown
                    value={salaryType}
                    name={"Politan City.."}
                    id="metro"
                  />
                </div> */}
                <div className="my-3">
                  {" "}
                  <label
                    class=" text-gray-700 text-sm font-semibold mb-3"
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
                    class=" text-gray-700 text-sm font-semibold mb-3"
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
                    class=" text-gray-700 text-sm font-semibold mb-3"
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

            <button
              type="submit"
              className="text-white flex mx-auto rounded-md bg-black px-4 py-2 hover:bg-black/80 mt-7"
            >
              Save Settings
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
