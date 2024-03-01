import { TableCell, TableRow } from "@/components/ui/table";
import { EmptyPlaceholder } from "@/components/commons/empty-placeholder";
import Table from "@/components/commons/table";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import RowAction from "@/components/commons/row-action";
import { Post } from "@/types";

type PostTableProps = {
	columns: string[];
	data: Post[];
	total: number;
};

export default function PostTable({ data, columns, total }: PostTableProps) {
	if (total) {
		return (
			<div className="divide-y divide-border rounded-md border">
				<Table columns={columns}>
					{data.map((item) => (
						<TableRow key={item.id}>
							<TableCell>{item.id}</TableCell>
							<TableCell>{item.title}</TableCell>
							<TableCell className="truncate">{item.tags.join(",")}</TableCell>
							<TableCell>{item.reactions}</TableCell>
							<TableCell>
								<RowAction id={item.id} title="post" view edit trash />
							</TableCell>
						</TableRow>
					))}
				</Table>
			</div>
		);
	}

	return (
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
	);
}
