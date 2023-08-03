import React from "react";
import { BiCloudUpload, BiUserPin } from "react-icons/bi";
export const Navtext = () => {
  return (
    <div>
      <div className="lg:mx-24 mx-5 sm:mx-20 text-center mt-[50px] bg-gray-300/30 rounded-md md:rounded-full">
        <h4 className="lg:p-4 p-3 md:p-2 text-white  inline  font-semibold lg:text-4xl xl:text-5xl md:text-3xl text-2xl">
          Hire Me for the hustler's to get their future bright.
        </h4>
        <p className="p-4 md:p-3 text-dark font-light text-lg sm:text-xl">
          On a mission to provide healthy and fruitfull jobs to those students
          and employees
          <br />
          who want to become a techy.
        </p>
      </div>
      <div className="flex space-x-5 lg:space-x-16 justify-center mt-14">
        <button className="bg-black/50 px-5 lg:px-10 py-4 focus:outline-none text-xl font-thin text-white border-0 text-center rounded-lg hover:bg-black/75 flex">
          <BiCloudUpload className="text-white mr-2 mt-[1px] text-lg md:text-2xl lg:text-3xl" />
          Upload Resume
        </button>
        <button className="bg-black/50 px-5 lg:px-10 py-4 focus:outline-none text-xl font-thin text-white border-0 text-center rounded-lg hover:bg-black/75 flex">
          <BiUserPin className="text-white mr-2 mt-[1px] text-lg md:text-2xl lg:text-3xl" />
          Get Latest Intenships & Jobs
        </button>
      </div>
    </div>
  );
};
