import React, { useState } from "react";
import { useRef } from "react";
import JoditEditor from "jodit-react";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import { Dropdown } from "../subparts/dropdown";
import Multiselect from "multiselect-react-dropdown";
import countryData from "./countrydata.json";
import axios from "axios";

const baseUrl = "http://localhost:8000/api";
export const CompanyProfile = () => {
  const [cd, setCd] = useState();
  const [image, setImage] = useState();
  const [companyData, setCompanyData] = useState({});
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

  const handleChange = (e) => {
    setCompanyData({
      ...companyData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("company_name", companyData.company_name);
    formData.append("email", companyData.email);
    formData.append("website", companyData.website);
    formData.append("sector", companyData.sector);
    formData.append("established_date", companyData.established_date);
    formData.append("contact_number", companyData.contact_number);
    formData.append("company_description", content);
    // formData.append("company_profile_img", image);
    formData.append("facebook_link", companyData.facebook_link);
    formData.append("twitter_link", companyData.twitter_link);
    formData.append("linkedin_link", companyData.linkedin_link);
    formData.append("country", cd);
    formData.append("city", companyData.city);
    formData.append("postal_code", companyData.postal_code);
    formData.append("exact_location", companyData.exact_location);

    try {
      axios
        .post(baseUrl + "/companyProfile/", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          console.log(response.data);
        });
    } catch (e) {
      console.log(e.data);
    }
  };
  return (
    <>
      {" "}
      <div className=" mt-5 md:ps-5 md:px-0  md:mt-[105px] w-full md:w-3/4">
        <div>
          <form onSubmit={handleFormSubmit}>
            <div className="shadow-md p-5">
              <h2 className="text-2xl font-medium tracking-wider mb-7">
                Basic Information
              </h2>
              <div className="flex justify-between items-center w-full"></div>
              <div className="flex justify-between items-center w-full">
                <div className="mb-7 w-2/5">
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="company_name"
                  >
                    Company Name*
                  </label>
                  <input
                    className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="company_name"
                    type="text"
                    name="company_name"
                    placeholder="Enter company name.."
                    onChange={handleChange}
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
                    name="email"
                    placeholder="xyz@gmail.com"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="mb-7 w-2/5">
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="website"
                  >
                    Website
                  </label>
                  <input
                    className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="website"
                    type="text"
                    name="website"
                    placeholder="Enter website url.."
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-7 w-2/5">
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="sector"
                  >
                    Sector*
                  </label>

                  {/* <Multiselect
                    isObject={false}
                    onRemove={(e) => {}}
                    onSelect={(e) => {}}
                    options={options}
                    showCheckbox
                    closeOnSelect="false"
                    placeholder="--Select sectors--"
                  /> */}
                  <input
                    className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="sector"
                    type="text"
                    name="sector"
                    placeholder="Enter Sectors ...."
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="mb-7 w-2/5">
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="established_date"
                  >
                    Established Date*
                  </label>
                  <p className="shadow-lg">
                    <input
                      id="established_date"
                      type="date"
                      name="established_date"
                      onChange={handleChange}
                    />
                  </p>
                </div>
                <div className="mb-7 w-2/5">
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="contact_number"
                  >
                    Contact Number*
                  </label>
                  <input
                    className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="contact_number"
                    name="contact_number"
                    type="text"
                    placeholder="Enter contact number.."
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-7">
                <label
                  className=" text-gray-700 text-sm font-semibold mb-3"
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
                  htmlFor="company_profile_img"
                >
                  Company Profile Logo
                </label>
                <input
                  className="block w-full text-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-100 dark:text-gray-400 focus:outline-none"
                  id="company_profile_img"
                  type="file"
                  name="company_profile_img"
                  onChange={handleFileChange}
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
                    htmlFor="facebook_link"
                  >
                    Facebook*
                  </label>
                  <input
                    className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="facebook_link"
                    type="text"
                    name="facebook_link"
                    placeholder=""
                    onChange={handleChange}
                  />
                </div>
                <div className="">
                  {" "}
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="twitter_link"
                  >
                    Twitter*
                  </label>
                  <input
                    className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="twitter_link"
                    type="text"
                    name="twitter_link"
                    placeholder=""
                    onChange={handleChange}
                  />
                </div>
                <div className="">
                  {" "}
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="linkedin_link"
                  >
                    Linkedin*
                  </label>
                  <input
                    className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="linkedin_link"
                    type="text"
                    name="linkedin_link"
                    placeholder=""
                    onChange={handleChange}
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
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="country"
                  >
                    Country*
                  </label>
                  <Dropdown
                    value={countryData}
                    name={"Country.."}
                    id="country"
                    setData={setCd}
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
                    name="city"
                    onChange={handleChange}
                  />
                </div>
                <div className="my-3">
                  {" "}
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="postal_code"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    className="rounded-sm shadow-lg w-60 py-2 px-3 bg-white flex items-center hover:outline-none hover:border-none focus:outline-none focus:border-none"
                    id="postal_code"
                    name="postal_code"
                    onChange={handleChange}
                  />
                </div>
                <div className="my-3">
                  {" "}
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="exact_location"
                  >
                    Exact Location*
                  </label>
                  <input
                    type="text"
                    className="rounded-sm shadow-lg w-60 py-2 px-3 bg-white flex items-center hover:outline-none hover:border-none focus:outline-none focus:border-none"
                    placeholder="Bypass Road 04, Bharatpur.."
                    id="exact_location"
                    name="exact_location"
                    onChange={handleChange}
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
