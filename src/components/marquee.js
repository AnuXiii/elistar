import { images } from "../index";

class Marquee extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <div
				class="section mt-20"
				id="view">
				<div class="h-52 flex items-center justify-center overflow-hidden relative">
					<div class="bg-linear-to-r from-transparent to-black absolute top-0 right-0 w-32 h-full z-10"></div>
					<div class="bg-linear-to-r from-black to-transparent absolute top-0 left-0 w-32 h-full z-10"></div>
					<div class="marquee-box">
                        ${images
													.map(
														(item) => `
                            <div class="marquee-item">
                                <img src="${item.imgSrc}" alt="portfolio" class="w-40 h-40 grayscale-100 saturate-100 rounded-lg" />
                            </div>
                            `
													)
													.join("")}
                                                                            ${images
																																							.map(
																																								(item) => `
                            <div class="marquee-item">
                                <img src="${item.imgSrc}" alt="portfolio" class="w-40 h-40 grayscale-100 saturate-100 rounded-lg" />
                            </div>
                            `
																																							)
																																							.join("")}
					</div>
				</div>
			</div>
        `;
	}
}

customElements.define("el-marquee", Marquee);
