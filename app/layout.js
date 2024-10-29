import { Azeret_Mono } from "next/font/google";
import "./globals.css";

const azeretMono = Azeret_Mono({
	subsets: ["latin"],
});

export const metadata = {
	title: "Nuno Gonçalves Portfolio",
	description: "My WebDev Portfolio",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${azeretMono.className}`}>
				<div className="mx-auto min-h-screen max-w-screen-x1 px-6 py-12 md:px-12 lg:px-24 lg:py-0 lg:mx-24">
					<div className="xl:flex xl:justify-between xl:gap-4">{children}</div>
				</div>
			</body>
		</html>
	);
}
