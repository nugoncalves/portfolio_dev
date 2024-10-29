"use client";
import CodeSniplet from "../Components/CodeSnippet";

export default function Sobre({ props, className }) {
	return (
		<div
			className={className}
			id="about"
		>
			<CodeSniplet />
			<div className="p-6">
				<p className="p-normal">In 1993, under my father&apos;s guidance, I became an antiquarian bookseller. In 2002, over 20 years ago, I founded my auction house, with which I continue to achieve the greatest and most significant successes in my home market.</p>
				<p className="p-normal">Given the specificities of the business, I have always needed to rely on tools that were custom-built and designed by me.</p>

				<p className="p-normal">In the process, I developed my own app, fell in love with the beauty of a text editor, and the wonders of a callback function.</p>
				<p className="p-normal">
					I am <span className="font-extrabold yellow">Nuno</span>, and after more than 30 years with books, <span className="font-bold green underline">I wanted to become a developer</span>.
				</p>
			</div>
		</div>
	);
}
