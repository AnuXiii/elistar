import * as loader from "./components/loader";
import { isLoading } from "./components/loader";
import * as header from "./components/header";
import * as footer from "./components/footer";
import * as card from "./components/services";
import * as contact from "./components/contact";
import * as sendTel from "./utils/email";
import * as portfolio from "./components/portfolios";
import * as marquee from "./components/marquee";
import { Drowdown } from "./components/dropdown";

import { loadAnimation } from "./utils/gsap";

window.addEventListener("DOMContentLoaded", () => {
	isLoading(false);
	setTimeout(() => {
		document.getElementById("loader").remove();
	}, 1000);

	loadAnimation();
});
