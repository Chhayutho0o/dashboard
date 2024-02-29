import ActionButton from "@/components/commons/action-button";
import DashboardHeader from "@/components/dashboard/header";
import DashboardShell from "@/components/dashboard/shell";
import GameContent from "@/components/games/game-content";

type GamePageProps = {
	searchParams: { [key: string]: string | string[] | undefined };
};

export default function GamePage({ searchParams }: GamePageProps) {
	return (
		<DashboardShell>
			<DashboardHeader heading="Games" text="Create and manage game.">
				<ActionButton href="/games/new" name="add" title="New game" />
			</DashboardHeader>
			<GameContent searchParams={searchParams} />
		</DashboardShell>
	);
}
