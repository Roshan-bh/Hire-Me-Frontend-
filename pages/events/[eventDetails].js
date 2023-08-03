import Image from "next/image";
import { useRouter } from "next/router";
import { FiClock } from "react-icons/fi";
import { BsPersonFillUp } from "react-icons/bs";
import { FaRegIdCard } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { useState } from "react";

const EventDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const specificEvent = router.query.eventDetails;
  return (
    <main className="mt-32 mx-9">
      <div className="image px-2 flex flex-col md:flex-row  space-x-7">
        <div className="w-1/2 border-r-2 border-gray-400 pr-7">
          <Image src="/images/ed1.jpg" width={700} height={700} alt="" />
        </div>
        <div className="w-1/2">
          <h2 className="text-3xl font-semibold text-black tracking-wide mb-4 ">
            Frontend Workshop at Anamnagar Saraswoti Complex
          </h2>
          <div>
            <h4 className="text-xl underline font-semibold">Details:</h4>
            <p className="font-thin text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              molestiae vel, nostrum assumenda quis vero libero ratione totam
              perspiciatis deserunt asperiores. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nulla molestiae vel, nostrum
              assumenda quis vero libero ratione totam perspiciatis deserunt
              asperiores.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nulla molestiae vel, nostrum assumenda quis vero libero
              ratione totam perspiciatis deserunt asperiores. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Nulla molestiae vel,
              nostrum assumenda quis vero libero ratione totam perspiciatis
              deserunt asperiores.
            </p>
          </div>
          <div className="my-4">
            <p className="text-xl font-thin">
              <FiClock className="text-orange-600 inline-block text-2xl mr-2 mb-1" />
              <span className="text-orange-600">
                Scheduled at 10:30 AM. -- November 29
              </span>
            </p>
          </div>
          <motion.button
            className=" text-thin text-center text-sm bg-black/75 text-white p-3 rounded-md"
            whileHover={{ scale: 1.1, textDecoration: "underline" }}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {!isOpen && (
              <div className="flex items-center space-x-2">
                <FaRegIdCard classname="text-orange-600 inline-block text-xl mr-2 mb-1" />
                <span>Register Yourself</span>
              </div>
            )}
            {isOpen && (
              <div className="flex items-center space-x-2">
                <BsPersonFillUp classname="text-orange-600 inline-block text-xl mr-2 mb-1" />
                <span>Fill and Submit</span>
              </div>
            )}
          </motion.button>
        </div>
      </div>
      {isOpen && (
        <div className=" mt-7 flex justify-center">
          <form
            action=""
            className="mt-7 space-y-7 w-2/3 shadow-lg p-4 bg-gray-300"
          >
            <h1 className="text-center text-3xl underline font-thin">
              <span>Registration Form </span>
              <AiOutlineCloseCircle
                className=" ml-3 inline-block text-3xl font-semibold text-black hover:scale-[1.1] cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </h1>
            <div div className="flex flex-wrap mb-6">
              <div className="w-1/2 pr-2">
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="w-full bg-white hover:border-gray-300 focus:outline-none focus:border-gray-400 text-black border-2 rounded-sm py-2 px-3
                  "
                />
              </div>
              <div className="w-1/2 pl-2">
                <input
                  type="text"
                  placeholder="Enter last name"
                  className="w-full bg-white hover:border-gray-300 focus:outline-none focus:border-gray-400 text-black border-2 rounded-sm py-2 px-3
                  "
                />
              </div>
              <div className="w-1/2 pr-2 mt-7">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full bg-white hover:border-gray-300 focus:outline-none focus:border-gray-400 text-black border-2 rounded-sm py-2 px-3
                  "
                />
              </div>
              <div className="w-1/2 pl-2 mt-7">
                <input
                  type="text"
                  placeholder="Enter current position (eg: student) "
                  className="w-full bg-white hover:border-gray-300 focus:outline-none focus:border-gray-400 text-black border-2 rounded-sm py-2 px-3
                  "
                />
              </div>
              <div className="w-1/2 pr-2 mt-7">
                <input
                  type="number"
                  min="10"
                  placeholder="Enter your age "
                  className="w-full bg-white hover:border-gray-300 focus:outline-none focus:border-gray-400 text-black border-2 rounded-sm py-2 px-3
                  "
                />
              </div>
              <div className="w-1/2 pl-2 mt-7">
                <input
                  type="text"
                  placeholder="Enter phone number (country code as well)"
                  className="w-full bg-white hover:border-gray-300 focus:outline-none focus:border-gray-400 text-black border-2 rounded-sm py-2 px-3
                  "
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-white flex mx-auto rounded-md bg-black px-4 py-2 hover:bg-black/80 mt-7"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </main>
  );
};
export default EventDetails;
