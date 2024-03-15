import AnalyticContent from "@/components/dashboard/analytic-content";
import DashboardHeader from "@/components/dashboard/header";
import OverviewContent from "@/components/dashboard/overview-content";
import ReportContent from "@/components/dashboard/report-content";
import DashboardShell from "@/components/dashboard/shell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function DashboardPage() {
	return (
		<DashboardShell>
			<DashboardHeader heading="Dashboard" text="Overview all the content" />
			<Tabs defaultValue="overview" className="space-y-4">
				<TabsList className="text-bold">
					<TabsTrigger value="overview">Overview</TabsTrigger>
					<TabsTrigger value="analytics">Analytics</TabsTrigger>
					<TabsTrigger value="reports">Reports</TabsTrigger>
				</TabsList>
				<TabsContent value="overview">
					<OverviewContent />
				</TabsContent>
				<TabsContent value="analytics">
					<AnalyticContent />
				</TabsContent>
				<TabsContent value="reports">
					<ReportContent />
				</TabsContent>
			</Tabs>
		</DashboardShell>
	);
}
