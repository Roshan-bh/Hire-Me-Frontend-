import Link from "next/link";
import React, { useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

export const DeleteProfile = () => {
  const [hidePassword, sethidePassword] = useState();
  return (
    <>
      <div className=" mt-5 px-5 md:px-0  md:mt-[105px] w-full md:w-3/4">
        <h2 className="text-2xl font-medium tracking-wider mb-7">
          Delete Profile
        </h2>
        <div className="shadow-lg p-7 text-center">
          <p className="text-2xl font-semibold p-1">
            Are you sure ! you want to delete your profile?
          </p>
          <p className="text-xl font-light p-1">This can't be undone.</p>
          <form action="" method="post">
            <p className="font-medium pb-1">Enter a password to confirm:</p>
            <div className="relative p-1">
              <input
                placeholder=""
                type={hidePassword ? "password" : "text"}
                className="text-md px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:placeholder-gray-500
                focus:bg-white 
                focus:border-gray-600  
                focus:outline-none"
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

            <div className="flex items-center p-1">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="link-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I agree with the{" "}
                <Link
                  href="#"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  terms and conditions
                </Link>
                .
              </label>
            </div>

            <button
              type="submit"
              className="px-3 py-3 bg-red-500 text-white rounded-md mt-4 mr-7 hover:bg-red-700"
            >
              Delete Profile
            </button>
            <Link href="dashboard">
              <button className="px-4 py-3 bg-teal-500 text-white rounded-md mt-4 hover:bg-teal-700">
                Go Back
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};
