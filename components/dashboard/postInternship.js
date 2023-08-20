import React, { useState, useEffect } from "react";
import { useRef } from "react";
import JoditEditor from "jodit-react";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import { Dropdown } from "../subparts/dropdown";
import Multiselect from "multiselect-react-dropdown";
import countryData from "./countrydata.json";
import axios from "axios";
const baseUrl = "http://localhost:8000/api";
export const PostInternship = () => {
  const [internshipSectors, setInternshipSectors] = useState([]);
  const [internshipTypes, setInternshipTypes] = useState([]);
  const [salaryTypes, setSalaryTypes] = useState([]);
  const [industryTypes, setIndustryTypes] = useState([]);

  const [dataSelect, setDataSelect] = useState({});
  const [internshipSector, setInternshipSector] = useState({});
  const [salaryType, setSalaryType] = useState({});
  const [cd, setCd] = useState({});
  const [industry, setIndustry] = useState({});
  const [internshipData, setInternshipData] = useState({});
  const [company, setCompany] = useState({});

  useEffect(() => {
    const employer_id = localStorage.getItem("employer_id");
    try {
      axios.get(baseUrl + "/jobsectors/").then((response) => {
        setInternshipSectors(response.data);
      });
    } catch (error) {
      console.log(error);
    }
    try {
      axios.get(baseUrl + "/jobtypes/").then((response) => {
        setInternshipTypes(response.data);
      });
    } catch (error) {
      console.log(error);
    }
    try {
      axios.get(baseUrl + "/salarytypes/").then((response) => {
        setSalaryTypes(response.data);
      });
    } catch (error) {
      console.log(error);
    }
    try {
      axios.get(baseUrl + "/industry/").then((response) => {
        setIndustryTypes(response.data);
      });
    } catch (error) {
      console.log(error);
    }
    try {
      axios.get(baseUrl + "/employer/" + employer_id).then((response) => {
        if (response.status === 200 || response.status === 201) {
          setCompany(response.data.companyProfile.company_name);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const [options, setOptions] = useState([
    "Frontend Developer",
    "Backend Developer",
    "Content Writer",
    "Web Developer",
  ]);
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const config = { placeholder: "Start typing..." };
  const inputProps = {
    placeholder: "Select date and time..",
    disabled: false,
  };
  const handleChange = (e) => {
    setInternshipData({
      ...internshipData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setInternshipData({
      ...internshipData,
      [e.target.name]: e.target.files[0],
    });
  };
  const employer_id = localStorage.getItem("employer_id");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", internshipData.title);
    formData.append("employer", employer_id);
    formData.append("description", content);
    formData.append(
      "application_deadline",
      internshipData.application_deadline
    );
    formData.append("internship_type", dataSelect.id);
    formData.append("internship_sector", internshipSector.id);
    formData.append("required_skills", internshipData.required_skills);
    formData.append("salary_type", salaryType.id);
    formData.append("salary_minimum", internshipData.salary_minimum);
    formData.append("salary_maximum", internshipData.salary_maximum);
    formData.append(
      "internship_image",
      internshipData.up_img,
      internshipData.up_img.name
    );
    formData.append("experience", internshipData.experience);
    formData.append("qualification", internshipData.qualification);
    formData.append("industry", industry.id);
    formData.append("country", cd.title);
    formData.append("city", internshipData.city);
    formData.append("postal_code", internshipData.postal_code);
    formData.append("exact_location", internshipData.exact_location);
    formData.append("terms_conditions", true);

    try {
      axios
        .post(baseUrl + "/internships/", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          console.log(response.data);
          window.location.href = "/dashboard/employer";
        });
    } catch (e) {
      console.log(e.data);
    }
  };
  console.log(company);

  return (
    <>
      {" "}
      <div className=" mt-5 md:ps-5   md:mt-[105px] w-full md:w-3/4">
        <div>
          <form onSubmit={handleFormSubmit}>
            <div className="shadow-md p-5">
              <h2 className="text-2xl font-medium tracking-wider mb-7">
                Post a New Internship
              </h2>
              <div className="mb-7">
                <label
                  className=" text-gray-700 text-sm font-semibold mb-3"
                  htmlFor="title"
                >
                  Internship Title*
                </label>
                <input
                  className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Internship Title"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-7">
                {" "}
                <label
                  className=" text-gray-700 text-sm font-semibold mb-3"
                  htmlFor="companyName"
                >
                  Company Name*
                </label>
                <input
                  className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Internship Title"
                  value={company}
                />
              </div>

              <div className="mb-7">
                <label
                  className=" text-gray-700 text-sm font-semibold mb-3"
                  htmlFor="internshipDescription"
                >
                  Internship Description*
                </label>
                <JoditEditor
                  ref={editor}
                  value={content}
                  tabIndex={1}
                  config={config}
                  onchange={(newContent) => setContent(newContent)}
                  id="internshipDescription"
                />
              </div>
              <div className="flex w-full justify-between mb-7 space-x-2">
                {" "}
                <div className="">
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="applicationDeadline"
                  >
                    Application Deadline*
                  </label>

                  <p className="shadow-lg">
                    {/* <Datetime
                      inputProps={inputProps}
                      className=" h-10 p-2"
                      id="applicationDeadline"
                      onChange={handleChange}
                    /> */}
                    <input
                      type="date"
                      name="application_deadline"
                      onChange={handleChange}
                    />
                  </p>
                </div>
                <div className="">
                  {" "}
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="internshipType"
                  >
                    Internship Type*
                  </label>
                  <Dropdown
                    value={internshipTypes}
                    name={"Select Internship Type"}
                    id="internshipType"
                    setData={setDataSelect}
                  />
                  {dataSelect.id}
                </div>
                <div className="">
                  {" "}
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="internshipSector"
                  >
                    Internship Sector*
                  </label>
                  <Dropdown
                    value={internshipSectors}
                    name={"Select Internship Sector"}
                    id="internshipSector"
                    setData={setInternshipSector}
                  />
                </div>
                {internshipSector.id}
              </div>
              <div className="mb-7">
                <label
                  className=" text-gray-700 text-sm font-semibold mb-3"
                  htmlFor="required_skills"
                >
                  Required Skills*
                </label>
                <input
                  className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="required_skills"
                  type="text"
                  placeholder="Requirred Skills.."
                  onChange={handleChange}
                />
              </div>
              <div className="flex w-full justify-between mb-7 space-x-2">
                <div className="">
                  {" "}
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="salaryType"
                  >
                    Salary Type*
                  </label>
                  <Dropdown
                    value={salaryTypes}
                    name={"Select Salary Type"}
                    id="salaryType"
                    setData={setSalaryType}
                  />
                </div>
                {salaryType.id}
                <div className="">
                  {" "}
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="minimum"
                  >
                    Minimum*
                  </label>
                  <input
                    type="number"
                    className="rounded-sm shadow-lg w-60 py-2 px-3 bg-white flex items-center hover:outline-none hover:border-none focus:outline-none focus:border-none"
                    min={0}
                    name="salary_minimum"
                    onChange={handleChange}
                  />
                </div>
                <div className="">
                  {" "}
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="maximum"
                  >
                    Maximum*
                  </label>
                  <input
                    type="number"
                    className="rounded-sm shadow-lg w-60 py-2 px-3 bg-white flex hover:outline-none hover:border-none focus:outline-none focus:border-none"
                    min={0}
                    name="salary_maximum"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="">
                {" "}
                <label
                  className=" text-gray-700 text-sm font-semibold mb-3"
                  htmlFor="up_img"
                >
                  Upload Imgae
                </label>
                <input
                  type="file"
                  className="rounded-sm shadow-lg w-60 py-2 px-3 bg-white flex hover:outline-none hover:border-none focus:outline-none focus:border-none"
                  id="up_img"
                  name="up_img"
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <div className="shadow-md p-5 mt-5">
              <h2 className="text-2xl font-medium tracking-wider mb-7">
                Other Information
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
                  <input
                    className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="experience"
                    name="experience"
                    type="text"
                    placeholder="Experience.."
                    onChange={handleChange}
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
                  <input
                    className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="qualifications"
                    name="qualifications"
                    type="text"
                    placeholder="Qualifications.."
                    onChange={handleChange}
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
                  <Dropdown
                    value={industryTypes}
                    name={"Industry"}
                    id="industry"
                    setData={setIndustry}
                  />
                </div>
                {industry.id}
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
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="state"
                  >
                    State*
                  </label>
                  <Dropdown value={salaryTypes} name={"State"} id="state" />
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
                    htmlFor="postalCode"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    className="rounded-sm shadow-lg w-60 py-2 px-3 bg-white flex items-center hover:outline-none hover:border-none focus:outline-none focus:border-none"
                    id="postalCode"
                    name="postal_code"
                    onChange={handleChange}
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
                    name="exact_location"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex mt-5">
              <input
                id="checked-checkbox"
                type="checkbox"
                value=""
                onChange={handleChange}
                className="w-4 h-4 text-white bg-black border-gray-300 rounded focus:ring-black"
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
              Post Internship
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
