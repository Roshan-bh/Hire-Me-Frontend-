import { useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { FaUsers, FaSuitcase, FaNetworkWired } from "react-icons/fa";
import axios from "axios";

const baseUrl = "http://localhost:8000/api";
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
  const [jobsNumber, setJobsNumber] = useState([]);
  const [internshipsNumber, setInternshipsNumber] = useState([]);
  const [candidateData, setCandidateData] = useState([]);
  const [employerData, setEmployerData] = useState([]);

  useEffect(() => {
    try {
      axios.get(baseUrl + "/jobs/").then((response) => {
        setJobsNumber(response.data);
      });
    } catch (error) {
      console.log(error);
    }
    try {
      axios.get(baseUrl + "/internships/").then((response) => {
        setInternshipsNumber(response.data);
      });
    } catch (error) {
      console.log(error);
    }
    try {
      axios.get(baseUrl + "/candidates/").then((response) => {
        setCandidateData(response.data);
      });
    } catch (error) {
      console.error(error);
    }
    try {
      axios.get(baseUrl + "/employers/").then((response) => {
        setEmployerData(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-4 md:grid-cols-12 h-auto p-2 text-center ">
        <div className="col-span-4 md:mx-7 mb-9">
          <span className="text-5xl lg:text-7xl font-semibold flex justify-center">
            <FaSuitcase className="text-yellow-700/70" />
          </span>
          <span className="text-4xl lg:text-6xl font-semibold">
            <AnimateNumbers value={internshipsNumber.length} />+
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
            <AnimateNumbers value={jobsNumber.length} />+
          </span>
          <h1 className="text-lg lg:text-2xl font-medium">Jobs On Queue</h1>
        </div>
        <div className="col-span-4 md:mx-7 mb-9">
          <span className="text-5xl lg:text-7xl font-semibold flex justify-center">
            <FaUsers className="text-yellow-700/70" />
          </span>
          <span className="text-4xl lg:text-6xl font-semibold">
            <AnimateNumbers
              value={employerData.length + candidateData.length}
            />
            +
          </span>
          <h1 className="text-lg lg:text-2xl font-medium">Active Members</h1>
        </div>
      </div>
    </div>
  );
};
