import React, { useState, useEffect } from "react";
import { ListAll } from "@/components/subparts/listAll";
import axios from "axios";

const baseUrl = "http://localhost:8000/api";
const JobList = () => {
  const [jobData, setJobData] = useState([]);
  useEffect(() => {
    try {
      axios.get(baseUrl + "/jobs/").then((response) => {
        setJobData(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const data = {
    value: "job",
    fetchedData: jobData,
  };
  return (
    <main>
      <ListAll data={data} />
    </main>
  );
};
export default JobList;
