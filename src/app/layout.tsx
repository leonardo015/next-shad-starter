import { cn } from "@/lib/utils";
import { fontSans } from "@/styles/fonts";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "next-shad-starter",
	description: "Next.js + Shadcn starter kit",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				{children}
			</body>
		</html>
	);
}
