"use client";

import SideBar from "../../Components/SideBar";
import Link from "next/link";
import Image from "next/image";
import sebastiaoAlves from "../../img/sebastiaoAlves.png";

export default function SebastaoAlves() {
	return (
		<>
			<SideBar activeComponent="projectos" />

			{/* <div className="xl:w-1/2 pb-6"> */}
			<section className="xl:w-1/2 pb-6 md:pt-12 xl:pt-24">
				<h2 className="font-bold text-2xl text-white/80 mb-6">Sebastião Salgado: Curso Fullstack CodeMaster</h2>{" "}
				<div className="mb-6">
					<Image
						src={sebastiaoAlves}
						alt="Casa Cadima & Hemisferio Corajoso"
						className="rounded-lg ring-2 ring-offset-2 ring-white/50 w-2/3 mx-auto"
					/>
				</div>
				<p className="p-normal">No processo de aprendizagem, realizei um curso 'full stack' promovido pela empresa Code Master, onde tive o primeiro contacto com PHP, MySQL, HTML, CSS, JavaScript, a framework Bootstrap e algumas outras ferramentas de aprendizagem, em particular Java para os contactos com a lógica de programação.</p>
				<p className="p-normal">Já com bastante experiência no uso de FileMaker, não foi nada difícil acompanhar o curso, revelando-se até, em alguns aspectos, bastante simples, obrigando-me a ir um pouco mais longe do que o exigido para me auto-desafiar.</p>
				<p className="p-normal">Como projecto final, foi-nos proposto a criação de um website completo e o seu respectivo backoffice para um escritor e auto-editor, a partir de uma memória descritiva (que consta no repositório) e outros materiais que, apesar dos muitos problemas na origem (e.g. só estilos e variações de fontes descritas na memória descritiva existem 14, por vezes com variações praticamente invisíveis ao olho do utilizador, o que contraria todas as boas práticas UI/UX), foi implementada na sua totalidade sem problemas de maior.</p>
				<p className="p-normal">Foi o meu primeiro verdadeiro contacto com tecnologias web que, apesar do nível bastante básico, com recurso ao meu contacto com os livros, o meu interesse pela investigação e a minha curiosidade, fez-me ultrapassar aquela primeira barreira, despertando a curiosidade por mais e mais.</p>
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
