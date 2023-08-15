import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

const baseUrl = "http://localhost:8000/api";
const Login = () => {
  const [candidateLoginData, setCandidateLoginData] = useState({});
  const [errMsg, setErrMsg] = useState();
  //set key value pairs for login details.
  const handleChange = (e) => {
    setCandidateLoginData({
      ...candidateLoginData,
      [e.target.name]: e.target.value,
    });
  };

  //submitting the form to get login
  const submitForm = (e) => {
    e.preventDefault();
    const candidateLoginFormData = new FormData();
    candidateLoginFormData.append("email", candidateLoginData.email);
    candidateLoginFormData.append("password", candidateLoginData.password);
    try {
      axios
        .post(baseUrl + "/candidate_login/", candidateLoginFormData)
        .then((res) => {
          setCandidateLoginData({
            email: "",
            password: "",
          });
          if (res.data.bool == true) {
            localStorage.setItem("userLoginStatus", true);
            localStorage.setItem("candidateLoginStatus", true);
            localStorage.setItem("employerLoginStatus", false);
            localStorage.setItem("candidate_id", res.data.candidate_id);
            window.location.href = "/dashboard";
          }
          if (res.data.bool == false) {
            setErrMsg("Enter Valid Email and Password");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const userLoginStatus = localStorage.getItem("userLoginStatus");
    const candidateLoginStatus = localStorage.getItem("candidateLoginStatus");
    if (candidateLoginStatus == "true") {
      window.location.href = "/dashboard";
    }
  });
  //sweetalert2 to display message
  const Swal = require("sweetalert2");

  return (
    <main>
      <div className="mt-[120px]">
        <div className="bg-white px-7 py-4 rounded-sm shadow-xl border-2 w-2/3 md:w-2/4 mx-auto">
          <div className="flex space-x-4 mt-7">
            <div
              id="login"
              className="w-full text-white py-5 px-3 rounded shadow-xl cursor-pointer border-2 bg-gray-800 border-black"
            >
              <h2 className="uppercase text-xl font-semibold text-center">
                Candidate Login
              </h2>
              <p className="italic text-md font-medium text-center">
                Login to get explore.
              </p>
            </div>
          </div>
          <form onSubmit={submitForm} className="mt-7 space-y-7">
            <input
              type="text"
              id="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter email address"
              className="w-full bg-white hover:border-gray-300 focus:outline-none focus:border-gray-400 text-black border-2 rounded-sm py-2 px-3
                  "
              value={candidateLoginData.email}
            />

            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              autoComplete=""
              placeholder="Enter password"
              className="w-full bg-white hover:border-gray-300 focus:outline-none focus:border-gray-400 text-black border-2 rounded-sm py-2 px-3
                  "
              value={candidateLoginData.password}
            />

            <button
              type="submit"
              className="text-white flex mx-auto rounded-md bg-black px-4 py-2 hover:bg-black/80 mt-7"
            >
              Submit
            </button>
          </form>
          <div className="flex mt-4"></div>
          <Link href="" className="text-thin text-blue-500 hover:underline">
            Forgot Password |
          </Link>
          <Link
            href="/candidate/signup"
            className="text-thin text-blue-600 hover:underline"
          >
            &nbsp;Sign Up
          </Link>
        </div>
        <div className="mt-7 w-2/3 md:w-2/4 mx-auto text-center">
          {" "}
          {errMsg && (
            <p className=" m-auto text-danger bg-red-400 p-2">{errMsg}</p>
          )}
        </div>
      </div>
    </main>
  );
};
export default Login;
