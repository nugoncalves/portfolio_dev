"use client";

import SideBar from "../../Components/SideBar";
import Link from "next/link";
import Image from "next/image";
import guineCapa from "../../../img/guineCapa.png";

export default function Guine() {
	return (
		<>
			<SideBar activeComponent="projectos" />

			{/* <div className="xl:w-1/2 pb-6"> */}
			<section className="xl:w-1/2 pb-6 md:pt-12 xl:pt-24">
				<h2 className="font-bold text-2xl text-white/80 mb-6">Book: &quot;A Presen&ccedil;a Portuguesa na Guin&eacute;&quot;</h2>{" "}
				<div className="mb-6">
					<Image
						src={guineCapa}
						alt="A Presença Portuguesa na Guiné"
						className="rounded-lg ring-2 ring-offset-2 ring-white/50 w-2/3 mx-auto"
					/>
				</div>
				<p className="p-normal">This book is the result of an extensive and rigorous study on the former Portuguese Guinea - now Guinea-Bissau - and it narrates the Portuguese governmental action during the important period of almost 50 years following the administrative separation of Guinea from the general government in Cape Verde, until the years when the existence of a more solidly established Portuguese administration in the territory allowed for its firmer development.</p>
				<p className="p-normal">The text is accompanied by numerous photographs and more than two dozen unpublished cartographic elements printed in extra-text, on fold-out sheets that integrate harmoniously into the book. Besides the extra-text images, the length of the book, with more than 1000 pages, required numerous readability tests to reach a compromise between the ideal and the possible.</p>
				<p className="p-normal">The author, already deceased, Professor at the University of Coimbra, an engineer by profession, was one of the most special individuals I encountered throughout my professional journey.</p>
				<p className="p-normal">The book can be purchased at any online bookstore.</p>
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
						href="https://caminhosromanos.pt/historia-e-memorias/34-a-presenca-portuguesa-na-guine-historia-politica-e-militar-1878-1926.html"
						target="_blank"
					>
						<span className="h-px w-2 mr-1 bg-white/50 transition-all group-hover:w-6"></span>
						publisher &quot;caminhos romanos&quot;
					</Link>
				</div>
			</section>
			{/* </div> */}
		</>
	);
}
