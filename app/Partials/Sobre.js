"use client";
import CodeSniplet from "../Components/CodeSnippet";

export default function Sobre({ props, className }) {
	return (
		<div
			className={className}
			id="about"
		>
			<CodeSniplet />
			<div className="p-6">
				<p className="p-normal">Em 1993, pela mão de meu Pai, tornei-me livreiro antiquário. Em 2002, há mais de 20 anos, fundei a minha leiloeira com a qual continuo a obter os maiores e mais relevantes sucessos no mercado nacional.</p>
				<p className="p-normal">Dadas as especificidades da área, precisei sempre de recorrer a ferramentas próprias e desenhadas por mim.</p>
				<p className="p-normal">No processo, desenvolvi a minha própria App, apaixonei-me pela beleza de um editor de texto e pelas maravilhas de uma callback function.</p>
				<p className="p-normal">
					Eu sou o <span className="font-extrabold yellow">Nuno</span> e depois de mais de 30 anos com livros, <span className="font-bold green underline">quis fazer-me programador</span>.
				</p>
			</div>
		</div>
	);
}
