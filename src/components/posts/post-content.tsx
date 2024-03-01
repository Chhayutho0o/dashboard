import CommonPagination from "../pagination";
import { Posts } from "@/types";
import PostTable from "./post-table";

type PostContentProps = {
	data: Posts;
	searchParams: any;
};

const column = ["ID", "Title", "tags", "Reactions", "Action"];

export default function PostContent({ data, searchParams }: PostContentProps) {
	return (
		<div>
			<PostTable data={data.posts} total={data.total} columns={column} />
			<CommonPagination
				totalCount={data.total}
				perPage={5}
				searchParams={searchParams}
			/>
		</div>
	);
}
