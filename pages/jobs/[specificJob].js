import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SpecificDetails from "@/components/home/specificDetails";
import axios from "axios";

const baseUrl = "http://localhost:8000/api";
const SpecificJob = () => {
  const [jobDetails, setJobDetails] = useState({});
  const [jobSector, setJobSector] = useState({});
  const [jobType, setJobType] = useState({});
  const [salaryType, setSalaryType] = useState({});
  const [relatedData, setRelatedData] = useState([]);
  const router = useRouter();
  const job_id = router.query.specificJob;
  useEffect(() => {
    try {
      axios.get(baseUrl + "/jobs/" + 4).then((response) => {
        setJobDetails(response.data);
        setJobSector(response.data.job_sector);
        setJobType(response.data.job_type);
        setSalaryType(response.data.salary_type);
        setRelatedData(JSON.parse(response.data.related_jobs));
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const Data = {
    Details: jobDetails,
    Sector: jobSector,
    Type: jobType,
    salaryType: salaryType,
    relatedData: relatedData,
    val: "jobs",
    apply: "job",
    dataId: job_id,
  };
  return (
    <div>
      <SpecificDetails data={Data} />
    </div>
  );
};
export default SpecificJob;
