import { Search } from "./search";
import Image from "next/image";
import { GoLocation } from "react-icons/go";
import { BiHeartCircle } from "react-icons/bi";
import { Filter } from "./filter";
export const ListAll = (props) => {
  const jobList = [
    { name: "Full Time" },
    { name: "Part Time" },
    { name: "Freelance" },
    { name: "Hours Basis" },
    { name: "Remote" },
  ];
  const industry = [
    { name: "Web Development" },
    { name: "Android Development" },
    { name: "Bank" },
    { name: "Restaurants" },
    { name: "IOS Development" },
  ];
  console.log(props.data.fetchedData);
  return (
    <>
      <div className="mt-[80px]">
        <div className="mt-24 p-9 md:p-20 md:mx-20 lg:mx-32">
          <Search />
        </div>
        <div className="search-result flex flex-col md:flex-row justify-center w-full">
          <div className="filter-section w-full md:w-1/3 flex flex-row md:flex-col">
            <Filter name={props.data.value} filterMenu={jobList} />
            <Filter name={"Industry"} filterMenu={industry} />
          </div>
          <div className="result-section flex flex-col w-full md:w-2/3 lg:-ml-20 ">
            <h3 className="text-2xl font-semibold text-gray-800 mx-2">
              <span>{props.data.fetchedData.length} </span>
              Items Found
            </h3>
            {props.data.fetchedData &&
              props.data.fetchedData.map((item, index) => (
                <div
                  className="shadow-xl border-2 mt-3 flex flex-wrap p-4 mx-2"
                  key={index}
                >
                  <div className="relative w-[120px] h-[120px] justify-center inline-flex lg:border-r-2 lg:border-gray-400 ">
                    <Image
                      src={
                        item.job_image ? item.job_image : item.internship_image
                      }
                      width={80}
                      height={80}
                      className="p-3 rounded-sm border border-r-2"
                      alt={item.title.slice(0, 6)}
                    />
                  </div>
                  <div className="md:w-5/6 w-full flex flex-col justify-between pl-9 text-left">
                    <h4 className="text-xl font-medium capitalize">
                      {/* SEO intern for BusyFood website */}
                      {item.title}
                      <p className="text-sm font-medium text-gray-400 capitalize">
                        {/* @ Kukura tech and research Pvt. Ltd. */}@{" "}
                        {item.employer.organization_name}
                      </p>
                    </h4>

                    <h3
                      className="text-md font-semibold capitalize  my-2
              "
                    >
                      <GoLocation className="inline-block" />{" "}
                      {/* <span> anamnagar chowk, bharatpur-08, chitwan</span> */}
                      <span>{item.exact_location}</span>
                    </h3>
                    <div className="flex">
                      <h4 className="uppercase text-sm font-semibold text-white bg-green-600 text-center p-2 rounded-sm flex">
                        {/* work from home */}
                        {item.job_type
                          ? item.job_type.title
                          : item.internship_type.title}
                      </h4>
                      <span className="text-2xl text-red-400 ml-2">
                        <BiHeartCircle className="inline-block" />
                      </span>
                      <h4 className=" ml-2 capitalize text-sm font-thin text-gray-700 bg-amber-300 text-center py-2 px-4  flex rounded-full tracking-wider">
                        {/* web development */}
                        {item.job_sector
                          ? item.job_sector.title
                          : item.internship_sector.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
