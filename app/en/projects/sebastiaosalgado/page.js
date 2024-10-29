"use client";

import SideBar from "../../Components/SideBar";
import Link from "next/link";
import Image from "next/image";
import sebastiaoAlves from "../../../img/sebastiaoAlves.png";

export default function SebastaoAlves() {
	return (
		<>
			<SideBar activeComponent="projectos" />

			{/* <div className="xl:w-1/2 pb-6"> */}
			<section className="xl:w-1/2 pb-6 md:pt-12 xl:pt-24">
				<h2 className="font-bold text-2xl text-white/80 mb-6">Sebastião Salgado: Fullstack Course at CodeMaster</h2>{" "}
				<div className="mb-6">
					<Image
						src={sebastiaoAlves}
						alt="Casa Cadima & Hemisferio Corajoso"
						className="rounded-lg ring-2 ring-offset-2 ring-white/50 w-2/3 mx-auto"
					/>
				</div>
				<p className="p-normal">During the learning process, I took a &apos;full stack&apos; course promoted by Code Master, where I had my first contact with PHP, MySQL, HTML, CSS, JavaScript, the Bootstrap framework, and some other learning tools, particularly Java for programming logic.</p>
				<p className="p-normal">Already with extensive experience in using FileMaker, it was not difficult to follow the course, which even turned out to be quite simple in some aspects, pushing me to go a bit further than required to challenge myself.</p>
				<p className="p-normal">As a final project, we were tasked with creating a complete website and its respective back office for a writer and self-publisher, based on a descriptive memory (which is in the repository) and other materials. Despite many initial problems (e.g. the descriptive memory lists 14 different styles and variations of fonts, sometimes with differences practically invisible to the user’s eye, which goes against all good UI/UX practices), it was fully implemented without major issues.</p>
				<p className="p-normal">It was my first real contact with web technologies which, despite being quite basic, along with my contact with books, my interest in research, and my curiosity, helped me overcome that first barrier, sparking curiosity for more and more.</p>
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
						href="/#projectos"
						target="_blank"
					>
						<span className="h-px w-2 mr-1 bg-white/50 transition-all group-hover:w-6"></span>
						website
					</Link>
					<Link
						className="group flex items-center text-sm py-2 uppercase hover:text-white"
						href="/#projectos"
						target="_blank"
					>
						<span className="h-px w-2 mr-1 bg-white/50 transition-all group-hover:w-6"></span>
						git
					</Link>
				</div>
			</section>
			{/* </div> */}
		</>
	);
}
