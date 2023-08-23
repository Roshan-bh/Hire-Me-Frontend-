import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import axios from "axios";

const baseUrl = "http://localhost:8000/api";
export const FeaturedJobs = () => {
  const [jobData, setJobData] = useState([]);
  useEffect(() => {
    try {
      axios.get(baseUrl + "/jobs/?result=4").then((response) => {
        setJobData(response.data.results);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(jobData);
  return (
    <main>
      <div className=" text-center">
        <h4 className="text-xl  md:text-3xl lg:text-4xl text-dark font-semibold text-center">
          Featured Jobs
        </h4>
        <p className="font-light text-lg py-2 text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          inventore a, officia enim excepturi saepe rerum tempore accusamus.
        </p>
      </div>
      <div className="flex items-center justify-center py-5">
        <div className="grid grid-cols-6 lg:grid-cols-12 h-auto p-2 text-center ">
          {jobData &&
            jobData.map((item, index) => (
              <motion.div
                className="col-span-6 mx-3 p-8 shadow-xl bg-slate-100 lg:mx-16 mb-10"
                whileHover={{ scale: 1.1 }}
                key={index}
              >
                <Link href={`jobs/${item.id}`} className="cursor-pointer flex ">
                  <div className="relative w-[100px] h-[100px]">
                    {" "}
                    <Image
                      src={item.job_image}
                      fill
                      alt={item.title}
                      className="p-2 shadow-md rounded-md object-contain"
                    />
                  </div>

                  <p className=" mx-3 border-l-2 border-black/30"></p>
                  <div className="mx-5 text-left">
                    <h2 className=" text-2xl font-semibold">
                      {item.job_sector.title}
                    </h2>
                    <p className="text-lg font-[18px]">
                      @ {item.organization_name}
                    </p>
                    <small className="text-sm">
                      <span>{item.exact_location}</span>
                    </small>
                  </div>
                </Link>
              </motion.div>
            ))}

          {/* <motion.div
            className="col-span-6 p-8 mx-3 shadow-xl bg-slate-100 lg:mx-16 mb-10"
            whileHover={{ scale: 1.1 }}
          >
            <Link href="jobs/graphics-designer" className="cursor-pointer flex">
              <Image
                src="/images/8fi.jpg"
                width={90}
                height={90}
                alt=""
                className="p-2 shadow-md rounded-md object-contain"
              />
              <p className=" mx-3 border-l-2 border-black/30"></p>
              <div className="mx-5 text-left">
                <h2 className=" text-2xl font-semibold">Graphics Designer</h2>
                <p className="text-lg font-[18px]">
                  @ Sundrive Nepal Pvt. Ltd.
                </p>
                <small className="text-sm">
                  Published 4 days ago Chitwan, Bharatpur-04, Nepal
                </small>
              </div>
            </Link>
          </motion.div> */}
        </div>
      </div>
    </main>
  );
};
