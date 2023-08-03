import React from "react";
import { useState } from "react";
import axios from "axios";
import { BiWindowClose } from "react-icons/bi";
import Link from "next/link";
import Multiselect from "multiselect-react-dropdown";
import { Login } from "./login";

const baseUrl = "http://localhost:8000/api/employers/";
export const Signup = ({ visible, onClose }) => {
  const [showForm, setShowForm] = useState(false);
  const handleLoginOnClose = (e) => {
    setShowForm(false);
  };
  //check state for candidate and employee registration.
  const [candidate, setCandidate] = useState(true);
  const [employerData, setemployerData] = useState(null);
  //chaneg element value
  const handleChange = (event) => {
    setemployerData({
      ...employerData,
      [event.target.name]: [event.target.value],
    });
  };
  //submit form data
  const submitForm = () => {
    const employerFormData = new FormData();
    employerFormData.append("first_name", employerData.first_name);
    employerFormData.append("last_name", employerData.last_name);
    employerFormData.append("email", employerData.email);
    employerFormData.append("password", employerData.password);
    employerFormData.append("phone_number", employerData.phone_number);
    employerFormData.append(
      "organization_name",
      employerData.organization_name
    );
    employerFormData.append("terms_condition", employerData.terms_condition);
    try {
      axios.post(baseUrl, employerFormData).then((response) => {
        console.log(response.data);
        console.log("roshan");
      });
    } catch (error) {
      console.log(error);
    }
  };
  const [employer, setEmployer] = useState(false);
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

  const handleSignupOnClose = (e) => {
    if (e.target.id === "container") {
      onClose();
    }
  };
  if (!visible) {
    return null;
  } else {
    return (
      <main>
        <div className={`${showForm ? "hidden" : ""}`}>
          <div
            className="fixed inset-0 bg-black opacity-[92%] z-50 flex justify-center items-center max-h-screen"
            onClick={handleSignupOnClose}
            id="container"
          >
            <div className="bg-white opacity-100 px-7 py-4 rounded-sm shadow-xl border-2 w-full md:w-2/3">
              <BiWindowClose
                className="text-4xl text-black mx-auto cursor-pointer hover:text-black/60"
                onClick={onClose}
              />
              <h2 className="text-center text-xl font-semibold uppercase">
                Sign Up
              </h2>
              <div className="flex space-x-4 mt-7">
                <div
                  id="candidate"
                  className={`w-1/2 text-white py-5 px-3 rounded shadow-xl cursor-pointer border-2  ${
                    candidate ? "bg-gray-800 border-black" : "bg-slate-400"
                  }`}
                  onClick={(e) => {
                    setCandidate(true);
                    setEmployer(false);
                  }}
                >
                  <h2 className="uppercase text-xl font-semibold text-center">
                    Candidate
                  </h2>
                  <p className="italic text-md font-medium text-center">
                    I want to discover awesome companies.
                  </p>
                </div>
                <div
                  id="employee"
                  className={`w-1/2 text-white py-5 px-3 rounded shadow-xl cursor-pointer border-2  ${
                    employer ? "bg-gray-800 border-black" : "bg-slate-400"
                  }`}
                  onClick={(e) => {
                    setEmployer(true);
                    setCandidate(false);
                  }}
                >
                  <h2 className="uppercase text-xl font-semibold text-center">
                    Employer
                  </h2>
                  <p className="italic text-md font-medium text-center">
                    I want to attract the best talent.
                  </p>
                </div>
              </div>
              <form action="" className="mt-7 space-y-7 w-full">
                <div div className="flex flex-wrap mb-6">
                  <div className="w-1/2 pr-2">
                    <input
                      type="text"
                      name="first_name"
                      placeholder="Enter first name"
                      className="w-full bg-white hover:border-gray-300 focus:outline-none focus:border-gray-400 text-black border-2 rounded-sm py-2 px-3
                  "
                      onChange={handleChange}
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
                    />
                  </div>
                  {employer && (
                    <div className="w-1/2 pl-2 mt-7">
                      <input
                        type="text"
                        name="organization_name"
                        placeholder="Enter organization name"
                        className="w-full bg-white hover:border-gray-300 focus:outline-none focus:border-gray-400 text-black border-2 rounded-sm py-2 px-3
                  "
                        onChange={handleChange}
                      />
                    </div>
                  )}

                  {candidate && (
                    <div className="w-1/2 pl-2 mt-7">
                      <Multiselect
                        isObject={false}
                        onRemove={(e) => {}}
                        onSelect={(e) => {}}
                        options={options}
                        showCheckbox
                        closeOnSelect="false"
                        placeholder="--Select sectors--"
                        name="sectors"
                      />
                    </div>
                  )}
                  {candidate && (
                    <div className="w-full pl-2 mt-7">
                      <input
                        type="file"
                        placeholder="upload your resume here"
                        className="w-full bg-white hover:border-gray-300 focus:outline-none focus:border-gray-400 text-black border-2 rounded-sm py-2 px-3 text-sm text-grey-500
                    file:mr-5 file:py-1 file:px-6
                    file:rounded-full file:border-0
                    file:text-sm file:font-medium
                    file:bg-blue-50 file:text-blue-700
                    hover:file:cursor-pointer hover:file:bg-amber-50
                    hover:file:text-amber-700
                  "
                      />
                    </div>
                  )}
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
                  onClick={submitForm}
                >
                  Submit
                </button>
              </form>
              <div className="flex mt-4"></div>
              <h2 className="text-thin text-blue-600">
                Already Have an Account ?&nbsp;
                <Link
                  href=""
                  className="text-thin text-blue-600 hover:underline"
                  onClick={() => {
                    setShowForm(true);
                  }}
                >
                  Login
                </Link>
              </h2>
            </div>
          </div>
        </div>
        <Login visible={showForm} onClose={handleLoginOnClose} />
      </main>
    );
  }
};
