import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

// const DashboardSidebar = dynamic(
//   () => import("@/components/dashboardSidebar"),
//   { ssr: false }
// );
// const CompanyProfile = dynamic(
//   () => import("@/components/dashboard/companyProfile"),
//   { ssr: false }
// );
// const PostJob = dynamic(() => import("@/components/dashboard/postJob"), {
//   ssr: false,
// });
// const ManageJobs = dynamic(() => import("@/components/dashboard/manageJobs"), {
//   ssr: false,
// });
// const DeleteProfile = dynamic(
//   () => import("@/components/dashboard/deleteProfile"),
//   { ssr: false }
// );

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
