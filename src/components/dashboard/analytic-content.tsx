import React from "react";
import DashboardCard from "./dashboard-card";
import LineChart from "../charts/line-chart";
import BaxialBarChart from "../charts/baxial-bar-chart";
import RadarChart from "../charts/radar-chart";

export default function AnalyticContent() {
	return (
		<div className="flex flex-col">
			<div className="grid grid-cols-1 gap-5 my-5 lg:grid-cols-2">
				<DashboardCard title="Barchart" className="pl-2">
					<LineChart />
				</DashboardCard>
				<DashboardCard title="Barchart" className="pl-2">
					<BaxialBarChart />
				</DashboardCard>
				<DashboardCard title="Barchart" className="pl-2">
					<RadarChart />
				</DashboardCard>
			</div>
		</div>
	);
}
