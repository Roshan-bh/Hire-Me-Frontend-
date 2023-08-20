import React from "react";
import { useRouter } from "next/router";
import { DashboardSidebar } from "@/components/dashboard/candidate/dashboardSidebar";
import { AppliedInternships } from "@//components/dashboard/candidate/appliedInternships";
import { AppliedJobs } from "@//components/dashboard/candidate/appliedJobs";
import { ChangePassword } from "@//components/dashboard/candidate/changePassword";
import { DeleteProfile } from "@//components/dashboard/candidate/deleteProfile";
import { ProfileSetting } from "@//components/dashboard/candidate/profileSetting";

const Layout = () => {
  const router = useRouter();
  const layout = router.query.layout;
  return (
    <>
      <div className="flex flex-col md:flex-row w-full">
        <div>
          <DashboardSidebar />
        </div>

        {layout == "appliedJobs" && (
          <div className="px-5">
            <AppliedJobs />
          </div>
        )}
        {layout == "appliedInternships" && (
          <div className="px-5">
            <AppliedInternships />
          </div>
        )}
        {layout == "changePassword" && (
          <div className="w-full sm:w-4/5">
            <ChangePassword />
          </div>
        )}
        {layout == "profileSetting" && (
          <div className="w-full sm:w-4/5">
            <ProfileSetting />
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
