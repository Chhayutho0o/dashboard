import { TableCell, TableRow } from "@/components/ui/table";
import { EmptyPlaceholder } from "@/components/commons/empty-placeholder";
import Table from "@/components/commons/table";
import { Button } from "../ui/button";
import { Icons } from "../icons";
import RowAction from "../commons/row-action";
import CommonPagination from "../pagination";
import { Users } from "@/types";
import { Avatar, AvatarImage } from "../ui/avatar";

type UserContentProps = {
	data: Users;
	searchParams: any;
};

const column = ["ID", "Fullname", "email", "image", "Action"];

export default function UserContent({ data, searchParams }: UserContentProps) {
	return (
		<div>
			{data?.total ? (
				<div className="divide-y divide-border rounded-md border">
					<Table columns={column}>
						{data.users.map((item) => (
							<TableRow key={item.id}>
								<TableCell>{item.id}</TableCell>
								<TableCell>
									<Avatar>
										<AvatarImage src={item.image} />
									</Avatar>
								</TableCell>
								<TableCell>{item.firstName + item.lastName}</TableCell>
								<TableCell>{item.email}</TableCell>
								<TableCell>
									<RowAction id={item.id} title="user" view />
								</TableCell>
							</TableRow>
						))}
					</Table>
				</div>
			) : (
				<EmptyPlaceholder>
					<EmptyPlaceholder.Icon name="page" />
					<EmptyPlaceholder.Title>No user created</EmptyPlaceholder.Title>
					<EmptyPlaceholder.Description>
						You don&apos;t have any users yet. Start creating content.
					</EmptyPlaceholder.Description>
					<Button variant="outline">
						<Icons.add className="mr-2 w-4 h-4" /> New user
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
