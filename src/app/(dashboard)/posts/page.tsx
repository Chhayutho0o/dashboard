import { fetchPosts } from "@/actions/posts";
import DashboardHeader from "@/components/dashboard/header";
import DashboardShell from "@/components/dashboard/shell";
import ActionButton from "@/components/commons/action-button";
import { DataTable } from "@/components/table/data-table";
import { columns } from "@/components/posts/columns";

export default async function PostPage() {
  const { data } = await fetchPosts({ limit: 0 });

  return (
    <DashboardShell>
      <DashboardHeader heading="Posts" text="Create and manage posts.">
        <ActionButton href="/posts/1" title="Create post" />
      </DashboardHeader>
      <DataTable columns={columns} data={data} searchKey="title" />
    </DashboardShell>
  );
}
