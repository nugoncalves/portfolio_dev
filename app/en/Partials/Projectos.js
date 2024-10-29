"use client";
import Image from "next/image";
import Projecto from "../../Components/Projecto";
import eclecticaApp from "../../img/Eclectica-App.png";
import eclecticaApp2 from "../../img/eclecticaAppV2.png";
import casaCadima from "../../img/casaCadima.png";
import sebastiaoAlves from "../../img/sebastiaoAlves.png";
import novePorOito from "../../img/novePorOito.jpeg";
import guineCapa from "../../img/guineCapa.png";

export default function Projectos() {
	return (
		<>
			<section
				id="projectos"
				className="mt-12 mb-6"
			>
				<h2 className="font-bold p-3 my-3">PROJECTS</h2>{" "}
				<Projecto
					title="Ecléctica Auction House"
					img={eclecticaApp}
					stack={["laravel", "mariaDB", "htmx", "bootstrap", "javascript"]}
					links={[["about this project", "/en/projects/eclecticaapp"]]}
				>
					<p>
						It&apos;s my &apos;self-solution&apos; where I spend 90% of my working time. Fully designed to solve the problems in my business, it&apos;s the main reason I fell in love with coding.
						<span className="font-bold text-white"> A real project, developed with pride.</span>
					</p>
				</Projecto>
				<Projecto
					title="Casa Cadima & Hemisfério Corajoso"
					img={casaCadima}
					stack={["wordpress"]}
					links={[["about this project", "/en/projects/casacadima"]]}
				>
					<p>Do you know that person who we tell what we&apos;re doing and then wants to take advantage? It&apos;s not the case. A great Friend needed to get a website up and running in less than a week. So I turned to WordPress and gave him a simple website with the features he needed in 3 or 4 days. The logo is also my design.</p>
				</Projecto>
				<Projecto
					title="Sebastião Alves"
					img={sebastiaoAlves}
					stack={["php", "mariaDB", "javascript", "bootstrap"]}
					links={[["about this project", "/en/projects/sebastiaosalgado"]]}
				>
					<p>In the learning process, I completed a fullstack course at Code Academy. I confess that the designer in me got goosebumps when I read the descriptive memory, but it was supposed to do look the same and that&apos;s how it was done.</p>
				</Projecto>
				<Projecto
					title="Nove Por Oito"
					img={novePorOito}
					stack={["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop"]}
					links={[["about this project", "/en/projects/noveporoito"]]}
				>
					<p>Branding of a business project for a studio focused on music rehearsal and recording, as well as voice-over recording.</p>
				</Projecto>
				<Projecto
					title="Book: «Presença Portuguesa na Guiné»"
					img={guineCapa}
					stack={["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop"]}
					links={[["about this project", "/en/projects/guine"]]}
				>
					<p>Award-winning book by the Portuguese Academy of History, for which I was fully responsible for all graphic design. A total of 1,000 pages, with extra-texts and numerous challenges.</p>
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
						Already well underway, version 2.0 of Ecl&eacute;ctica&apos;s administration app is being developed. It serves two purposes: to improve on past work, drawing from lessons learned so far, and at the same time, to learn the basics of React.
						<span className="font-bold text-white"> Nothing compares to a real project for learning.</span>
					</p>
				</Projecto>
			</section>
		</>
	);
}
