"use client";

import Link from "next/link";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Icons } from "../icons";
import { logout } from "@/actions/auth";
import { toast } from "sonner";

export async function UserAccountNav({ account }: any) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Avatar>
					{account.image ? <AvatarImage src={account.image} /> : <Icons.user />}
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<div className="flex items-center justify-start gap-2 p-2">
					<div className="flex flex-col space-y-1 leading-none">
						{account.name && <p className="font-medium">{account.name}</p>}
						{account.email && (
							<p className="w-[200px] truncate text-sm text-muted-foreground">
								{account.email}
							</p>
						)}
					</div>
				</div>
				<DropdownMenuSeparator />
				<DropdownMenuItem asChild>
					<Link href="/">Dashboard</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Link href="/">Billing</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Link href="/">Settings</Link>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem
					className="cursor-pointer"
					onSelect={(event) => {
						event.preventDefault();
						logout();
						toast.success("Logout successfully");
					}}
				>
					Sign out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
