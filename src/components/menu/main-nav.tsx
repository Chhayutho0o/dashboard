"use client";

import { useState } from "react";
import Link from "next/link";
import { MainNavItem } from "@/types";
import { Icons } from "../icons";
import { cn } from "@/lib/utils";
import { useSelectedLayoutSegment } from "next/navigation";
import { MobileNav } from "./mobile-nav";
import DropdownMenu from "./dropdown-menu";

type MainNavProps = {
	items?: MainNavItem[];
	children?: React.ReactNode;
};

export const MainNav = ({ items, children }: MainNavProps) => {
	const segment = useSelectedLayoutSegment();
	const [mobileMenu, setMobileMenu] = useState(false);

	return (
		<div className="flex gap-6 md:gap-10">
			<Link href={"/"} className="hidden items-center space-x-2 md:flex">
				<Icons.logo />
				<span className="hidden text-lg font-bold sm:inline-block">Shake</span>
			</Link>
			{items?.length && (
				<nav className="hidden gap-3 md:flex">
					{items.map((item, index) =>
						item.items?.length ? (
							<DropdownMenu key={index} item={item} segment={segment || "a"} />
						) : (
							<Link
								key={index}
								href={item.href}
								className={cn(
									"flex items-center text-lg font-medium transition-colors hover:bg-accent hover:text-foreground/80 sm:text-sm p-2 rounded-md",
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
			)}
			<button
				className="flex items-center space-x-2 md:hidden"
				onClick={() => setMobileMenu(!mobileMenu)}
			>
				{mobileMenu ? <Icons.close /> : <Icons.logo />}
				<span className="font-bold">Menu</span>
			</button>
			{mobileMenu && items && (
				<MobileNav items={items} segment={segment || "a"}>
					{children}
				</MobileNav>
			)}
		</div>
	);
};
