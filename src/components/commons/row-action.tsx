"use client";

import { useState } from "react";
import Link from "next/link";
import { Icons } from "../icons";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import AlertDialog from "./alert-dialog";

type RowActionProps = {
	view?: boolean;
	edit?: boolean;
	trash?: boolean;
	id: number;
	title: string;
};

export default function RowAction({
	view,
	edit,
	trash,
	id,
	title,
}: RowActionProps) {
	const [showDialog, setShowDialog] = useState(false);
	const href = `/${title}s/${id}`;

	if (showDialog) {
		return (
			<AlertDialog
				title="Are you sure you want to delete Post?"
				showDialog={showDialog}
				setShowDialog={setShowDialog}
			/>
		);
	}

	if (view && edit && trash) {
		return (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" className="h-8 w-8 p-0">
						<span className="sr-only">Open menu</span>
						<Icons.dotdot className="h-4 w-4" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuLabel>Actions</DropdownMenuLabel>
					<DropdownMenuItem>
						<Link href={href} className="flex items-center justify-center">
							<Icons.view className="mr-2 w-4 h-4" /> View {title}
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Link href={href} className="flex items-center justify-center">
							<Icons.edit className="mr-2 w-4 h-4" /> Edit {title}
						</Link>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem onClick={() => setShowDialog(true)}>
						<Icons.trash className="mr-2 w-4 h-4" /> Delete {title}
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		);
	}

	return (
		<div className="flex">
			{view && (
				<Link href={href}>
					<Icons.view className="mr-2 w-4 h-4" />
				</Link>
			)}
			{edit && (
				<Link href={`${href}/edit`}>
					<Icons.edit className="mr-2 w-4 h-4" />
				</Link>
			)}
			{trash && (
				<Link href={href}>
					<Icons.delete className="mr-2 w-4 h-4" />
				</Link>
			)}
		</div>
	);
}
