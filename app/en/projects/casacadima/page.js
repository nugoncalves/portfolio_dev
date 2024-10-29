"use client";

import SideBar from "../../Components/SideBar";
import Link from "next/link";
import Image from "next/image";
import casaCadima from "../../../img/casaCadima.png";

export default function CasaCadima() {
	return (
		<>
			<SideBar activeComponent="projectos" />

			{/* <div className="xl:w-1/2 pb-6"> */}
			<section className="xl:w-1/2 pb-6 md:pt-12 xl:pt-24">
				<h2 className="font-bold text-2xl text-white/80 mb-6">Casa Cadima & Hemisfério Corajoso</h2>{" "}
				<div className="mb-6">
					<Image
						src={casaCadima}
						alt="Casa Cadima & Hemisferio Corajoso"
						className="rounded-lg ring-2 ring-offset-2 ring-white/50 w-2/3 mx-auto"
					/>
				</div>
				<p className="p-normal">Sitting at a restaurant table, while discussing what I was doing, a friend, one of those unique ones, asked me to help develop two simple websites, one of them just institutional, and the other to promote his local accommodation house on Pico Island.</p>
				<p className="pb-6 text-sm text-white font-bold">The requirement? &apos;I need this in a week and the budget is very low.&apos;</p>
				<p className="p-normal">Armed with the experience I had already gained and the idea that everything can be learned, I took on the project, fully committed.</p>
				<p className="p-normal">
					I sketched out the requirements, talked to the person who would be responsible for managing the two websites, and although I initially planned to use Laravel, I opted for WordPress, as it was a tool already known to the person in charge, allowed for quick production, and the necessary plugins already existed,
					<span className="text-white font-bold">applying the great principle: no need to reinvent the wheel when there are already solutions</span>.
				</p>
				<p className="p-normal">The result is these two websites. The logos are also my work.</p>
				<div className="flex gap-4 mt-3 text-white/50 ">
					<Link
						className="group flex items-center text-sm py-2 uppercase hover:text-white"
						href="/en#projectos"
					>
						<span className="h-px w-2 mr-1 bg-white/50 transition-all group-hover:w-6"></span>
						back
					</Link>
					<Link
						className="group flex items-center text-sm py-2 uppercase hover:text-white"
						href="http://www.casacadima.pt"
						target="_blank"
					>
						<span className="h-px w-2 mr-1 bg-white/50 transition-all group-hover:w-6"></span>
						casa cadima
					</Link>
					<Link
						className="group flex items-center text-sm py-2 uppercase hover:text-white"
						href="http://www.hemisferiocorajoso.pt"
						target="_blank"
					>
						<span className="h-px w-2 mr-1 bg-white/50 transition-all group-hover:w-6"></span>
						hemisfério corajoso
					</Link>
				</div>
			</section>
			{/* </div> */}
		</>
	);
}
