import React, { useEffect } from "react";

import ButtonHoverLarge from "./ButtonHoverLarge";
import Section from "../components/Section";

import "./styles/Hero.css";

class TextoAnimado {
	constructor(id, objective) {
		this.text = document.getElementById(id);
		this.objective = document.getElementById(objective);
		this.letters = this.text.innerText.split("");

		this.text.innerText = "";

		this.letters.forEach((letra) => {
			let character = letra === " " ? "&nbsp;" : letra;

			this.text.innerHTML =
				this.text.innerHTML +
				`
                    <div>
                        <span>${character}</span>
                        <span class="second-line">${character}</span>
                    </div>
                `;
		});

		this.objective.addEventListener("mouseenter", () => {
			let count = 0;

			const interval = setInterval(() => {
				if (count < this.text.children.length) {
					this.text.children[count].classList.add("animated");
					count += 1;
				} else {
					clearInterval(interval);
				}
			}, 20);
		});

		this.objective.addEventListener("mouseleave", () => {
			let count = 0;

			const interval = setInterval(() => {
				if (count < this.text.children.length) {
					this.text.children[count].classList.remove("animated");
					count += 1;
				} else {
					clearInterval(interval);
				}
			}, 20);
		});
	}
}

export default function Hero() {
	useEffect(() => {
		new TextoAnimado("name", "hero--text");
	}, []);
	return (
		<Section>
			<div className="hero fadeInLeft delay10">
				<div id="hero--text">
					<h1 className="hero--title">Hi! My name is</h1>
					<div className="hero--presentation">
						<div id="name" className="hero--animated-name">
							Brandon Argel
						</div>
						<p className="hero--presentation-do">And I build websites</p>
					</div>
					<p className="hero--info">
						I am a <span className="hero--info-career"> Software Engineer </span> in constant learning and
						evolution, with a passion for creating beautiful and functional websites.
						<br />
						<br />
						Currently I am living in Guadalajara, México, but I am always open to new opportunities.
					</p>
				</div>
				<div className="hero--buttons">
					<ButtonHoverLarge
						external={true}
						href="https://firebasestorage.googleapis.com/v0/b/personal-project-brandon.appspot.com/o/pdf%2Fresume.pdf?alt=media&token=40245e47-4a7f-4370-97d4-f79d85b717b1"
					>
						Resume
					</ButtonHoverLarge>
					<ButtonHoverLarge href="#contact">Contact</ButtonHoverLarge>
				</div>
			</div>
		</Section>
	);
}

const scrollToBottom = () => {
	const main = document.getElementById("main");

	const scrollHeight = main.scrollheight;
	console.log(scrollHeight);
	// main scroll to bottom
	// main.scrollTo(0, scrollHeight);
};
