"use client";
import Projecto from "../Components/Projecto";
import emacsOrg from "../img/emacsOrg.png";
import readAndListen from "../img/readAndListen.jpg";
import tennis from "../img/tennis.jpg";
import leiloesOnline from "../img/leiloesOnline.jpg";

export default function Interesses() {
	return (
		<section
			id="interesses"
			className="mt-12 mb-3 text-sm"
		>
			<h2 className="font-bold p-3 text-base">INTERESSES</h2>
			<Projecto
				title="Leitura, Música & Cultura"
				img={readAndListen}
				stack={["documentação", "música", "jazz", "clássica", "leitura"]}
			>
				<p>
					Nasci com livros, <span className="font-bold text-white">ler a documentação das linguagens é paragem obrigatória e contínua </span>quando estou a desenvolver os meus projectos. Isso, uma sebenta para recordar a antiga Matemática, e muita, muita música em Vinil, CD, streaming ou rádio.
				</p>
			</Projecto>
			<Projecto
				title="Design Gráfico"
				img={leiloesOnline}
				stack={["Adobe Creative Suite", "InkScape", "Scribus"]}
			>
				<p>Do mesmo modo que para a gestão da Leiloeira, encontrei em mim mesmo uma forma de resolver o problema, também o design gráfico, em virtude da publicação de catálogos de leilões, foi um &apos;must have skill&apos;. Fiz o curso de Design Gráfico da ETIC e dei por mim a fazer coisas nessa área bem para além dos catálogos.</p>
			</Projecto>
			<Projecto
				title="Emacs & Org Mode"
				img={emacsOrg}
				stack={["emacs"]}
				links={[["config files", "/projecto/emacsOrg"]]}
			>
				<p>Gosto de escrever e nunca gostei das aplicações tipo Office. Neste meu trajecto, encontrei-me com o Emacs e fiquei de imediato apaixonado pela simplicidade. Só nós e o texto. Entretanto, criei o meu próprio workflow baseado no sistema GTD no org-mode. Este é o resultado: no more Google Calendar.</p>
			</Projecto>
			<Projecto
				title="Ténis: Arbitragem"
				img={tennis}
				stack={["tenis", "arbitragem", "linhas"]}
			>
				<p>Ténis é outra paixão grande. Passo muitos dias e muitos fins de semana a arbitrar. Fui dos felizes contemplados de um dia poder ter feito parte da equipa de arbitragem com o grande Carlos Ramos na cadeira.</p>
			</Projecto>
		</section>
	);
}
