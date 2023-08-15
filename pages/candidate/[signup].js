import React from "react";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Multiselect from "multiselect-react-dropdown";

const baseUrl = "http://localhost:8000/api/candidates/";
const Signup = () => {
  //check state for candidate and employee registration.
  const Swal = require("sweetalert2");
  const [candidateData, setCandidateData] = useState({});
  const [status, setStatus] = useState({});
  const [options, setOptions] = useState([
    "Frontend Developer",
    "Backend Developer",
    "Content Writer",
    "Web Developer",
  ]);

  //chaneg element value
  const handleChange = (event) => {
    setCandidateData({
      ...candidateData,
      [event.target.name]: event.target.value,
    });
  };
  //handle file change
  const handleFileChange = (e) => {
    setCandidateData({ ...candidateData, [e.target.name]: e.target.files[0] });
  };

  //submit form data
  const submitForm = (e) => {
    e.preventDefault();
    const candidateFormData = new FormData();
    candidateFormData.append("first_name", candidateData.first_name);
    candidateFormData.append("last_name", candidateData.last_name);
    candidateFormData.append("email", candidateData.email);
    candidateFormData.append("password", candidateData.password);
    candidateFormData.append(
      "confirm_password",
      candidateData.confirm_password
    );
    candidateFormData.append("phone_number", candidateData.phone_number);
    candidateFormData.append("sectors", candidateData.sectors);
    candidateFormData.append(
      "resume",
      candidateData.resume,
      candidateData.resume.name
    );
    candidateFormData.append("terms_condition", true);
    try {
      axios.post(baseUrl, candidateFormData).then((response) => {
        setStatus({
          success: "success",
        });
        setCandidateData({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          confirm_password: "",
          phone_number: "",
          sectors: "",
          resume: "",
          terms_conditions: "",
        });
        if (response.status === 200) {
          Swal.fire({
            title: "Candidate register successfully",
            icon: "success",
            toast: true,
            timer: 3000,
            position: "bottom-end",
            timeProgressBar: true,
            showConfirmButton: false,
          });
        }
      });
    } catch (error) {
      setStatus({
        error: "error",
      });
      console.log(error);
    }
  };
  return (
    <main>
      <div className="mt-[120px]">
        <div className="bg-white opacity-100 px-7 py-4 rounded-sm shadow-xl border-2 w-full md:w-2/3 mx-auto">
          <div className="flex space-x-4 mt-7">
            <div
              id="candidate"
              className="w-full text-white py-5 px-3 rounded shadow-xl cursor-pointer border-2
                    bg-gray-800 border-black"
            >
              <h2 className="uppercase text-xl font-semibold text-center">
                Candidate
              </h2>
              <p className="italic text-md font-medium text-center">
                I want to discover awesome companies.
              </p>
            </div>
          </div>
          <form onSubmit={submitForm} className="mt-7 space-y-7 w-full">
            <div div className="flex flex-wrap mb-6">
              <div className="w-1/2 pr-2">
                <input
                  type="text"
                  name="first_name"
                  placeholder="Enter first name"
                  className="w-full bg-white hover:border-gray-300 focus:outline-none focus:border-gray-400 text-black border-2 rounded-sm py-2 px-3
                  "
                  onChange={handleChange}
                  value={candidateData.first_name}
                />
              </div>
              <div className="w-1/2 pl-2">
                <input
                  type="text"
                  name="last_name"
                  placeholder="Enter last name"
                  className="w-full bg-white hover:border-gray-300 focus:outline-none focus:border-gray-400 text-black border-2 rounded-sm py-2 px-3
                  "
                  onChange={handleChange}
                  value={candidateData.last_name}
                />
              </div>
              <div className="w-1/2 pr-2 mt-7">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  className="w-full bg-white hover:border-gray-300 focus:outline-none focus:border-gray-400 text-black border-2 rounded-sm py-2 px-3
                  "
                  onChange={handleChange}
                  value={candidateData.email}
                />
              </div>
              <div className="w-1/2 pl-2 mt-7">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password "
                  className="w-full bg-white hover:border-gray-300 focus:outline-none focus:border-gray-400 text-black border-2 rounded-sm py-2 px-3
                  "
                  onChange={handleChange}
                  value={candidateData.password}
                />
              </div>
              <div className="w-1/2 pr-2 mt-7">
                <input
                  type="password"
                  name="confirm_password"
                  placeholder="Enter confirm password "
                  className="w-full bg-white hover:border-gray-300 focus:outline-none focus:border-gray-400 text-black border-2 rounded-sm py-2 px-3
                  "
                  onChange={handleChange}
                  value={candidateData.confirm_password}
                />
              </div>
              <div className="w-1/2 pl-2 mt-7">
                <input
                  type="text"
                  name="phone_number"
                  placeholder="Enter phone number (country code as well)"
                  className="w-full bg-white hover:border-gray-300 focus:outline-none focus:border-gray-400 text-black border-2 rounded-sm py-2 px-3
                  "
                  onChange={handleChange}
                  value={candidateData.phone_number}
                />
              </div>

              <div className="w-1/2 pl-2 mt-7">
                {/* <Multiselect
                  isObject={false}
                  onRemove={(e) => {}}
                  onSelect={(e) => {}}
                  options={options}
                  showCheckbox
                  closeOnSelect="false"
                  placeholder="--Select sectors--"
                  name="sectors"
                /> */}
                <input
                  type="textarea"
                  name="sectors"
                  placeholder="Enter the fields where you have your hands on ... eg: Web Development, etc.."
                  className="w-full bg-white hover:border-gray-300 focus:outline-none focus:border-gray-400 text-black border-2 rounded-sm py-2 px-3
                  "
                  onChange={handleChange}
                  value={candidateData.sectors}
                />
              </div>
              <div className="w-full pl-2 mt-7">
                <input
                  type="file"
                  className="rounded-sm shadow-lg w-full py-2 px-3 bg-white flex hover:outline-none hover:border-none focus:outline-none focus:border-none"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <div class="flex">
              <input
                id="checked-checkbox"
                type="checkbox"
                name="terms_condition"
                value="true"
                class="w-4 h-4 text-white bg-black border-gray-300 rounded focus:ring-black"
              />
              <label
                for="checked-checkbox"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Accept Terms & Conditions
              </label>
            </div>
            <button
              type="submit"
              className="text-white flex mx-auto rounded-md bg-black px-4 py-2 hover:bg-black/80 mt-7"
            >
              Submit
            </button>
          </form>
          <div className="flex mt-4"></div>
          <h2 className="text-thin text-blue-600">
            Already Have an Account ?&nbsp;
            <Link
              href="/employer/login"
              className="text-thin text-blue-600 hover:underline"
            >
              Login
            </Link>
          </h2>
        </div>
      </div>
    </main>
  );
};

export default Signup;
