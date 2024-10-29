"use client";
import Image from "next/image";
import Projecto from "../Components/Projecto";
import eclecticaApp from "../img/Eclectica-App.png";
import eclecticaApp2 from "../img/eclecticaAppV2.png";
import casaCadima from "../img/casaCadima.png";
import sebastiaoAlves from "../img/sebastiaoAlves.png";
import novePorOito from "../img/novePorOito.jpeg";
import guineCapa from "../img/guineCapa.png";

export default function Projectos() {
	return (
		<>
			<section
				id="projectos"
				className="mt-12 mb-6"
			>
				<h2 className="font-bold p-3 my-3">PROJECTOS</h2>{" "}
				<Projecto
					title="Ecléctica Leiloeira"
					img={eclecticaApp}
					stack={["laravel", "mariaDB", "htmx", "bootstrap", "javascript"]}
					links={[["conheça o projecto", "/projects/eclecticaapp"]]}
				>
					<p>
						É a minha ‘self solution’ na qual passo 90% do meu tempo de trabalho. Totalmente pensada para resolver os problemas do meu ramo de actividade é a grande responsável pelo meu enamoramento pelo código.
						<span className="font-bold text-white"> Um projecto real e implementado com orgulho.</span>
					</p>
				</Projecto>
				<Projecto
					title="Casa Cadima & Hemisfério Corajoso"
					img={casaCadima}
					stack={["wordpress"]}
					links={[["conheça o projecto", "/projects/casacadima"]]}
				>
					<p>Estão a ver aquela pessoa que contamos o que andamos a fazer e logo se quer aproveitar? Não é o caso. Um Amigo, daqueles grandes, precisou de pôr um site no ar em menos de uma semana. Recorri, por isso, ao WordPress e dei-lhe um website simples, com as funcionalidades que precisava em 3 ou 4 dias. O logo também é meu design.</p>
				</Projecto>
				<Projecto
					title="Sebastião Alves"
					img={sebastiaoAlves}
					stack={["php", "mariaDB", "javascript", "bootstrap"]}
					links={[["conheça o projecto", "/projects/sebastiaosalgado"]]}
				>
					<p>No processo de aprendizagem, completei um curso fullstack na Code Academy. Confesso que o designer (_interesses) arrepiou-se quando leu a memória descritiva, mas era para fazer igual e assim ficou.</p>
				</Projecto>
				<Projecto
					title="Nove Por Oito"
					img={novePorOito}
					stack={["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop"]}
					links={[["conheça o projecto", "/projects/noveporoito"]]}
				>
					<p>Branding de um projecto empresarial de um estúdio para ensaio e gravação musical e gravação de voz off.</p>
				</Projecto>
				<Projecto
					title="Livro: Presença Portuguesa na Guiné"
					img={guineCapa}
					stack={["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop"]}
					links={[["conheça o projecto", "/projects/guine"]]}
				>
					<p>Livro vencedor de um prémio pela Academia Portuguesa de História, todo o design gráfico foi da minha inteira responsabilidade. Um total de 1000 páginas, com extra-textos e muitos desafios.</p>
				</Projecto>
			</section>
			<section
				id="projectos"
				className="mt-12 mb-6"
			>
				<h2 className="font-bold p-3 my-3">LOADING ...</h2>{" "}
				<Projecto
					title="Ecléctica Leiloeira v.2.0"
					img={eclecticaApp2}
					stack={["laravel", "mariaDB", "react", "tailwind"]}
				>
					<p>
						Já em estado avançado, a versão 2.0 da app de administração da Ecléctica está a ser desenvolvida. Serve dois propósitos: melhorar o que foi feito, fruto da aprendizagem entretanto adquirida e, ao mesmo tempo, aprender o básico de React.
						<span className="font-bold text-white"> Nada se compara a um projecto real para aprender.</span>
					</p>
				</Projecto>
			</section>
		</>
	);
}
