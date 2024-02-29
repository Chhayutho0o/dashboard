import { fetchUsers } from "@/actions/users";
import DashboardHeader from "@/components/dashboard/header";
import DashboardShell from "@/components/dashboard/shell";
import UserContent from "@/components/users/user-content";

type UserPageProps = {
	searchParams: { [key: string]: string | string[] | undefined };
};

export default async function UserPage({ searchParams }: UserPageProps) {
	const users = await fetchUsers(searchParams);

	return (
		<DashboardShell>
			<DashboardHeader
				heading="Users"
				text="Create and manage users."
			></DashboardHeader>
			<UserContent data={users} searchParams={searchParams} />
		</DashboardShell>
	);
}
