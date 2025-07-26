import { links } from "../index";

class Header extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <header class="header bg-black z-[48] fixed w-full top-0">
                <section class="section">
                    <div class="flex-between">
                        <button title="منو" aria-label="منو" role="button" class="menu relative z-[51] cursor-pointer hidden max-md:flex">
                                <i class="material-symbols-outlined text-5xl rotate-180">
                                    sort
                                </i>
                        </button>
                        <a href="tel:09122859399" title="رزرو پروژه" aria-label="رزرو پروژه" class="btn px-4 border-white/50 bg-black-50">
                            رزرو پروژه
                        </a>
                        <nav class="navigation flex items-center gap-12 relative list-none group">
                            <div class="tracker"></div>
                            ${links
															.map(
																(link) => `
                                <li>
                                    <a href="${link.path}" role="link" arai-label="${link.text}" class="link page-link flex-center">${link.text}</a>
                                </li>
                                
                                `
															)
															.join("")}

 
                        </nav>
                        <div class="logo max-sm:hidden">
                            <a href="/" title="صفحه اصلی" aria-label="صفحه اصلی" role="link" class="link flex-center group">
                                <img src="/logo.png" alt="logo" />
                            </a>
                        </div>
                    </div>
                </section>
            </header>
			<div class="h-[80px] md:h-[110px]"></div>
        `;
	}
}

customElements.define("el-header", Header);

window.onload = () => {
	const navigation = document.querySelector(".navigation");
	const pageLinks = document.querySelectorAll(".page-link");
	const tracker = document.querySelector(".tracker");
	const menuButton = document.querySelector(".menu");

	pageLinks.forEach((link) => {
		link.addEventListener("mouseenter", () => {
			const navRect = navigation.getBoundingClientRect();
			const linkRect = link.getBoundingClientRect();
			const leftRect = linkRect.left - navRect.left;

			tracker.style.left = leftRect - 5 + "px";
			tracker.style.width = linkRect.width + 10 + "px";
			tracker.classList.add("on");
		});

		link.addEventListener("mouseleave", () => {
			tracker.classList.remove("on");
		});

		if (window.location.href === link.href) {
			link.addEventListener("click", (e) => {
				e.preventDefault();
			});
			link.classList.add("active");
		}
	});

	menuButton.addEventListener("click", () => {
		const icon = menuButton.firstElementChild;
		const isOpen = navigation.classList.toggle("on");
		if (isOpen) {
			document.body.classList.add("overflow-hidden");
			icon.textContent = "close";
		} else {
			document.body.classList.remove("overflow-hidden");
			icon.textContent = "sort";
		}
	});

	const header = document.querySelector(".header");
	let lastScrollY = window.scrollY;

	window.addEventListener("scroll", () => {
		const currentScrollY = window.scrollY;

		if (currentScrollY > lastScrollY && currentScrollY > 112) {
			header.classList.add("-translate-y-full");
		} else {
			header.classList.remove("-translate-y-full");
		}

		lastScrollY = currentScrollY;
	});
};
