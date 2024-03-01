import { notFound } from "next/navigation";

type GameFormProps = {
	searchParams: { [key: string]: string | string[] | undefined };
};

export default function GameForm({ searchParams }: GameFormProps) {
	if (searchParams) return notFound();

	return <div>GameForm</div>;
}
