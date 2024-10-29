"use client";

import SideBar from "../../Components/SideBar";
import Link from "next/link";
import Image from "next/image";
import guineCapa from "../../img/guineCapa.png";

export default function Guine() {
	return (
		<>
			<SideBar activeComponent="projectos" />

			{/* <div className="xl:w-1/2 pb-6"> */}
			<section className="xl:w-1/2 pb-6 md:pt-12 xl:pt-24">
				<h2 className="font-bold text-2xl text-white/80 mb-6">Livro: A Presença Portuguesa na Guiné</h2>{" "}
				<div className="mb-6">
					<Image
						src={guineCapa}
						alt="A Presença Portuguesa na Guiné"
						className="rounded-lg ring-2 ring-offset-2 ring-white/50 w-2/3 mx-auto"
					/>
				</div>
				<p className="p-normal">Este livro é o resultado de um extenso e rigoroso estudo sobre a antiga Guiné portuguesa - hoje a Guiné-Bissau - e nele se relata a acção governativa portuguesa durante o importante período de quase 50 anos que se seguia à separação administrativa da Guiné do governo-geral em Cabo Verde, até aos anos em que a existência de uma administração portuguesa mais solidamente implantada no território ia permintindo o seu mais firme desenvolvimento.</p>
				<p className="p-normal">O texto é acompanhado de variadíssimas fotografias e de mais de duas dezenas de elementos cartográficos inéditos impressos em extra-texto, em folhas desdobráveis que se integram no livro de forma harmoniosa.</p>
				<p className="p-normal">Além das imagens extra-texto, a extensão do livro, com mais de 1000 páginas, obrigou a variadíssimos testes de legibilidade para chegar a um compromisso entre o ideal e o possível.</p>
				<p className="p-normal">O autor, já falecido, Prof. da Universidade de Coimbra, engenheiro de profissão, foi das mais especiais que encontrei ao longo do meu percurso profissional.</p>
				<p className="p-normal">O livro pode ser adquirido em qualquer livraria online.</p>
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
						href="https://caminhosromanos.pt/historia-e-memorias/34-a-presenca-portuguesa-na-guine-historia-politica-e-militar-1878-1926.html"
						target="_blank"
					>
						<span className="h-px w-2 mr-1 bg-white/50 transition-all group-hover:w-6"></span>
						editora caminhos romanos
					</Link>
				</div>
			</section>
			{/* </div> */}
		</>
	);
}
