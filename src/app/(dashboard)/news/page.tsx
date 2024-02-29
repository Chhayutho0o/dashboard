import DashboardHeader from "@/components/dashboard/header";
import DashboardShell from "@/components/dashboard/shell";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function NewPage() {
	return (
		<DashboardShell>
			<DashboardHeader heading="News" text="Create and manage news.">
				<Button>
					<Icons.add /> New news
				</Button>
			</DashboardHeader>
		</DashboardShell>
	);
}
