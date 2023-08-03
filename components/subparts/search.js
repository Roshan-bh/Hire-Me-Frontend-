import React from "react";
import { BsSearch, BsMic } from "react-icons/bs";
export const Search = () => {
  return (
    <>
      <form action="" className="flex items-center">
        <label htmlFor="voice-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <BsSearch className="inline-block" />
          </div>
          <input
            type="text"
            id="voice-search"
            className=" py-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search your desire positions..."
            required
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            <BsMic className="inline-block" />
          </button>
        </div>
        <button
          type="submit"
          className="inline-flex items-center py-4 px-4 ml-2 text-sm font-medium text-white bg-gray-700 rounded-lg border border-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          <BsSearch className="inline-block mr-2" />
          Search
        </button>
      </form>
    </>
  );
};
