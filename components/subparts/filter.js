import React, { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

export const Filter = ({ name, filterMenu }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className=" relative mx-7 mb-12 flex flex-col rounded-md shadow-xl border w-2/3">
        <button
          className="flex justify-between text-2xl font-semibold bg-green-500 py-5 px-9 tracking-wider w-full"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {name}
          {isOpen && <AiOutlineCaretUp className="h-8" />}
          {!isOpen && <AiOutlineCaretDown className="h-8" />}
        </button>
        {isOpen && (
          <form action="">
            <div className="mx-1 md:mx-4 pb-5 mt-4 space-y-3">
              {filterMenu.map((item, i) => (
                <div
                  key={item}
                  className="flex justify-between hover:bg-gray-300 p-1"
                >
                  <div className="ml-2 ">
                    <input
                      id="checked-checkbox"
                      type="checkbox"
                      value="{item.name}"
                      className="w-4 h-4 text-black rounded  dark:bg-black dark:border-black accent-green-700"
                    />
                    <label
                      for="checked-checkbox"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {item.name}
                    </label>
                  </div>
                  <button className="rounded-full h-8 w-8 text-sm p-1 mr-1 bg-orange-300 text-black ">
                    10
                  </button>
                </div>
              ))}
            </div>
          </form>
        )}
      </div>
    </>
  );
};
