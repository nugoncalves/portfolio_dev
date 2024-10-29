"use client";

import SideBar from "../../Components/SideBar";
import Link from "next/link";
import Image from "next/image";
import novePorOito from "../../../img/novePorOito.jpeg";

export default function NovePorOito() {
	return (
		<>
			<SideBar activeComponent="projectos" />

			{/* <div className="xl:w-1/2 pb-6"> */}
			<section className="xl:w-1/2 pb-6 md:pt-12 xl:pt-24">
				<h2 className="font-bold text-2xl text-white/80 mb-6">Casa Cadima & Hemisfério Corajoso</h2>{" "}
				<div className="mb-6">
					<Image
						src={novePorOito}
						alt="Nove Por Oito Branding"
						className="rounded-lg ring-2 ring-offset-2 ring-white/50 w-2/3 mx-auto"
					/>
				</div>
				<p className="p-normal">In terms of visual creation, this project was one of the most enjoyable. The project included the total branding of a company to be created, whose activity focused on offering a studio for rehearsals and recordings, both for music and voiceover.</p>
				<p className="text-white font-bold">The requirement? &quot;I need this in a week and the budget is very low.&quot;</p>
				<p className="p-normal">It was developed for a group of friends, including my younger brother. In the manual, you can see and read all the details.</p>
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
						href="/img/noveporoit_mn.pdf"
						target="_blank"
					>
						<span className="h-px w-2 mr-1 bg-white/50 transition-all group-hover:w-6"></span>
						Manual de Normas
					</Link>
				</div>
			</section>
			{/* </div> */}
		</>
	);
}
