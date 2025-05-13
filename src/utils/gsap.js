import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export function loadAnimation() {
	const portfolioCards = gsap.utils.toArray(".portfolio-card");
	if (portfolioCards.length > 0) {
		portfolioCards.forEach((card, i) => {
			gsap.from(card, {
				opacity: 0,
				y: 20,
				duration: 0.2,
				delay: i * 0.2,
				scrollTrigger: {
					trigger: card,
					start: "top 80%",
				},
			});
		});
	}

	const cards = gsap.utils.toArray(".card");
	if (cards.length > 0) {
		cards.forEach((card, i) => {
			gsap.from(card, {
				opacity: 0,
				left: 20,
				duration: 0.6,
				delay: i * 0.4,
				scrollTrigger: {
					trigger: card,
					start: "top 80%",
				},
			});
		});
	}

	const aboutFig = document.querySelector(".about-fig");
	if (aboutFig) {
		gsap.from(aboutFig, {
			opacity: 0,
			duration: 0.6,
			ease: "power1.in",
			scrollTrigger: {
				trigger: aboutFig,
				start: "top 80%",
			},
		});
	}

	const aboutL = document.querySelector(".about-l");
	if (aboutL) {
		gsap.from(aboutL, {
			x: 200,
			opacity: 0,
			duration: 0.6,
			scrollTrigger: {
				trigger: aboutL,
				start: "top 50%",
			},
		});
	}

	const aboutR = document.querySelector(".about-r");
	if (aboutR) {
		gsap.from(aboutR, {
			x: -200,
			opacity: 0,
			duration: 0.6,
			scrollTrigger: {
				trigger: aboutR,
				start: "top 50%",
			},
		});
	}

	const aboutHeads = gsap.utils.toArray(".about-head");
	if (aboutHeads.length > 0) {
		aboutHeads.forEach((item, i) => {
			gsap.from(item, {
				opacity: 0,
				y: 50,
				duration: 0.6,
				delay: i * 0.6,
				scrollTrigger: {
					trigger: item,
					start: "top 80%",
				},
			});
		});
	}

	const serviceFigs = gsap.utils.toArray(".service-fig");
	if (serviceFigs.length > 0) {
		serviceFigs.forEach((fig, i) => {
			gsap.from(fig, {
				opacity: 0,
				x: -50,
				duration: 0.6,
				scrollTrigger: {
					trigger: fig,
					start: "top 70%",
				},
			});
		});
	}
}
