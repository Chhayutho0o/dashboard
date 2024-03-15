"use client";

import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Legend,
} from "recharts";

const data = [
	{
		name: "Page A",
		pv: 2400,
		amt: 2400,
	},
	{
		name: "Page B",
		pv: 1398,
		amt: 2210,
	},
	{
		name: "Page C",
		pv: 9800,
		amt: 2290,
	},
	{
		name: "Page D",
		pv: 3908,
		amt: 2000,
	},
	{
		name: "Page E",
		pv: 4800,
		amt: 2181,
	},
	{
		name: "Page F",
		pv: 3800,
		amt: 2500,
	},
	{
		name: "Page G",
		pv: 4300,
		amt: 2100,
	},
];
export default function StackAreaChart() {
	return (
		<div className="mt-5">
			<ResponsiveContainer height={350}>
				<AreaChart
					width={500}
					height={400}
					data={data}
					margin={{
						top: 10,
						right: 30,
						left: 0,
						bottom: 0,
					}}
				>
					<Tooltip
						content={({ active, payload }) => {
							if (active && payload && payload.length) {
								return (
									<div className="rounded-lg border bg-background p-2 shadow-sm">
										<div className="grid grid-cols-2 gap-2">
											<div className="flex flex-col">
												<span className="text-[0.70rem] uppercase text-muted-foreground">
													PV
												</span>
												<span className="font-bold text-muted-foreground">
													{payload[0].value}
												</span>
											</div>
											<div className="flex flex-col">
												<span className="text-[0.70rem] uppercase text-muted-foreground">
													AMT
												</span>
												<span className="font-bold">{payload[1].value}</span>
											</div>
										</div>
									</div>
								);
							}

							return null;
						}}
					/>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Area
						type="monotone"
						dataKey="pv"
						stackId="1"
						stroke="#82ca9d"
						fill="#82ca9d"
					/>
					<Area
						type="monotone"
						dataKey="amt"
						stackId="1"
						stroke="#ffc658"
						fill="#ffc658"
					/>
					<Legend />
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
}
