import Image from "next/image";
import React from "react";
import { Statistics } from "./statistics";
export const Joiners = () => {
  return (
    <div className="mt-44 md:mt-64">
      <h4 className="text-xl  md:text-3xl lg:text-4xl text-dark font-semibold text-center">
        Our Recent Successfull Joiners
      </h4>
      <div className="p-8 w-full mt-5 grid grid-cols-12 justify-center items-center">
        <div className="col-span-12 lg:col-span-3 md:col-span-6 mb-7 p-4 border-[2px] border-solid mx-auto shadow-lg">
          <Image
            src="/images/4j.jpg"
            alt=""
            width={80}
            height={80}
            className="m-auto"
          />
          <p className="font-light uppercase m-1">Samra Adhikari</p>
        </div>
        <div className="col-span-12 lg:col-span-3 md:col-span-6 mb-7 p-4 border-[2px]  border-solid mx-auto shadow-lg">
          <Image
            src="/images/5j.jpg"
            alt=""
            width={80}
            height={80}
            className="m-auto"
          />
          <p className="font-light uppercase m-1">Rakesh Dhungel</p>
        </div>
        <div className="col-span-12 lg:col-span-3 md:col-span-6 mb-7 p-4 border-[2px]  border-solid mx-auto shadow-lg">
          <Image
            src="/images/6j.jpg"
            alt=""
            width={80}
            height={80}
            className="m-auto"
          />
          <p className="font-light uppercase m-1">Kripa Aryal</p>
        </div>
        <div className="col-span-12 lg:col-span-3 md:col-span-6 mb-7 p-4 border-[2px]  border-solid mx-auto shadow-lg">
          <Image
            src="/images/7j.jpg"
            alt=""
            width={80}
            height={80}
            className="m-auto"
          />
          <p className="font-light uppercase m-1">Akriti Lama</p>
        </div>
      </div>

      <Statistics />
    </div>
  );
};
