import "./globals.css";
import ProgressBarProvider from "@/components/providers/progress-bar-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "sonner";
interface RootLayoutProps {
	children: React.ReactNode;
	params: any;
}

export const metadata = {
	title: {
		default: "Dashboard",
		template: `%s | Dashboard`,
	},
	description: "Dashboard",
	keywords: [
		"Next.js",
		"React",
		"Tailwind CSS",
		"Server Components",
		"Radix UI",
	],
	authors: [
		{
			name: "shadcn",
			url: "https://shadcn.com",
		},
	],
	creator: "shadcn",
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default async function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body className="min-h-screen bg-background font-sans antialiased">
				<ThemeProvider attribute="class" defaultTheme="light" enableSystem>
					<ProgressBarProvider>{children}</ProgressBarProvider>
					<Toaster position="top-center" />
				</ThemeProvider>
			</body>
		</html>
	);
}
