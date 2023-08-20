import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const baseUrl = "http://localhost:8000/api";
export const ProfileSetting = () => {
  const Swal = require("sweetalert2");
  const [candidateData, setCandidateData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    sectors: "",
    prev_can_img: "",
    candidate_image: "",
    prev_resume: "",
    resume: "",
  });
  const candidate_id = localStorage.getItem("candidate_id");
  useEffect(() => {
    try {
      axios.get(baseUrl + "/candidate/" + candidate_id).then((response) => {
        setCandidateData(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const handleChange = (e) => {
    setCandidateData({
      ...candidateData,
      [e.target.name]: e.target.value,
    });
  };

  //handle the changing values in input tag for file formats.
  const handleFileChange = (e) => {
    setCandidateData({ ...candidateData, [e.target.name]: e.target.files[0] });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("first_name", candidateData.first_name);
    formData.append("last_name", candidateData.last_name);
    formData.append("email", candidateData.email);
    formData.append("phone_number", candidateData.phone_number);
    formData.append("sectors", candidateData.sectors);
    formData.append(
      "candidate_image",
      candidateData.candidate_image,
      candidateData.candidate_image.name
    );
    formData.append("resume", candidateData.resume, candidateData.resume.name);
    try {
      axios
        .put(baseUrl + "/candidate/" + candidate_id, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          console.log(response.data);
          if (response.status === 200) {
            Swal.fire({
              title: "Profile updated successfully",
              icon: "success",
              toast: true,
              timer: 3000,
              position: "top-right",
              timeProgressBar: true,
              showConfirmButton: false,
            });
          }
        });
    } catch (e) {
      console.log(e.data);
    }
  };

  const candidateLoginStatus = localStorage.getItem("candidateLoginStatus");

  if (candidateLoginStatus != "true") {
    window.location.href = "/candidate/login";
  }
  return (
    <>
      <div className="flex flex-col md:flex-row w-full">
        <div className=" mt-5 md:ps-5 md:mt-[105px] w-full md:w-3/4">
          <div>
            <form onSubmit={handleFormSubmit}>
              <div className="shadow-md p-5">
                <h2 className="text-2xl font-medium tracking-wider mb-7">
                  Update Profile
                </h2>
                <div className="mb-7">
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="first_name"
                  >
                    First Name*
                  </label>
                  <input
                    className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="first_name"
                    name="first_name"
                    type="text"
                    placeholder="Enter first name"
                    value={candidateData.first_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-7">
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="last_name"
                  >
                    Last Name*
                  </label>
                  <input
                    className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="last_name"
                    name="last_name"
                    type="text"
                    placeholder="Enter last name"
                    value={candidateData.last_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-7">
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="email"
                  >
                    Email*
                  </label>
                  <input
                    className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                    value={candidateData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-7">
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="phone_number"
                  >
                    Phone Number
                  </label>
                  <input
                    className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone_number"
                    name="phone_number"
                    type="tel"
                    placeholder="Enter email address"
                    value={candidateData.phone_number}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-7">
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="sectors"
                  >
                    Sectors*
                  </label>
                  <input
                    className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="sectors"
                    name="sectors"
                    type="textarea"
                    placeholder="Enter fields where you have your hands on eg: web development"
                    value={candidateData.sectors}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-7">
                  {" "}
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="candidate_image"
                  >
                    Upload Imgae
                  </label>
                  <input
                    type="file"
                    className="rounded-sm shadow-lg w-full py-2 px-3 bg-white flex hover:outline-none hover:border-none focus:outline-none focus:border-none"
                    id="candidate_image"
                    name="candidate_image"
                    onChange={handleFileChange}
                  />
                  {candidateData.candidate_image && (
                    <div className="relative w-[100px] h-[100px]">
                      <Image
                        src={candidateData.candidate_image}
                        alt={
                          candidateData.first_name +
                          " " +
                          candidateData.last_name
                        }
                        fill
                      ></Image>
                    </div>
                  )}
                </div>
                <div className="">
                  {" "}
                  <label
                    className=" text-gray-700 text-sm font-semibold mb-3"
                    htmlFor="resume"
                  >
                    Upload resume
                  </label>
                  <input
                    type="file"
                    className="rounded-sm shadow-lg full py-2 px-3 bg-white flex hover:outline-none hover:border-none focus:outline-none focus:border-none"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                  />
                  {candidateData.resume && (
                    <div className="relative w-[100px] h-[100px]">
                      <Image
                        src={candidateData.resume}
                        alt={
                          candidateData.first_name +
                          " " +
                          candidateData.last_name +
                          " " +
                          "resume"
                        }
                        fill
                      ></Image>
                    </div>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="text-white flex mx-auto rounded-md bg-black px-4 py-2 hover:bg-black/80 mt-7"
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
