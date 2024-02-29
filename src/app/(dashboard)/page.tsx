import DashboardHeader from "@/components/dashboard/header";
import DashboardShell from "@/components/dashboard/shell";

export default function DashboardPage() {
	return (
		<DashboardShell>
			<DashboardHeader
				heading="Dashboard"
				text="Overview all the content"
			></DashboardHeader>
		</DashboardShell>
	);
}
