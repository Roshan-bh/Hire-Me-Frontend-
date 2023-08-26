import React, { useEffect, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import Link from "next/link";
import axios from "axios";

const baseUrl = "http://localhost:8000";
const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [faqData, setFaqData] = useState([]);
  useEffect(() => {
    try {
      axios.get(baseUrl + "/faq/").then((response) => {
        setFaqData(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(faqData);
  return (
    <main>
      <div className="mt-[100px] p-9 m-auto w-2/3">
        {faqData &&
          faqData.map((item, index) => (
            <div id="accordion-collapse" data-accordion="collapse">
              <h2 id="accordion-collapse-heading">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-accordion-target="#accordion-collapse-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-1"
                >
                  <span>{item.question}</span>
                  <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    {isOpen && <BiChevronDown size={30} />}
                    {!isOpen && <BiChevronUp size={30} />}
                  </button>
                </button>
              </h2>
              <div
                id="accordion-collapse-body"
                className={`${isOpen ? "" : "hidden"}`}
                aria-labelledby="accordion-collapse-heading-1"
              >
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
};
export default Faq;
