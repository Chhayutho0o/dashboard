import { fetchPosts } from "@/actions/posts";
import DashboardHeader from "@/components/dashboard/header";
import DashboardShell from "@/components/dashboard/shell";
import PostContent from "@/components/posts/post-content";

type PostPageProps = {
	searchParams: { [key: string]: string | string[] | undefined };
};

export default async function PostPage({ searchParams }: PostPageProps) {
	const posts = await fetchPosts(searchParams);

	return (
		<DashboardShell>
			<DashboardHeader
				heading="Posts"
				text="Create and manage posts."
			></DashboardHeader>
			<PostContent data={posts} searchParams={searchParams} />
		</DashboardShell>
	);
}
