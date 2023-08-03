import Image from "next/image";
import { useRouter } from "next/router";
import { VscVerified } from "react-icons/vsc";
import { GoLocation, GoCalendar } from "react-icons/go";
import { BiMoneyWithdraw, BiUserVoice, BiHeartCircle } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import Link from "next/link";

const SpecificInternship = () => {
  const router = useRouter();
  const specificIntern = router.query.specificInternship;
  return (
    <main className="mt-[82px]">
      <div className="w-screen h-[320px] bg-gray-400/60"></div>
      <div className="-mt-32 grid grid-cols-5 md:border-2 md:border-solid shadow-xl mx-[80px] md:mx-[140px] lg:mx-[130px] divide-x divide-black/50  bg-white">
        <div className="left col-span-5  lg:col-span-1 p-9 flex items-center justify-center">
          <Image
            src="/images/8fi.jpg"
            width={150}
            height={150}
            className="shadow-sm rounded-sm"
          />
        </div>
        <div className="right col-span-5 md:col-span-4 py-3 pl-9 flex flex-col justify-between space-y-4">
          <h3 className="font-semibold text-3xl">Frontend Developer</h3>
          <h2>
            <span className="text-sm bg-green-500 font-[23px] p-2 rounded-sm">
              <VscVerified className="inline-block text-lg mb-[2px]" /> Full
              Time Internship
            </span>
            <span className="text-lg  font-medium">
              &nbsp; @Sundrive Nepal Pvt. Ltd.
            </span>
            <span className="text-sm italic text-red-600">
              &nbsp; published 4 days ago
            </span>
            <span className="font-medium text-md">
              &nbsp; in Frontend Development
            </span>
          </h2>
          <h2 className="text-lg font-medium">
            <GoLocation className="inline-block" />
            <span className="capitalize">&nbsp; bharatpur-04, chitwan </span>
          </h2>
          <h2 className="flex flex-col md:flex-row">
            <span className="capitalize font-semibold">
              <GoCalendar className="inline-block mb-1 text-red-600" /> post
              date : 20 june 2023
            </span>
            <span className="capitalize font-semibold md:mx-7">
              <GoCalendar className="inline-block mb-1 text-red-600" /> apply
              before : 29 june 2023
            </span>
            <span className="capitalize font-semibold">
              <BiMoneyWithdraw className="inline-block mb-1 text-red-600 text-lg" />
              &nbsp;salary range : Rs.10000 - Rs.140000
            </span>
          </h2>
          <h2>
            <span className="capitalize font-semibold">
              <BiUserVoice className="inline-block mb-1 text-red-600 text-lg" />
              &nbsp;8 application(s)
            </span>
          </h2>
          <h>
            <Link href="" className="capitalize font-semibold">
              <TfiEmail className="inline-block mb-1 text-red-600 text-lg" />
              &nbsp;
              <button className="text-white bg-red-500 rounded-md p-2 hover:underline font-medium text-sm">
                Email Us
              </button>
            </Link>
          </h>
        </div>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-5 mx-[80px] md:mx-[140px] lg:mx-[130px] bg-white gap-5 ">
          <div className="col-span-5 lg:col-span-4 p-12 shadow-xl border-2">
            <h1 className="text-3xl text-center font-semibold mb-4">
              Job Detail
            </h1>
            <h2 className="text-xl underline font-medium mb-3">
              Job Description
            </h2>
            <h2 className="text-xl font-semibold mb-2">
              SEO Internship in Tinkune at RankMeTop
            </h2>
            <h3 className="text-lg font font-semibold"># About Company</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              iusto unde laudantium illum vitae saepe, asperiores neque dolorem
              beatae quos dicta praesentium a ex rerum eos? Reiciendis possimus
              aliquid eum. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Vitae, sit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              omnis, distinctio laborum deserunt corrupti illo.
            </p>
            <p className="font-medium mt-2 mb-7">
              -- Stipend Amount: 10,000 Per Month --
            </p>
            <h3 className="text-lg font font-semibold">
              # Guidance Given To You On:
            </h3>
            <ul className="list-decimal list-inside">
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
                quae.
              </li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam!
              </li>
            </ul>
            <h3 className="text-lg font font-semibold mt-7">
              # Roles & Responsibilities:
            </h3>
            <ul className="list-disc list-inside">
              <li> Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                dolore voluptate!
              </li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At!
              </li>
            </ul>
            <h3 className="text-lg font font-semibold mt-7">
              # Company Benefits:
            </h3>
            <ul className="list-disc list-inside">
              <li> Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                dolore voluptate!
              </li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At!
              </li>
            </ul>
            <div className="mt-14 mb-7">
              <h3 className="text-lg font font-semibold mb-2 mt-7">
                # Required Skills:
              </h3>
              <div className="flex space-x-4">
                <h4 className="capitalize text-sm font-medium text-white bg-green-500 text-center p-2 rounded-md flex">
                  off page seo
                </h4>
                <h4 className="capitalize text-sm font-medium text-white bg-green-500 text-center p-2 rounded-md flex">
                  on page seo
                </h4>
                <h4 className="capitalize text-sm font-medium text-white bg-green-500 text-center p-2 rounded-md flex">
                  technical seo
                </h4>
              </div>
            </div>
          </div>
          <div className="col-span-5 lg:col-span-1 p-4 shadow-xl border-2 flex flex-col justify-center max-h-[300px] items-center ">
            <button className="text-white bg-green-700 text-md font-medium rounded-md hover:bg-green-600 flex mx-auto px-4 py-3">
              Login to Apply
            </button>
            <p className="text-center text-red-500 font-semibold text-md mt-1">
              Application ends in 9days 23hrs 25min
            </p>
            <button className="text-white bg-lime-600 text-md font-medium rounded-md hover:bg-lime-500 py-3 px-4 mt-11 flex">
              <span className="">Contact Employer</span>
            </button>
          </div>
          <h2 className="text-2xl font-semibold capitalize col-span-5 mt-14">
            Other jobs you May Like
          </h2>
          <div className=" col-span-5 lg:col-span-4 shadow-xl border-2 mt-3 flex flex-wrap p-4">
            <div className="w-full md:w-1/6 justify-center inline-flex lg:border-r-2 lg:border-gray-400 ">
              <Image
                src="/images/9fi.jpg"
                width={80}
                height={80}
                className="p-3 rounded-sm border border-r-2"
              />
            </div>
            <div className="md:w-5/6 w-full flex flex-col justify-between pl-9 text-left">
              <h4 className="text-xl font-medium capitalize">
                SEO intern for BusyFood website
                <p className="text-sm font-medium text-gray-400 capitalize">
                  @ Kukura tech and research Pvt. Ltd.
                </p>
              </h4>

              <h3
                className="text-md font-semibold capitalize my-2
              "
              >
                <GoLocation className="inline-block" />{" "}
                <span> anamnagar chowk, bharatpur-08, chitwan</span>
              </h3>
              <div className="flex">
                <h4 className="uppercase text-sm font-semibold text-white bg-green-600 text-center p-2 rounded-sm flex">
                  work from home
                </h4>
                <span className="text-2xl text-red-400 ml-2">
                  <BiHeartCircle className="inline-block" />
                </span>
                <h4 className=" ml-2 capitalize text-sm font-thin text-gray-700 bg-amber-300 text-center py-2 px-4  flex rounded-full tracking-wider">
                  web development
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default SpecificInternship;
