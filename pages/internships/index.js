import React, { useState, useEffect } from "react";
import { ListAll } from "@/components/subparts/listAll";
import axios from "axios";

const baseUrl = "http://localhost:8000/api";
const InternshipList = () => {
  const [internshipData, setInternshipData] = useState([]);
  useEffect(() => {
    try {
      axios.get(baseUrl + "/internships/").then((response) => {
        setInternshipData(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const data = {
    value: "internships",
    fetchedData: internshipData,
  };
  return (
    <main>
      <ListAll data={data} />
    </main>
  );
};
export default InternshipList;
