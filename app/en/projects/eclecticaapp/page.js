"use client";

import SideBar from "../../Components/SideBar";
import Link from "next/link";
import Image from "next/image";
import eclecticaApp from "../../../img/Eclectica-App.png";

export default function EclecticaApp() {
	return (
		<>
			<SideBar activeComponent="projectos" />

			{/* <div className="xl:w-1/2 pb-6"> */}
			<section className="xl:w-1/2 pb-6 md:pt-12 xl:pt-24">
				<h2 className="font-bold text-2xl text-white/80 mb-6">Ecléctica App</h2>{" "}
				<div className="mb-6">
					<Image
						src={eclecticaApp}
						alt="Ecléctica App"
						className="rounded-lg ring-2 ring-offset-2 ring-white/50 w-2/3 mx-auto"
					/>
				</div>
				<p className="p-normal">Throughout these more than 30 years of professional activity, I have always encountered the absence of a software solution capable of meeting specific needs.</p>
				<p className="p-normal">Specialized in organizing auctions of old books, the preparation of catalogs, the respective bibliographic descriptions of each lot, and the integration of this data with commercial results is still today the most important and time-consuming phase of the work, occupying about 90% of the time dedicated to each auction.</p>
				<p className="p-normal">It is also the phase that contains the most sensitive data of our activity, including average price values for each title, buyers, underbidders, etc.</p>
				<p className="p-normal">In summary, the main requirements for the solution have always been:</p>
				<ol className="p-normal px-6 -indent-6">
					<li>1. total ownership of the data, with the possibility of exports, manipulation, and migration to another system if necessary;</li>
					<li>2. the ability to structure the data in response to the demands and specificities of our market.</li>
				</ol>
				<p className="p-normal">Global solutions have never been possible for this reason, and outsourcing for a tailored solution has always been either very costly for a micro-enterprise like Ecléctica, difficult to implement due to its specificities, or because the most sensitive data would become trapped in an infrastructure, making potential migrations difficult or even impossible.</p>
				<p className="p-normal">For many years, the solution found was the development of a proprietary app created in FileMaker (now Claris FileMaker), which was quite satisfactory and low-cost.</p>
				<p className="p-normal">Meanwhile, the company has grown a bit, gaining the need for more collaborators—both internal and freelance—and FileMaker, acquired by Apple, has ceased to meet our needs fully and at significantly higher hosting costs.</p>
				<p className="p-normal">Thus, the desire arose to create a new application, entirely online, built from open-source platforms with low hosting costs.</p>
				<p className="p-normal">The Ecléctica App is the result of that desire.</p>
				<p className="p-normal">It is online, operational, and has become the tool for work and management of the company.</p>
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
						demo
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
