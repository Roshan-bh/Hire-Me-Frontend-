import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaUsers, FaLaptopCode, FaNetworkWired } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import {
  SiMaterialdesign,
  SiWritedotas,
  SiMarketo,
  SiSourceengine,
  SiAltiumdesigner,
  SiVitest,
} from "react-icons/si";
export const PopularInternships = () => {
  return (
    <main>
      <div className="mt-4 text-center">
        <h4 className="text-xl  md:text-3xl lg:text-4xl text-dark font-semibold text-center">
          Popular Categories
        </h4>
        <p className="font-light text-lg py-2 text-black">
          A better career is out there. We'll help you find it. We're your first
          step to becoming everything you want to be
        </p>
      </div>
      <div className="flex items-center justify-center py-5">
        <div className="grid grid-cols-4 md:grid-cols-12 h-auto p-2 text-center ">
          <motion.div
            className="col-span-2 md:col-span-3 md:mx-11 mb-11"
            whileHover={{ scale: 1.2, duration: 3 }}
          >
            <Link href="" className="cursor-pointer">
              <span className="text-3xl lg:text-5xl font-semibold flex justify-center">
                <FaLaptopCode className="text-amber-600/80 mb-5" />
              </span>
              <h1 className="text-md lg:text-xl font-thin text-slate-950 uppercase">
                frontend development
              </h1>
              <span>(0 Vacancies)</span>
            </Link>
          </motion.div>
          <div className="col-span-2 md:col-span-3 md:mx-11 mb-11">
            <span className="text-3xl lg:text-5xl font-semibold flex justify-center">
              <FiDatabase className="text-amber-600/80 mb-5" />
            </span>
            <h1 className="text-md lg:text-xl font-thin text-slate-950 uppercase">
              backend development
            </h1>
            <span>(1 Vacancies)</span>
          </div>
          <div className="col-span-2 md:col-span-3 md:mx-11 mb-11">
            <span className="text-3xl lg:text-5xl font-semibold flex justify-center">
              <SiMaterialdesign className="text-amber-600/80 mb-5" />
            </span>
            <h1 className="text-md lg:text-xl font-thin text-slate-950 uppercase">
              UI/UX Designer
            </h1>
            <span>(5 Vacancies)</span>
          </div>
          <div className="col-span-2 md:col-span-3 md:mx-11 mb-11">
            <span className="text-3xl lg:text-5xl font-semibold flex justify-center">
              <SiWritedotas className="text-amber-600/80 mb-5" />
            </span>
            <h1 className="text-md lg:text-xl font-thin text-slate-950 uppercase">
              Content Writer
            </h1>
            <span>(5 Vacancies)</span>
          </div>
          <div className="col-span-2 md:col-span-3 md:mx-11 mb-11">
            <span className="text-3xl lg:text-5xl font-semibold flex justify-center">
              <SiMarketo className="text-amber-600/80 mb-5" />
            </span>
            <h1 className="text-md lg:text-xl font-thin text-slate-950 uppercase">
              Digital Marketing
            </h1>
            <span>(0 Vacancies)</span>
          </div>
          <div className="col-span-2 md:col-span-3 md:mx-11 mb-11">
            <span className="text-3xl lg:text-5xl font-semibold flex justify-center">
              <SiSourceengine className="text-amber-600/80 mb-5" />
            </span>
            <h1 className="text-md lg:text-xl font-thin text-slate-950 uppercase">
              search engine optimization
            </h1>
            <span>(0 Vacancies)</span>
          </div>
          <div className="col-span-2 md:col-span-3 md:mx-11 mb-11">
            <span className="text-3xl lg:text-5xl font-semibold flex justify-center">
              <SiAltiumdesigner className="text-amber-600/80 mb-5" />
            </span>
            <h1 className="text-md lg:text-xl font-thin text-slate-950 uppercase">
              Graphics Designer
            </h1>
            <span>(5 Vacancies)</span>
          </div>
          <div className="col-span-2 md:col-span-3 md:mx-11 mb-11">
            <span className="text-3xl lg:text-5xl font-semibold flex justify-center">
              <SiVitest className="text-amber-600/80 mb-5" />
            </span>
            <h1 className="text-md lg:text-xl font-thin text-slate-950 uppercase">
              Quality Assurance
            </h1>
            <span>(5 Vacancies)</span>
          </div>
        </div>
      </div>
    </main>
  );
};
