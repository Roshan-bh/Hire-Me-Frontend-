import React from "react";
import { useRouter } from "next/router";
import { DashboardSidebar } from "@/components/dashboardSidebar";
import { CompanyProfile } from "@/components/dashboard/companyProfile";
import { PostJob } from "@/components/dashboard/postJob";
import { ManageJobs } from "@/components/dashboard/manageJobs";
import { DeleteProfile } from "@/components/dashboard/deleteProfile";

const Layout = () => {
  const router = useRouter();
  const layout = router.query.layout;
  return (
    <>
      <div className="flex flex-col md:flex-row w-full">
        <div>
          <DashboardSidebar />
        </div>

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
