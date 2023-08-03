import Link from "next/link";
import React from "react";
import { FiClock } from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";

export const UpcomingEvents = () => {
  return (
    <main>
      <div className="text-center">
        <h4 className="text-xl  md:text-3xl lg:text-4xl text-dark font-semibold text-center">
          Upcoming Events
        </h4>
        <p className="font-light text-lg py-2 text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          inventore a, officia enim excepturi saepe rerum tempore accusamus.
        </p>
      </div>
      <div className="flex items-center justify-center py-2 mt-3">
        <div className="grid grid-cols-6 lg:grid-cols-12 p-3">
          <div className="col-span-6 shadow-lg rounded-md mb-9 mx-9 flex">
            <div className="left grid justify-center w-[160px] h-auto bg-black text-white rounded-l-md ">
              <span className=" text-4xl self-center">29</span>
              <span className="text-2xl -mt-5 ">Nov</span>
            </div>
            <div className="right pb-5 mx-5 px-3 text-left">
              <h2 className="text-2xl font-semibold text-black ">
                Frontend Workshop at Anamnagar Saraswoti Complex
              </h2>
              <div className="text-md text-gray-700 my-3">
                <p>
                  <FiClock className="text-black inline-block text-xl mr-2" />
                  <span>Scheduled at 10:30 AM.</span>
                </p>
              </div>
              <Link href="events/frontend-workshop">
                <motion.button
                  className="text-thin text-center text-sm bg-black/75 text-white p-2 rounded-md"
                  whileHover={{ scale: 1.1, textDecoration: "underline" }}
                >
                  View Details
                </motion.button>
              </Link>
            </div>
          </div>
          <div className="col-span-6 shadow-lg rounded-md mb-9 mx-9 flex">
            <div className="left grid justify-center w-[160px] h-auto bg-black text-white rounded-l-md ">
              <span className=" text-4xl self-center">29</span>
              <span className="text-2xl -mt-5 ">Nov</span>
            </div>
            <div className="right pb-5 mx-5 px-3 text-left">
              <h2 className="text-2xl font-semibold text-black ">
                Backend Workshop at Anamnagar Saraswoti Complex
              </h2>
              <div className="text-md text-gray-700 my-3">
                <p>
                  <FiClock className="text-dark inline-block text-xl mr-2" />
                  <span>Scheduled at 10:30 AM.</span>
                </p>
              </div>
              <Link href="events/frontend-workshop">
                <motion.button
                  className="text-thin text-center text-sm bg-black/75 text-white p-2 rounded-md"
                  whileHover={{ scale: 1.1, textDecoration: "underline" }}
                >
                  View Details
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
