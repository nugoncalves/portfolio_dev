import Image from "next/image";
import Link from "next/link";

export default function Projecto({ title = "", children, img, stack = [], links = [] }) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-3 p-4 border border-transparent transition-all ease-in-out durantion-300 hover:border hover:border-gray-700 rounded-lg hover:shadow-xl hover:bg-slate-600/20">
			<div className="p-1">
				<Image
					src={img}
					alt={title}
					className="rounded-lg ring-2 ring-offset-2 ring-white/50"
				/>
			</div>
			<div className="md:col-span-2 text-xs text-white/60 self-center">
				<h2 className="font-bold text-base text-white/80">{title}</h2>
				<div className="py-4">{children}</div>

				<ul className="flex flex-wrap text-[0.6rem] gap-2">
					{stack.map((stack) => (
						<li
							className="px-3 py-1 bg-slate-500 rounded-full text-background"
							key={stack}
						>
							{stack}
						</li>
					))}
				</ul>

				<div className="flex gap-4 mt-3">
					{links.map((link) => (
						<Link
							className="group flex items-center text-sm py-2 uppercase hover:text-white"
							key={link[0]}
							href={link[1]}
						>
							<span className="h-px w-2 mr-1 bg-white/50 transition-all group-hover:w-6"></span>
							{link[0]}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
