import { cn } from "@/lib/utils";
import { Icons } from "../icons";
import { ModeToggle } from "../mode-toggle";

export default function Footer({
	className,
}: React.HTMLAttributes<HTMLElement>) {
	return (
		<footer className={cn(className)}>
			<div className="container flex flex-col items-center justify-between gap-4 p-10 md:h-24 md:flex-row md:py-0">
				<div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
					<Icons.logo />
					<p className="text-center text-sm leading-loose md:text-left">
						Build by Cheii clone from Shadcn . The source code is available on{" "}
						<a
							href={"#"}
							target="_blank"
							rel="noreferrer"
							className="font-medium underline underline-offset-4"
						>
							GitHub
						</a>
					</p>
				</div>
				<ModeToggle />
			</div>
		</footer>
	);
}
