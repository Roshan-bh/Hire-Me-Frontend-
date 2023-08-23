import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import { DashboardSidebar } from "@/components/dashboardSidebar";
import { CompanyProfile } from "@/components/dashboard/companyProfile";
import { PostInternship } from "@/components/dashboard/postInternship";
import { ManageJobs } from "@/components/dashboard/manageJobs";
import { DeleteProfile } from "@/components/dashboard/deleteProfile";
import { ChangePassword } from "@/components/dashboard/changePassword";

const Layout = () => {
  const router = useRouter();
  const layout = router.query.layout;
  return (
    <>
      <div className="flex flex-col md:flex-row w-full">
        <div>
          <DashboardSidebar />
        </div>
        {layout == "changePassword" && (
          <div className="px-5">
            <ChangePassword />
          </div>
        )}
        {layout == "companyProfile" && (
          <div className="px-5">
            <CompanyProfile />
          </div>
        )}
        {layout == "postJob" && (
          <div className="w-full sm:w-4/5">
            <PostJob />
          </div>
        )}
        {layout == "postInternship" && (
          <div className="w-full sm:w-4/5">
            <PostInternship />
          </div>
        )}
        {layout == "manageJobs" && (
          <div className="w-full sm:w-4/5">
            <ManageJobs />
          </div>
        )}
        {layout == "deleteProfile" && (
          <div className="w-full sm:w-4/5">
            <DeleteProfile />
          </div>
        )}
      </div>
    </>
  );
};
export default Layout;
