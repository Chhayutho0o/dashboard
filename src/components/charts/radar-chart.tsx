"use client";

import {
	Radar,
	RadarChart as RC,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	ResponsiveContainer,
	Tooltip,
} from "recharts";

const data = [
	{
		subject: "Math",
		A: 120,
		B: 110,
		fullMark: 150,
	},
	{
		subject: "Chinese",
		A: 98,
		B: 130,
		fullMark: 150,
	},
	{
		subject: "English",
		A: 86,
		B: 130,
		fullMark: 150,
	},
	{
		subject: "Geography",
		A: 99,
		B: 100,
		fullMark: 150,
	},
	{
		subject: "Physics",
		A: 85,
		B: 90,
		fullMark: 150,
	},
	{
		subject: "History",
		A: 65,
		B: 85,
		fullMark: 150,
	},
];

export default function RadarChart() {
	return (
		<ResponsiveContainer aspect={1.8}>
			<RC cx="50%" cy="50%" outerRadius="80%" data={data}>
				<Tooltip
					content={({ active, payload }) => {
						if (active && payload && payload.length) {
							return (
								<div className="rounded-lg border bg-background p-2 shadow-sm">
									<div className="grid grid-cols-2 gap-2">
										<div className="flex flex-col">
											<span className="text-[0.70rem] uppercase text-muted-foreground">
												{payload[0].name}
											</span>
											<span className="font-bold text-muted-foreground">
												{payload[0].value}
											</span>
										</div>
									</div>
								</div>
							);
						}

						return null;
					}}
				/>
				<PolarGrid />
				<PolarAngleAxis dataKey="subject" className="stroke-primary" />
				<Radar
					name="Mike"
					dataKey="A"
					className="fill-primary stroke-primary"
					fillOpacity={0.6}
				/>
			</RC>
		</ResponsiveContainer>
	);
}
