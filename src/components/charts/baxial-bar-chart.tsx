"use client";

import { useConfig } from "@/hooks/use-config";
import { themes } from "@/theme/themes";
import { useTheme } from "next-themes";
import {
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const data = [
	{
		name: "Page A",
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: "Page B",
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: "Page C",
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: "Page D",
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: "Page E",
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: "Page F",
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: "Page G",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
];

export default function BaxialBarChart() {
	const { theme: mode } = useTheme();
	const [config] = useConfig();

	const theme = themes.find((theme) => theme.name === config.theme);

	return (
		<ResponsiveContainer aspect={1.8}>
			<BarChart
				width={500}
				height={300}
				data={data}
				margin={{
					top: 20,
					right: 30,
					left: 20,
					bottom: 5,
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
												UV
											</span>
											<span className="font-bold text-muted-foreground">
												{payload[0].value}
											</span>
										</div>
										<div className="flex flex-col">
											<span className="text-[0.70rem] uppercase text-muted-foreground">
												PV
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
				<YAxis
					yAxisId="left"
					orientation="left"
					fontSize={12}
					className="stroke-primary"
					tickLine={false}
					axisLine={false}
				/>
				<YAxis
					yAxisId="right"
					orientation="right"
					fontSize={12}
					className="stroke-secondary"
					tickLine={false}
					axisLine={false}
				/>
				<Legend />
				<Bar
					yAxisId="left"
					dataKey="pv"
					fill="currentColor"
					className="fill-primary"
					fontSize={12}
				/>
				<Bar
					yAxisId="right"
					dataKey="uv"
					fill="currentColor"
					className="fill-secondary"
					fontSize={12}
				/>
			</BarChart>
		</ResponsiveContainer>
	);
}
