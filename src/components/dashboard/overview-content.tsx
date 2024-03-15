import React from "react";
import DashboardCard from "./dashboard-card";
import { BarChart } from "../charts/bar-chart";
import { User } from "@/types";
import { fetchUsers } from "@/actions/users";
import RecentUsers from "./recent-users";

const OverviewContent = async () => {
  const { data } = await fetchUsers({ limit: "5" });

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 md:grid-cols-2 ">
        {[1, 2, 3, 4].map((item) => (
          <DashboardCard
            key={item}
            title="Title"
            iconName="moon"
            contentText="$45,231.89"
            description="+180.1% from last month"
          />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-5 my-5 lg:grid-cols-2">
        <DashboardCard title="Barchart" className="pl-2">
          <BarChart />
        </DashboardCard>
        <DashboardCard title="Recent posts" headerDescription="There are 100 posts this month.">
          <RecentUsers data={data} />
        </DashboardCard>
      </div>
    </div>
  );
};

export default OverviewContent;
