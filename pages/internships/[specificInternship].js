import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SpecificDetails from "@/components/home/specificDetails";
import axios from "axios";

const baseUrl = "http://localhost:8000/api";
const SpecificInternship = () => {
  const [internshipDetails, setInternshipDetails] = useState({});
  const [internshipSector, setInternshipSector] = useState({});
  const [internshipType, setInternshipType] = useState({});
  const [salaryType, setSalaryType] = useState({});
  const [relatedData, setRelatedData] = useState([]);
  const router = useRouter();
  const data_id = router.query.specificInternship;

  useEffect(() => {
    try {
      axios.get(baseUrl + "/internships/" + 2).then((response) => {
        setInternshipDetails(response.data);
        setInternshipSector(response.data.internship_sector);
        setInternshipType(response.data.internship_type);
        setSalaryType(response.data.salary_type);
        setRelatedData(JSON.parse(response.data.related_internships));
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const Data = {
    Details: internshipDetails,
    Sector: internshipSector,
    Type: internshipType,
    salaryType: salaryType,
    relatedData: relatedData,
    val: "internships",
    apply: "internship",
    dataId: data_id,
  };
  return (
    <div>
      <SpecificDetails data={Data} />
    </div>
  );
};
export default SpecificInternship;
