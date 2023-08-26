import React, { useState } from "react";
import {
  MdCallEnd,
  MdOutlineLocationOn,
  MdOutlineMail,
  MdOutlineShoppingBag,
  MdOutlineQuestionAnswer,
  MdSupervisedUserCircle,
} from "react-icons/md";
import Link from "next/link";
import axios from "axios";

const baseUrl = "http://localhost:8000";
const Contact = () => {
  const [contactData, setContactData] = useState({
    first_name: "",
    last_name: "",
    subject: "",
    mail: "",
    message: "",
  });
  const Swal = require("sweetalert2");
  const handleChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value,
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("first_name", contactData.first_name);
    formData.append("last_name", contactData.last_name);
    formData.append("subject", contactData.subject);
    formData.append("mail", contactData.mail);
    formData.append("message", contactData.message);
    try {
      if (
        contactData.first_name === "" ||
        contactData.last_name === "" ||
        contactData.subject === "" ||
        contactData.mail === "" ||
        contactData.message === ""
      ) {
        Swal.fire({
          title: "Please fill all the fields below",
          icon: "error",
          toast: true,
          timer: 3500,
          position: "top-right",
          timeProgressBar: true,
          showConfirmButton: false,
        });
      } else {
        axios.post(baseUrl + "/contact/", formData).then((response) => {
          if (response.status === 200 || response.status === 201) {
            setContactData({
              first_name: "",
              last_name: "",
              subject: "",
              mail: "",
              message: "",
            });
            Swal.fire({
              title: " Contact Details Submitted Successfully",
              icon: "success",
              toast: true,
              timer: 3500,
              position: "top-right",
              timeProgressBar: true,
              showConfirmButton: false,
            });
          } else {
            Swal.fire({
              title: "Please enter the correct Details",
              icon: "error",
              toast: true,
              timer: 3500,
              position: "top-right",
              timeProgressBar: true,
              showConfirmButton: false,
            });
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main>
      <div className="mt-[80px] p-9">
        <div className="flex flex-col md:flex-row  shadow-lg justify-center mx-[25px] md:mx-[70] lg:mx-[100px] ">
          <div className=" w-full md:w-2/5 flex flex-col bg-black/50 text-white py-8 px-12 ">
            <h2 className="capitalize text-2xl font-medium">
              contact information
            </h2>
            <h3 className="text-lg font-[50px] mt-4">
              Request a Service Inquiry.
            </h3>
            <ul className="list-decimal list-inside">
              <li>Company's interns & junior hiring.</li>
              <li> College placement.</li>
              <p className="text-lg mt-3">Get a call from us. </p>
              <MdCallEnd className="text-lg inline-flex text-white mr-3" />
              <span>+977-9865382885</span>
              <p className="text-white">Office Hours: 10:00 AM - 6:00 PM</p>
              <h3 className="text-md font-[50px] mt-4">
                <MdOutlineLocationOn className="text-lg inline-flex text-white mr-3" />{" "}
                Located: Chitwan, Bharatpur-04 (Lanku, 00445)
              </h3>
              <h3 className="text-md font-[50px] mt-4">
                <MdOutlineMail className="text-lg inline-flex text-white mr-3 mb-[2px]" />
                Email: contact@hireme.com
              </h3>
            </ul>
          </div>
          <div className="w-full md:w-3/5 flex flex-col bg-slate-100 text-black py-8 px-12">
            <h2 className="capitalize text-2xl font-medium mb-7">
              Inquire about the placement service. (Employer / College /
              Candidate)
            </h2>
            <form onSubmit={handleFormSubmit} className="w-full">
              <div className="flex flex-wrap mb-6">
                <div className="w-1/2 pr-4">
                  <input
                    type="text"
                    name="first_name"
                    onChange={handleChange}
                    value={contactData.first_name}
                    placeholder="Enter first name"
                    className="w-full bg-white hover:border-gray-300 focus:outline-none focus:border-gray-400 text-black border-2 rounded-sm py-2 px-3
                  "
                  />
                </div>
                <div className="w-1/2 pl-4">
                  <input
                    type="text"
                    name="last_name"
                    onChange={handleChange}
                    value={contactData.last_name}
                    placeholder="Enter last name"
                    className="w-full bg-white hover:border-gray-300 focus:outline-none focus:border-gray-400 text-black border-2 rounded-sm py-2 px-3
                  "
                  />
                </div>
                <div className="w-1/2 pr-4 mt-7">
                  <input
                    type="text"
                    name="subject"
                    onChange={handleChange}
                    value={contactData.subject}
                    placeholder="Subject"
                    className="w-full bg-white hover:border-gray-300 focus:outline-none focus:border-gray-400 text-black border-2 rounded-sm py-2 px-3
                  "
                  />
                </div>
                <div className="w-1/2 pl-4 mt-7">
                  <input
                    type="text"
                    name="mail"
                    onChange={handleChange}
                    value={contactData.mail}
                    placeholder="Enter your mail "
                    className="w-full bg-white hover:border-gray-300 focus:outline-none focus:border-gray-400 text-black border-2 rounded-sm py-2 px-3
                  "
                  />
                </div>
                <div className="w-full pr-4 mt-7">
                  <input
                    type="text"
                    name="message"
                    onChange={handleChange}
                    value={contactData.message}
                    placeholder="Enter your message "
                    className="w-full min-h-[120px] bg-white hover:border-gray-300 focus:outline-none focus:border-gray-400 text-black border-2 rounded-sm py-2 px-3
                  "
                  />
                </div>
                <button
                  type="submit"
                  className="text-white flex rounded-md bg-black px-4 py-2 hover:bg-black/80 mt-7"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-24 flex flex-col md:flex-row mx-[25px] md:mx-[70] lg:mx-[100px] space-y-16 md:space-y-0 md:space-x-9">
          <div className="w-full md:w-1/3 flex-col justify-center items-center space-y-3 ">
            <h1 className="font-semibold text-3xl text-black text-center">
              Want Internship ?
            </h1>
            <div className="text-center">
              <MdSupervisedUserCircle className="text-[100px] text-gray-500 inline-block" />
            </div>
            <div className="text-center">
              <Link href="/internships">
                <button className="rounded-full text-center text-white bg-slate-500 hover:underline px-9 py-3 font-md uppercase">
                  Careers
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex-col justify-center items-center space-y-3 ">
            <h1 className="font-semibold text-3xl text-black text-center">
              Want Job ?
            </h1>
            <div className="text-center">
              <MdOutlineShoppingBag className="text-[100px] text-gray-500 inline-block" />
            </div>
            <div className="text-center">
              <Link href="/jobs">
                <button className="rounded-full text-center text-white bg-slate-500 hover:underline px-9 py-3 font-md uppercase">
                  Browse
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex-col justify-center items-center space-y-3 ">
            <h1 className="font-semibold text-3xl text-black text-center">
              Have Questions ?
            </h1>
            <div className="text-center">
              <MdOutlineQuestionAnswer className="text-[100px] text-gray-500 inline-block" />
            </div>
            <div className="text-center">
              <Link href="/faq">
                <button className="rounded-full text-center text-white bg-slate-500 hover:underline px-9 py-3 font-md uppercase">
                  Our FAQ
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Contact;
