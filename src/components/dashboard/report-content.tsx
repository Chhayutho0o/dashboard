import React from "react";
import StackAreaChart from "../charts/stack-area-chart";
import DashboardCard from "./dashboard-card";
import HalfPieChart from "../charts/half-pie-chart";

export default function ReportContent() {
	return (
		<div className="flex flex-col">
			<DashboardCard title="Barchart" className="pl-2">
				<StackAreaChart />
			</DashboardCard>
			<div className="grid grid-cols-1 gap-5 my-5 md:grid-cols-2 lg:grid-cols-3">
				<DashboardCard title="Barchart" className="pl-2">
					<HalfPieChart />
				</DashboardCard>
			</div>
		</div>
	);
}
