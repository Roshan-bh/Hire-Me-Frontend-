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
        <div className="col-span-12 lg:col-span-3 md:col-span-6 mb-7 p-3 border-[2px]  border-solid mx-auto shadow-lg">
          <div className="relative h-[120px] w-[120px]">
            <Image src="/images/6j.jpg" alt="" fill className="m-auto" />
          </div>

          <p className="font-light uppercase m-1 text-center">Kripa Aryal</p>
        </div>
        <div className="col-span-12 lg:col-span-3 md:col-span-6 mb-7 p-3 border-[2px]  border-solid mx-auto shadow-lg">
          <div className="relative h-[120px] w-[120px]">
            <Image src="/images/6j.jpg" alt="" fill className="m-auto" />
          </div>

          <p className="font-light uppercase m-1 text-center">Kripa Aryal</p>
        </div>
        <div className="col-span-12 lg:col-span-3 md:col-span-6 mb-7 p-3 border-[2px]  border-solid mx-auto shadow-lg">
          <div className="relative h-[120px] w-[120px]">
            <Image src="/images/6j.jpg" alt="" fill className="m-auto" />
          </div>

          <p className="font-light uppercase m-1 text-center">Kripa Aryal</p>
        </div>
        <div className="col-span-12 lg:col-span-3 md:col-span-6 mb-7 p-3 border-[2px]  border-solid mx-auto shadow-lg">
          <div className="relative h-[120px] w-[120px]">
            <Image src="/images/6j.jpg" alt="" fill className="m-auto" />
          </div>

          <p className="font-light uppercase m-1 text-center">Kripa Aryal</p>
        </div>
      </div>

      <Statistics />
    </div>
  );
};
