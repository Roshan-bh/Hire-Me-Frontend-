import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import axios from "axios";

const baseUrl = "http://localhost:8000/api";
export const ChangePassword = () => {
  const Swal = require("sweetalert2");
  const [hidePassword, sethidePassword] = useState();
  const [empData, setEmpData] = useState({});
  const [changePass, setChangePass] = useState({});
  const [employerId, setEmployerId] = useState();
  useEffect(() => {
    const employer_id = localStorage.getItem("employer_id");
    setEmployerId(employer_id);
    try {
      axios.get(baseUrl + "/employer/" + employer_id).then((response) => {
        setEmpData(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const handleChange = (event) => {
    setChangePass({
      ...changePass,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("password", changePass.new_password);
    formData.append("confirm_password", changePass.confirm_password);
    const entered_current_password = changePass.current_password;
    const fetched_current_password = empData.password;
    console.log(entered_current_password);

    if (entered_current_password == fetched_current_password) {
      try {
        axios
          .post(baseUrl + "/employer-change-password/" + employerId, formData)
          .then((response) => {
            if (response.status === 200 || response.status === 201) {
              Swal.fire({
                title: "Password Changed Successfully",
                icon: "success",
                toast: true,
                timer: 3000,
                position: "top-right",
                timeProgressBar: true,
                showConfirmButton: false,
              });
              window.location.href = "/dashboard/employer/login";
            }
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      Swal.fire({
        title: "Enter the valid current password",
        icon: "error",
        toast: true,
        timer: 3000,
        position: "top-right",
        timeProgressBar: true,
        showConfirmButton: false,
      });
    }
  };
  console.log(empData);
  return (
    <>
      <div className="mt-5 px-5 md:px-0  md:mt-[105px] w-full">
        <h2 className="text-2xl font-medium tracking-wider mb-7">
          Change Password
        </h2>
        <div className="shadow-lg p-7 text-center ">
          <form onSubmit={handleFormSubmit}>
            <div className="relative p-1 my-2">
              <input
                name="current_password"
                placeholder="Enter Current Password"
                type={hidePassword ? "password" : "text"}
                className="text-md px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:placeholder-gray-500
                focus:bg-white 
                focus:border-gray-600  
                focus:outline-none"
                onChange={handleChange}
              />
              <div className="absolute inset-y-0 right-4 ">
                {hidePassword && (
                  <AiFillEye
                    className="flex mt-3 text-2xl"
                    onClick={() => {
                      sethidePassword(false);
                    }}
                  />
                )}
                {!hidePassword && (
                  <AiFillEyeInvisible
                    className="flex mt-3 text-2xl"
                    onClick={() => {
                      sethidePassword(true);
                    }}
                  />
                )}
              </div>
            </div>
            <div className="relative p-1 my-2">
              <input
                name="new_password"
                placeholder="Enter New Password"
                type={hidePassword ? "password" : "text"}
                className="text-md px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:placeholder-gray-500
                focus:bg-white 
                focus:border-gray-600  
                focus:outline-none"
                onChange={handleChange}
              />
              {/* <div className="absolute inset-y-0 right-4 ">
                {hidePassword && (
                  <AiFillEye
                    className="flex mt-3 text-2xl"
                    onClick={() => {
                      sethidePassword(false);
                    }}
                  />
                )}
                {!hidePassword && (
                  <AiFillEyeInvisible
                    className="flex mt-3 text-2xl"
                    onClick={() => {
                      sethidePassword(true);
                    }}
                  />
                )}
              </div> */}
            </div>
            <div className="relative p-1 my-2">
              <input
                name="confirm_password"
                placeholder="Enter Confirm Password"
                type={hidePassword ? "password" : "text"}
                className="text-md px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:placeholder-gray-500
                focus:bg-white 
                focus:border-gray-600  
                focus:outline-none"
                onChange={handleChange}
              />
              {/* <div className="absolute inset-y-0 right-4 ">
                {hidePassword && (
                  <AiFillEye
                    className="flex mt-3 text-2xl"
                    onClick={() => {
                      sethidePassword(false);
                    }}
                  />
                )}
                {!hidePassword && (
                  <AiFillEyeInvisible
                    className="flex mt-3 text-2xl"
                    onClick={() => {
                      sethidePassword(true);
                    }}
                  />
                )}
              </div> */}
            </div>

            <button
              type="submit"
              className="px-3 py-3 bg-gray-500 text-white rounded-md mt-4 mr-7 hover:bg-gray-700"
            >
              change password
            </button>
            <Link href="/dashboard/employer">
              <button
                type="button"
                className="px-4 py-3 bg-teal-500 text-white rounded-md mt-4 hover:bg-teal-700"
              >
                Go Back
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};
