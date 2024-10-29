"use client";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
library.add(faGithub, faLinkedin, faSquareXTwitter, faEnvelope);

export default function SideBar({ activeComponent }) {
	// Define o menu de navegação
	const menu = [
		["Sobre", "about", "#about"],
		["Projetos", "projectos", "#projectos"],
		["Stack", "stack", "#stack"],
		["Interesses", "interesses", "#interesses"],
		["Resumé", "resume", ""],
	];

	//scroll para a div
	const scroll = ({ id }) => {
		var section = document.getElementById(id);
		section.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="pt-12 px-4 xl:sticky xl:top-0 xl:flex xl:max-h-screen xl:w-1/3 xl:flex-col xl:justify-between xl:py-24 mx-auto">
			<div>
				<h1 className="w-max font-extrabold text-4xl">Nuno Gonçalves</h1>
				<h3 className="w-max font-bold py-1">Fullstack Developer</h3>
				<p className="text-sm text-white/60 my-3 w-1/2">
					Sou o Nuno, e depois de 30 anos com livros antigos, <span className="text-yellow font-bold">quis fazer-me programador.</span>
				</p>
				<nav className="hidden xl:block w-max py-4 xl:pt-12 xl:ps-12">
					<ul className="flex xl:flex-col xl:gap-3 w-max text-white/60">
						{menu.map((menu) => (
							<li key={menu[0]}>
								<a
									className={`${activeComponent === menu[1] ? "active" : ""} group flex items-center uppercase hover:text-white cursor-pointer`}
									onClick={() => scroll({ id: menu[1] })}
								>
									<span className={`${activeComponent === menu[1] ? "active" : ""} h-px w-2 mr-1 bg-white/50 transition-all group-hover:w-12 group-hover:bg-white`}> </span>
									{menu[0]}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
			<div className="flex flex-row gap-3 text-2xl text-white/50 p-4">
				<FontAwesomeIcon icon="fa-solid fa-envelope" />
				<FontAwesomeIcon icon="fa-brands fa-github" />
				<FontAwesomeIcon icon="fa-brands fa-linkedin" />
				{/* <FontAwesomeIcon icon="fa-brands fa-square-x-twitter" /> */}
			</div>
		</div>
	);
}
