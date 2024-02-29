import DashboardHeader from "@/components/dashboard/header";
import DashboardShell from "@/components/dashboard/shell";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function TagPage() {
	return (
		<DashboardShell>
			<DashboardHeader heading="Tags" text="Create and manage tag.">
				<Button>
					<Icons.add /> New tag
				</Button>
			</DashboardHeader>
		</DashboardShell>
	);
}
