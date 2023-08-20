import React, { useState, useEffect } from "react";
import { useRef } from "react";
import JoditEditor from "jodit-react";
import { DashboardSidebar } from "@/components/dashboardSidebar";
import "react-datetime/css/react-datetime.css";
import { Dropdown } from "@/components/subparts/dropdown";
import countryData from "../../../components/dashboard/countrydata.json";
import { useRouter } from "next/router";
import axios from "axios";

const baseUrl = "http://localhost:8000/api";
const EditJob = () => {
  //using router to get job id from url
  const router = useRouter();
  const job_id = router.query.jobId;

  //states to get data from api and pass it to the dropdown component
  const [jobSectors, setJobSectors] = useState([]);
  const [jobTypes, setJobTypes] = useState([]);
  const [salaryTypes, setSalaryTypes] = useState([]);
  const [industryTypes, setIndustryTypes] = useState([]);

  //states to get data from api service
  const [jobSelect, setJobSelect] = useState([]);
  const [jobSector, setJobSector] = useState([]);
  const [salaryType, setSalaryType] = useState([]);
  const [experience, setExperience] = useState();
  const [qualification, setQualification] = useState();
  const [cd, setCd] = useState();
  const [industry, setIndustry] = useState([]);
  const [jobData, setJobData] = useState({});

  const qualifications = [
    { title: "Secondary Level", id: 1 },
    { title: "Intermediate Level", id: 2 },
    { title: "Diploma Course Level", id: 3 },
    { title: "Graduate Level", id: 4 },
    { title: "Master Level", id: 5 },
    { title: "Above Master Degree", id: 6 },
  ];
  const experiences = [
    { title: "1 years", id: 1 },
    { title: "2 years", id: 2 },
    { title: "3 years", id: 3 },
    { title: "Above 3 years", id: 4 },
  ];

  //data fetched through api from the localhost:8000
  useEffect(() => {
    try {
      axios.get(baseUrl + "/jobsectors/").then((response) => {
        setJobSectors(response.data);
      });
    } catch (error) {
      console.log(error);
    }
    try {
      axios.get(baseUrl + "/jobtypes/").then((response) => {
        setJobTypes(response.data);
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
      axios.get(baseUrl + "/jobs/" + job_id).then((response) => {
        setJobData(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  //state for the multiselect dropdown
  const [options, setOptions] = useState([
    "Frontend Developer",
    "Backend Developer",
    "Content Writer",
    "Web Developer",
  ]);

  //jodit Editor code for geting content for a particular job post.
  const editor = useRef(null);
  const [content, setContent] = useState();
  const config = { placeholder: "Start typing..." };
  const inputProps = {
    placeholder: "Select date and time..",
    disabled: false,
  };

  //handle the changing values in the input tag synchronously.
  const handleChange = (e) => {
    setJobData({
      ...jobData,
      [e.target.name]: e.target.value,
    });
  };

  //handle the changing values in input tag for file formats.
  const handleFileChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.files[0] });
  };

  //getting the employer id to fetch only job related to login employer.
  const employer_id = localStorage.getItem("employer_id");

  //handle the submitted data and submit to the database.
  const Swal = require("sweetalert2");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", jobData.title);
    formData.append("employer", employer_id);
    formData.append("description", content);
    formData.append("application_deadline", jobData.application_deadline);
    formData.append("job_type", jobSelect.id);
    formData.append("job_sector", jobSector.id);
    formData.append("required_skills", jobData.required_skills);
    formData.append("salary_type", salaryType.id);
    formData.append("salary_minimum", jobData.salary_minimum);
    formData.append("salary_maximum", jobData.salary_maximum);
    formData.append("job_image", jobData.up_img, jobData.up_img.name);
    formData.append("experience", experience);
    formData.append("qualification", qualification);
    formData.append("industry", industry.id);
    formData.append("country", cd);
    formData.append("city", jobData.city);
    formData.append("postal_code", jobData.postal_code);
    formData.append("exact_location", jobData.exact_location);
    formData.append("terms_conditions", true);

    try {
      axios
        .put(baseUrl + "/jobs/" + job_id, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          console.log(response.data);
          window.location.href = "/dashboard/";
          if (response.status === 200) {
            Swal.fire({
              title: "Posted job data update successfully",
              icon: "success",
              toast: true,
              timer: 3000,
              position: "top-right",
              timeProgressBar: true,
              showConfirmButton: false,
            });
          }
        });
    } catch (e) {
      console.log(e.data);
    }
  };
  // console.log(prevData);
  console.log(content);
  return (
    <>
      <div className="flex flex-col md:flex-row w-full">
        <div>
          <DashboardSidebar />
        </div>{" "}
        <div className=" mt-5 md:ps-5   md:mt-[105px] w-full md:w-3/4">
          <div>
            <form onSubmit={handleFormSubmit}>
              <div className="shadow-md p-5">
                <h2 className="text-2xl font-medium tracking-wider mb-7">
                  Edit a Job
                </h2>
                <div className="mb-7">
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="jobTitle"
                  >
                    Job Title*
                  </label>
                  <input
                    className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="jobTitle"
                    name="title"
                    type="text"
                    placeholder="Job Title"
                    onChange={handleChange}
                    value={jobData.title}
                  />
                </div>
                <div className="mb-7">
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
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
                        value={jobData.application_deadline}
                        name="application_deadline"
                        onChange={handleChange}
                      />
                    </p>
                  </div>
                  <div className="">
                    {" "}
                    <label
                      className=" text-gray-700 text-sm font-semibold mb-3"
                      htmlFor="jobType"
                    >
                      Job Type*
                    </label>
                    <Dropdown
                      value={jobTypes}
                      name={"Select Job Type"}
                      id="jobType"
                      setData={setJobSelect}
                    />
                  </div>
                  <div className="">
                    {" "}
                    <label
                      className=" text-gray-700 text-sm font-semibold mb-3"
                      htmlFor="jobSector"
                    >
                      Job Sector*
                    </label>
                    <Dropdown
                      value={jobSectors}
                      name={"Select Job Sector"}
                      id="jobSector"
                      setData={setJobSector}
                    />
                  </div>
                  {/* {jobSector.id} */}
                </div>
                <div className="mb-7">
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="required_skills"
                  >
                    Required Skills*
                  </label>
                  <input
                    value={jobData.required_skills}
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
                      value={jobData.salary_minimum}
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
                      value={jobData.salary_maximum}
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
                    // value={prevData.job_image.url}
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
                    <Dropdown
                      value={experiences}
                      name={"Experience"}
                      id="experience"
                      setData={setExperience}
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
                      value={qualifications}
                      name={"Qualifications"}
                      id="qualifications"
                      setData={setQualification}
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
                      value={jobData.city}
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
                      value={jobData.postal_code}
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
                      value={jobData.exact_location}
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
                Update Job
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditJob;
