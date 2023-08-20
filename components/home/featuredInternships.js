import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import axios from "axios";

const baseUrl = "http://localhost:8000/api";
export const FeaturedInternships = () => {
  const [internshipData, setInternshipData] = useState([]);
  useEffect(() => {
    try {
      axios.get(baseUrl + "/internships/?result=4").then((response) => {
        setInternshipData(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(internshipData);
  return (
    <main>
      <div className="mt-4 text-center">
        <h4 className="text-xl  md:text-3xl lg:text-4xl text-dark font-semibold text-center">
          Featured Internships
        </h4>
        <p className="font-light text-lg py-2 text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          inventore a, officia enim excepturi saepe rerum tempore accusamus.
        </p>
      </div>
      <div className="flex items-center justify-center py-5">
        <div className="grid grid-cols-6 lg:grid-cols-12 h-auto p-2 text-center ">
          {internshipData &&
            internshipData.map((item, index) => (
              <motion.div
                className="col-span-6 mx-3 p-8 shadow-xl bg-slate-100 lg:mx-16 mb-10"
                whileHover={{ scale: 1.1 }}
              >
                <Link
                  href={`internships/${item.id}`}
                  className="cursor-pointer flex "
                >
                  <Image
                    src={item.internship_image}
                    width={90}
                    height={90}
                    alt={item.title}
                    className="p-2 shadow-md rounded-md object-contain"
                  />
                  <p className=" mx-3 border-l-2 border-black/30"></p>
                  <div className="mx-5 text-left">
                    <h2 className=" text-2xl font-semibold">
                      {item.internship_sector.title}
                    </h2>
                    <p className="text-lg font-[18px]">
                      @ {item.employer.companyProfile.company_name}
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
            <Link
              href="internships/graphics-designer"
              className="cursor-pointer flex"
            >
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
                <h1 className="text-lg font-[18px]">
                  @ Sundrive Nepal Pvt. Ltd.
                </h1>
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
