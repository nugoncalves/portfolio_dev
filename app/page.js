"use client";

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import SideBar from "./Components/SideBar";
import Sobre from "./Partials/Sobre";
import Projectos from "./Partials/Projectos";
import Skills from "./Partials/Skills";
import Interesses from "./Partials/Interesses";

export default function Home() {
	const [activeComponent, setActiveComponent] = useState(null);

	const { ref: sobreRef, inView: isSobreInView } = useInView({ threshold: 0.5 });
	const { ref: projectosRef, inView: isProjectosInView } = useInView({ threshold: 0.5 });
	const { ref: skillsRef, inView: isSkillsInView } = useInView({ threshold: 0.5 });
	const { ref: interessesRef, inView: isInteressesInView } = useInView({ threshold: 0.5 });

	useEffect(() => {
		if (isSobreInView) {
			setActiveComponent("about");
		}
		if (isProjectosInView) {
			setActiveComponent("projectos");
		}
		if (isSkillsInView) {
			setActiveComponent("stack");
		}
		if (isInteressesInView) {
			setActiveComponent("interesses");
		}
	}, [isSobreInView, isProjectosInView, isSkillsInView, isInteressesInView]);

	return (
		<>
			<SideBar activeComponent={activeComponent} />

			<div className="xl:w-1/2 pb-6">
				<div ref={sobreRef}>
					<Sobre className="md:pt-12 xl:pt-24" />
				</div>
				<div ref={projectosRef}>
					<Projectos />
				</div>
				<div ref={skillsRef}>
					<Skills />
				</div>
				<div ref={interessesRef}>
					<Interesses />
				</div>
			</div>
		</>
	);
}
