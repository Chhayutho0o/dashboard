import { fetchUsers } from "@/actions/users";
import DashboardHeader from "@/components/dashboard/header";
import DashboardShell from "@/components/dashboard/shell";
import { DataTable } from "@/components/table/data-table";
import { columns } from "@/components/users/columns";

export default async function UserPage() {
  const { data } = await fetchUsers({ limit: 0 });

  return (
    <DashboardShell>
      <DashboardHeader heading="Users" text="Create and manage users."></DashboardHeader>
      <DataTable columns={columns} data={data} searchKey={"firstName"} />
    </DashboardShell>
  );
}
