"use client";

import SideBar from "../../Components/SideBar";
import Link from "next/link";
import Image from "next/image";
import casaCadima from "../../img/casaCadima.png";

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
				<p className="p-normal">Sentado a uma mesa de um restaurante, em conversa sobre o que estou a fazer, um amigo, daqueles únicos, pediu-me para o ajudar a desenvolver dois websites simples, um deles apenas institucional, o outro para divulgação da sua casa de Alojamento Local na Ilha do Pico.</p>
				<p className="pb-6 text-sm text-white font-bold"> O requisito? "Preciso disso numa semana e o orçamento é muito baixo."</p>
				<p className="p-normal">Munido da experiência já adquirida e esta ideia de que tudo se aprende, agarrei o projecto, devidamente comprometido.</p>
				<p className="p-normal">
					Esbocei os requisitos, conversei com a pessoa que ia ficar encarregue de tratar dos dois websites e, apesar de inicialmente ter previsto o recurso ao Laravel, optei pelo WordPress, uma vez que era uma ferramenta já conhecida da pessoa encarregue da gestão dos websites, permitia uma rápida produção e existiam já os plugins necessários, <span className="text-white font-bold">aplicando o grande princípio: não é preciso inventar a roda quando já existem soluções</span>.
				</p>
				<p className="p-normal">O resultado são estes dois websites. Os logotipos também são da minha autoria.</p>
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
