import { TableCell, TableRow } from "@/components/ui/table";
import { EmptyPlaceholder } from "@/components/commons/empty-placeholder";
import Table from "@/components/commons/table";
import { Button } from "../ui/button";
import { Icons } from "../icons";
import RowAction from "../commons/row-action";
import CommonPagination from "../pagination";

type GameType = {
	id: number;
	title: string;
};

const games: GameType[] = [
	{
		id: 1,
		title: "hhhaha",
	},
	{
		id: 2,
		title: "hhhah2",
	},
	{
		id: 3,
		title: "hhhah3",
	},
	{
		id: 4,
		title: "hhhah4",
	},
	{
		id: 5,
		title: "hhhah5",
	},
	{
		id: 6,
		title: "hhhah5",
	},
];

const column = ["ID", "Title", "Action"];

export default function GameContent({ searchParams }: any) {
	return (
		<div>
			{games?.length ? (
				<div className="divide-y divide-border rounded-md border">
					<Table columns={column}>
						{games.map((item) => (
							<TableRow key={item.id}>
								<TableCell>{item.id}</TableCell>
								<TableCell>{item.title}</TableCell>
								<TableCell>
									<RowAction title="game" id={item.id} view edit />
								</TableCell>
							</TableRow>
						))}
					</Table>
				</div>
			) : (
				<EmptyPlaceholder>
					<EmptyPlaceholder.Icon name="game" />
					<EmptyPlaceholder.Title>No games created</EmptyPlaceholder.Title>
					<EmptyPlaceholder.Description>
						You don&apos;t have any games yet. Start creating content.
					</EmptyPlaceholder.Description>
					<Button variant="outline">
						<Icons.add className="mr-2 w-4 h-4" /> New game
					</Button>
				</EmptyPlaceholder>
			)}
			<CommonPagination
				totalCount={games.length}
				perPage={5}
				searchParams={searchParams}
			/>
		</div>
	);
}
