import {
	Table as T,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

type TableProps = {
	columns: string[];
	children: React.ReactNode;
};

export default function Table({ columns, children }: TableProps) {
	return (
		<T>
			<TableHeader>
				<TableRow>
					{columns.map((column, index) => (
						<TableHead key={index}>{column}</TableHead>
					))}
				</TableRow>
			</TableHeader>
			<TableBody>{children}</TableBody>
		</T>
	);
}
