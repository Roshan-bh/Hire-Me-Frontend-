import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import Link from "next/link";

export const Dropdown = ({ value, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState();
  return (
    <>
      <div className="w-60 py-2 px-3 bg-white flex items-center justify-between rounded-sm shadow-lg">
        <span className={`${!selected ? "text-gray-400" : ""}`}>
          {selected ? selected : name}
        </span>
        <Link href="" onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen && <BiChevronDown size={20} />}
          {!isOpen && <BiChevronUp size={20} />}
        </Link>
      </div>
      <ul
        className={`${
          isOpen ? "bg-white mt-2 shadow-lg max-h-60 overflow-y-auto" : "hidden"
        }`}
      >
        <div className="sticky top-0">
          <input
            type="text"
            placeholder={name ? name + "..." : "select.."}
            className="placeholder:text-gray-400 outline-none p-2"
          />
        </div>

        {value?.map((item) => (
          <li
            key={item?.id}
            className="p-2 text-sm hover:bg-teal-500 hover:text-white hover:rounded-sm"
            onClick={() => setSelected(item.name)}
          >
            {item?.name}
          </li>
        ))}
      </ul>
    </>
  );
};
