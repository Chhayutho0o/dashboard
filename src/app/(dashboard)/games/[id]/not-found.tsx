import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { EmptyPlaceholder } from "@/components/commons/empty-placeholder";

export default function GameNotFound() {
	return (
		<EmptyPlaceholder className="mx-auto max-w-[800px] mt-10">
			<EmptyPlaceholder.Icon name="warning" />
			<EmptyPlaceholder.Title>Game Not Found</EmptyPlaceholder.Title>
			<EmptyPlaceholder.Description>
				This game cound not be found. Please try again.
			</EmptyPlaceholder.Description>
			<Link href="/games" className={buttonVariants({ variant: "ghost" })}>
				Go to game
			</Link>
		</EmptyPlaceholder>
	);
}
