"use client";

import { useLockBody } from "@/hooks/use-lock-body";
import { MainNavItem } from "@/types";
import Link from "next/link";
import { Icons } from "../icons";
import DropdownMenu from "./dropdown-menu";
import { cn } from "@/lib/utils";

type MobileNavProps = {
	items: MainNavItem[];
	children?: React.ReactNode;
	segment: string;
};

export const MobileNav = ({ items, children, segment }: MobileNavProps) => {
	useLockBody();
	return (
		<div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden">
			<div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
				<Link href={"/"} className="flex items-center space-x-2">
					<Icons.logo />
					<span className="font-bold">Shake</span>
				</Link>
				<nav className="grid grid-flow-row auto-rows-max text-sm">
					{items.map((item, index) =>
						item.items?.length ? (
							<DropdownMenu key={index} item={item} segment={segment} />
						) : (
							<Link
								key={index}
								href={item.href}
								className={cn(
									"flex w-full items-center rounded-md p-2 text-sm font-medium transition-colors hover:text-foreground/80",
									item.href.startsWith(`/${segment}`)
										? "text-foreground bg-accent"
										: "text-foreground/60"
								)}
							>
								{item.title}
							</Link>
						)
					)}
				</nav>
				{children}
			</div>
		</div>
	);
};
