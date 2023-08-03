import { useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { FaUsers, FaSuitcase, FaNetworkWired } from "react-icons/fa";
export const AnimateNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);
  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};

export const Statistics = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-4 md:grid-cols-12 h-auto p-2 text-center ">
        <div className="col-span-4 md:mx-7 mb-9">
          <span className="text-5xl lg:text-7xl font-semibold flex justify-center">
            <FaSuitcase className="text-yellow-700/70" />
          </span>
          <span className="text-4xl lg:text-6xl font-semibold">
            <AnimateNumbers value={50} />+
          </span>
          <h1 className="text-lg lg:text-2xl font-medium">
            Internships Available
          </h1>
        </div>
        <div className="col-span-4 md:mx-7 mb-9">
          <span className="text-5xl lg:text-7xl font-semibold flex justify-center">
            <FaNetworkWired className="text-yellow-700/70" />
          </span>
          <span className="text-4xl lg:text-6xl font-semibold">
            <AnimateNumbers value={39} />+
          </span>
          <h1 className="text-lg lg:text-2xl font-medium">Jobs On Queue</h1>
        </div>
        <div className="col-span-4 md:mx-7 mb-9">
          <span className="text-5xl lg:text-7xl font-semibold flex justify-center">
            <FaUsers className="text-yellow-700/70" />
          </span>
          <span className="text-4xl lg:text-6xl font-semibold">
            <AnimateNumbers value={79} />+
          </span>
          <h1 className="text-lg lg:text-2xl font-medium">Active Members</h1>
        </div>
      </div>
    </div>
  );
};
