import { TableCell, TableRow } from "@/components/ui/table";
import { EmptyPlaceholder } from "@/components/commons/empty-placeholder";
import Table from "@/components/commons/table";
import { Button } from "../ui/button";
import { Icons } from "../icons";
import RowAction from "../commons/row-action";
import CommonPagination from "../pagination";

const column = ["ID", "Title", "Action"];

export default function GameContent({ searchParams, games }: any) {
  return (
    <div>
      {games?.length ? (
        <>
          <div className="divide-y divide-border rounded-md border">
            <Table columns={column}>
              {games.map((item: any) => (
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
          <CommonPagination totalCount={games?.length} perPage={5} searchParams={searchParams} />
        </>
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
    </div>
  );
}
