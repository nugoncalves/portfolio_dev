"use client";

import SideBar from "../../Components/SideBar";
import Link from "next/link";
import Image from "next/image";
import eclecticaApp from "../../img/Eclectica-App.png";

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
				<p className="p-normal">Ao longo destes mais de 30 anos de actividade profissional, deparei-me sempre com a inexistência de uma solução informática que fosse capaz de responder às necessidades específicas.</p>
				<p className="p-normal">Especializada em organizar leilões de livros antigos, a elaboração dos catálogos, respectivas descrições bibliográficas de cada lote e a integração desses dados com os resultados comerciais é, ainda hoje, a fase mais importante e morosa do trabalho e que ocupa cerca de 90% do tempo dedicado a cada leilão.</p>
				<p className="p-normal">É também aquela que encerra em si os dados mais sensíveis da nossa actividade, contendo valores médios de preços para cada título, compradores, under bidders, etc.</p>
				<p className="p-normal">Em suma, os principais requisitos para a solução foram sempre:</p>
				<ol className="p-normal px-6 -indent-6">
					<li>1. a total propriedade dos dados, com possibilidade de exportações, manipulação e migração para outro sistema, caso houvesse necessidade;</li>
					<li>2. fosse capaz de estruturar os dados respondendo às exigências e especificidades do nosso mercado.</li>
				</ol>
				<p className="p-normal">Soluções globais nunca foram possíveis por isso e a contratação externa para uma solução à medida foi sempre, ou muito onerosa para uma micro-empresa como a Ecléctica, difícil de implementar, dada a especificidade que não é simples ou porque os dados mais sensíveis iriam ficar presos a uma infra-estrutura, dificultando ou mesmo impedindo possíveis migrações.</p>
				<p className="p-normal">Durante muitos anos, a solução encontrada foi o desenvolvimento de uma app própria criada em FileMaker (hoje Claris FileMaker) e de forma bastante satisfatória e a custo baixo.</p>
				<p className="p-normal">Entretanto a empresa cresceu um pouco, ganhou a necessidade de mais colaboradores - internos e freelance - e o FileMaker, entretanto adquirido pela Apple, deixou que responder às necessidades de forma plena e a custos de alojamento bastante mais elevados.</p>
				<p className="p-normal">Nasceu então o desejo de criar uma nova aplicação, totalmente online, criada a partir de plataformas open source e cujos custos de alojamento fossem baixos.</p>
				<p className="p-normal">A App Ecléctica é o resultado desse desejo.</p>
				<p className="p-normal">Está online, em funcionamento e passou a ser a ferramenta de trabalho e de gestão da empresa.</p>
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
						href="https://demo.eclectica-app.com/"
						target="_blank"
					>
						<span className="h-px w-2 mr-1 bg-white/50 transition-all group-hover:w-6"></span>
						demo
					</Link>
					<Link
						className="group flex items-center text-sm py-2 uppercase hover:text-white"
						href="https://github.com/nugoncalves/eclectica-app.git"
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
