"use client";

import SideBar from "../../Components/SideBar";
import Link from "next/link";
import Image from "next/image";
import novePorOito from "../../img/novePorOito.jpeg";

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
				<p className="p-normal">No que respeita à criação visual, este projecto foi dos que mais gozo me deu. O projecto incluía o branding total de uma empresa a ser criada, cuja actividade se centrava na oferta de um estúdio para ensaios e gravações, quer para música, quer para voz off.</p>
				<p className="text-white font-bold"> O requisito? "Preciso disso numa semana e o orçamento é muito baixo."</p>
				<p className="p-normal">Foi desenvolvido para um grupo de amigos, entre eles o meu irmão mais novo. No manual de normas poderá ver e ler todos os detalhes.</p>
				<div className="flex gap-4 mt-3 text-white/50 ">
					<Link
						className="group flex items-center text-sm py-2 uppercase hover:text-white"
						href="/#projectos"
					>
						<span className="h-px w-2 mr-1 bg-white/50 transition-all group-hover:w-6"></span>
						voltar
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
