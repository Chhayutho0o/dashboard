"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import {
	DropdownMenu as Menu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { NavItem } from "@/types";
import { Icons } from "@/components/icons";

type DropdownMenuProps = {
	item: NavItem;
	segment: string;
};

export default function DropdownMenu({ item, segment }: DropdownMenuProps) {
	return (
		<Menu>
			<DropdownMenuTrigger asChild>
				<span
					className={cn(
						"cursor-pointer flex items-center text-sm font-medium rounded-md transition-colors hover:text-foreground/80 p-2",
						item.href.startsWith(`/${segment}`)
							? "text-foreground bg-accent"
							: "text-foreground/60 "
					)}
				>
					{item.title} <Icons.chevronDown className="ml-2 w-4 h-4" />
				</span>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="shadow-md w-20" align="start">
				{item.items?.length &&
					item.items.map((submenu, subindex) => (
						<DropdownMenuItem key={subindex}>
							<Link href={submenu.href}>{submenu.title}</Link>
						</DropdownMenuItem>
					))}
			</DropdownMenuContent>
		</Menu>
	);
}
