import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { Icons } from "../icons";

type DashboardCardProps = {
	title: string;
	iconName?: keyof typeof Icons;
	contentText?: string;
	description?: string;
	headerDescription?: string;
	children?: React.ReactNode;
	className?: string;
};

export default function DashboardCard({
	title,
	iconName,
	contentText,
	headerDescription,
	description,
	children,
	className,
}: DashboardCardProps) {
	let Icon;

	if (iconName) {
		Icon = Icons[iconName];
	}

	return (
		<Card className="shadow-md">
			<CardHeader className="space-y-0 pb-2">
				<div className="flex flex-row items-center justify-between">
					<CardTitle className="sm:text-base text-sm font-bold">
						{title}
					</CardTitle>
					{Icon && <Icon className="w-4 h-4 text-muted-foreground" />}
				</div>
				<CardDescription>{headerDescription}</CardDescription>
			</CardHeader>
			<CardContent className={className}>
				<div className="sm:text-2xl text-xl font-bold">{contentText}</div>
				<p className="text-xs text-muted-foreground">{description}</p>
				{children}
			</CardContent>
		</Card>
	);
}
