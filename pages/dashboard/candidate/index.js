import React from "react";
import { DashboardSidebar } from "@/components/dashboard/candidate/dashboardSidebar";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full">
        <div>
          {" "}
          <DashboardSidebar />
        </div>

        <div className=" mt-5 px-5 md:px-0  md:mt-[105px] w-full md:w-3/4">
          <h2 className="text-2xl font-medium tracking-wider mb-7">
            Dashboard
          </h2>

          <div className="flex flex-wrap grid-cols-4 items-center justify-between">
            <div className=" text-center shadow-lg px-5 py-4 ">
              <h2 className=" tracking-wide r text-lg font-semibold">
                Posted Jobs
              </h2>
              <span>0 view</span>
            </div>
            <div className=" text-center shadow-lg px-5 py-4 ">
              <h2 className=" tracking-wide r text-lg font-semibold">
                Posted Jobs
              </h2>
              <span>0 view</span>
            </div>
            <div className=" text-center shadow-lg px-5 py-4 ">
              <h2 className=" tracking-wide r text-lg font-semibold">
                Posted Jobs
              </h2>
              <span>0 view</span>
            </div>
            <div className=" text-center shadow-lg px-5 py-4 ">
              <h2 className=" tracking-wide r text-lg font-semibold">
                Posted Jobs
              </h2>
              <span>0 view</span>
            </div>
          </div>
          <div className="shadow-lg pb-10 pt-7 px-5">
            <h3 className="w-screen text-2xl font-medium text-teal-500 mb-2">
              Recent Applicants
            </h3>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
