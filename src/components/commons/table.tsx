import {
  Table as T,
  TableBody,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Icons } from "../icons";

type TableProps = {
  columns: string[];
  children: React.ReactNode;
};

export default function Table({
  columns,
  children
}: TableProps) {
  return (
    <T>
      <TableHeader>
        <TableRow>
          {columns.map((column, index) => (
            <TableHead key={index}>
              <div className="flex items-center">
                <Icons.arrow_up className="w-4 h-4 mr-2" />
                {column}
              </div>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>{children}</TableBody>
    </T>
  );
}
