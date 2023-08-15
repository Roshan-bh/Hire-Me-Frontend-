import React from "react";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";

const baseUrl = "http://localhost:8000/api/employers/";
const Signup = () => {
  const Swal = require("sweetalert2");
  const [employerData, setemployerData] = useState({});

  const [employer, setEmployer] = useState(false);
  const [options, setOptions] = useState([
    "Frontend Developer",
    "Backend Developer",
    "Content Writer",
    "Web Developer",
  ]);
  //chaneg element value
  const handleChange = (event) => {
    setemployerData({
      ...employerData,
      [event.target.name]: event.target.value,
    });
  };
  //submit form data
  const submitForm = (e) => {
    e.preventDefault();
    const employerFormData = new FormData();
    employerFormData.append("first_name", employerData.first_name);
    employerFormData.append("last_name", employerData.last_name);
    employerFormData.append("email", employerData.email);
    employerFormData.append("password", employerData.password);
    employerFormData.append("confirm_password", employerData.confirm_password);
    employerFormData.append("phone_number", employerData.phone_number);
    employerFormData.append(
      "organization_name",
      employerData.organization_name
    );
    employerFormData.append("terms_condition", true);
    try {
      axios.post(baseUrl, employerFormData).then((response) => {
        if (response.status === 200) {
          Swal.fire({
            title: "employer register successfully",
            icon: "success",
            toast: true,
            timer: 3000,
            position: "top-right",
            timeProgressBar: true,
            showConfirmButton: false,
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  console.log(employerData);
  return (
    <main>
      <div className="mt-[120px]">
        <div className="bg-white opacity-100 px-7 py-4 rounded-sm shadow-xl border-2 w-full md:w-2/3 mx-auto">
          <div className="flex space-x-4 mt-7">
            <div
              id="employer"
              className="w-full text-white py-5 px-3 rounded shadow-xl cursor-pointer border-2 bg-gray-800 border-black"
            >
              <h2 className="uppercase text-xl font-semibold text-center">
                Employer
              </h2>
              <p className="italic text-md font-medium text-center">
                I want to attract the best talent.
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
                  value={employerData.first_name}
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
                  value={employerData.last_name}
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
                  value={employerData.email}
                />
              </div>
              <div className="w-1/2 pl-2 mt-7">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password "
                  autoComplete=""
                  className="w-full bg-white hover:border-gray-300 focus:outline-none focus:border-gray-400 text-black border-2 rounded-sm py-2 px-3
                  "
                  onChange={handleChange}
                  value={employerData.password}
                />
              </div>
              <div className="w-1/2 pr-2 mt-7">
                <input
                  type="password"
                  name="confirm_password"
                  autoComplete=""
                  placeholder="Enter confirm password "
                  className="w-full bg-white hover:border-gray-300 focus:outline-none focus:border-gray-400 text-black border-2 rounded-sm py-2 px-3
                  "
                  onChange={handleChange}
                  value={employerData.confirm_password}
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
                  value={employerData.phone_number}
                />
              </div>
              <div className="w-1/2 pl-2 mt-7">
                <input
                  type="text"
                  name="organization_name"
                  placeholder="Enter organization name"
                  className="w-full bg-white hover:border-gray-300 focus:outline-none focus:border-gray-400 text-black border-2 rounded-sm py-2 px-3
                  "
                  onChange={handleChange}
                  value={employerData.organization_name}
                />
              </div>
            </div>
            <div className="flex">
              <input
                id="checked-checkbox"
                type="checkbox"
                name="terms_condition"
                className="w-4 h-4 text-white bg-black border-gray-300 rounded focus:ring-black"
                onChange={handleChange}
                value={employerData.terms_condition}
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
              Submit
            </button>
          </form>
          <div className="flex mt-4"></div>
          <h2 className="text-thin text-blue-600">
            Already Have an Account ?&nbsp;
            <Link
              href="/login"
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
