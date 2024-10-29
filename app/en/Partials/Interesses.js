"use client";
import Projecto from "../../Components/Projecto";
import emacsOrg from "../../img/emacsOrg.png";
import readAndListen from "../../img/readAndListen.jpg";
import tennis from "../../img/tennis.jpg";
import leiloesOnline from "../../img/leiloesOnline.jpg";

export default function Interesses() {
	return (
		<section
			id="interesses"
			className="mt-12 mb-3 text-sm"
		>
			<h2 className="font-bold p-3 text-base">INTERESSES</h2>
			<Projecto
				title="Reading, Music & Culture"
				img={readAndListen}
				stack={["docs", "music", "jazz", "classical", "reading"]}
			>
				<p>
					I was born with books; <span className="font-bold text-white">reading language documentation is a constant and essential stop when developing my projects.</span>Alongside that, a notebook to revisit old Math, and lots and lots of music—on vinyl, CD, streaming, or radio.
				</p>
			</Projecto>
			<Projecto
				title="Graphic Design"
				img={leiloesOnline}
				stack={["Adobe Creative Suite", "InkScape", "Scribus"]}
			>
				<p>Just as I found a way to resolve the problem of managing the auction house, graphic design also became a &apos;must-have skill&apos; due to the publication of auction catalogs. I took a Graphic Design course at ETIC and soon found myself doing much more in that field beyond catalogs.</p>
			</Projecto>
			<Projecto
				title="Emacs & Org Mode"
				img={emacsOrg}
				stack={["emacs"]}
				links={[["config files", "/projecto/emacsOrg"]]}
			>
				<p>I enjoy writing and have never liked Office-lyke applications. On this journey, I discovered Emacs and immediately fell in love with its simplicity. Just us and the text. Along the way, I created my own workflow based on the GTD system in org-mode. Here’s the result: no more Google Calendar.</p>
			</Projecto>
			<Projecto
				title="Tennis: Officiating"
				img={tennis}
				stack={["tennis", "officiating"]}
			>
				<p>Tennis is another great passion of mine. I spend many days and weekends officiating. I was lucky enough to one day be part of a referee team with the great Carlos Ramos in the chair.</p>
			</Projecto>
		</section>
	);
}
