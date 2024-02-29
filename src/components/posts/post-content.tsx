import { TableCell, TableRow } from "@/components/ui/table";
import { EmptyPlaceholder } from "@/components/commons/empty-placeholder";
import Table from "@/components/commons/table";
import { Button } from "../ui/button";
import { Icons } from "../icons";
import RowAction from "../commons/row-action";
import CommonPagination from "../pagination";
import { Posts } from "@/types";

type PostContentProps = {
	data: Posts;
	searchParams: any;
};

const column = ["ID", "Title", "tags", "Reactions", "Action"];

export default function PostContent({ data, searchParams }: PostContentProps) {
	return (
		<div>
			{data?.total ? (
				<div className="divide-y divide-border rounded-md border">
					<Table columns={column}>
						{data.posts.map((item) => (
							<TableRow key={item.id}>
								<TableCell>{item.id}</TableCell>
								<TableCell>{item.title}</TableCell>
								<TableCell className="truncate">
									{item.tags.join(",")}
								</TableCell>
								<TableCell>{item.reactions}</TableCell>
								<TableCell>
									<RowAction id={item.id} title="post" view edit trash />
								</TableCell>
							</TableRow>
						))}
					</Table>
				</div>
			) : (
				<EmptyPlaceholder>
					<EmptyPlaceholder.Icon name="page" />
					<EmptyPlaceholder.Title>No post created</EmptyPlaceholder.Title>
					<EmptyPlaceholder.Description>
						You don&apos;t have any posts yet. Start creating content.
					</EmptyPlaceholder.Description>
					<Button variant="outline">
						<Icons.add className="mr-2 w-4 h-4" /> New post
					</Button>
				</EmptyPlaceholder>
			)}
			<CommonPagination
				totalCount={data.total}
				perPage={5}
				searchParams={searchParams}
			/>
		</div>
	);
}
