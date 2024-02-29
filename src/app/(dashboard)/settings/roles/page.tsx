import DashboardHeader from "@/components/dashboard/header";
import DashboardShell from "@/components/dashboard/shell";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function RolePage() {
	return (
		<DashboardShell>
			<DashboardHeader heading="Roles" text="Create and manage role.">
				<Button>
					<Icons.add /> New role
				</Button>
			</DashboardHeader>
		</DashboardShell>
	);
}
