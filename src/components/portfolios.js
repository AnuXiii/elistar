import { images } from "../index";

let currentCategory = "all";

const categoryList = document.querySelector(".category-list");
const gallery = document.getElementById("gallery");
const lightBox = document.querySelector(".lightbox");

function renderGallery(category) {
	if (!gallery) return;
	gallery.innerHTML = "";

	const filteredImages = category === "all" ? images : images.filter((img) => img.category === category);

	if (filteredImages.length === 0) {
		const emptyBox = document.createElement("div");
		emptyBox.className = "empty-box";
		emptyBox.innerHTML = `
			<img src="/images/icons/empty.webp" alt="empty box" loading="lazy"/>
			<h3>تصویری برای نمایش وجود ندارد</h3>
		`;

		gallery.appendChild(emptyBox);
		return;
	}

	filteredImages.forEach((item, index) => {
		const itemBox = document.createElement("div");
		itemBox.style.animationDelay = `${index * 100}ms`;
		itemBox.classList.add("img-box", "group");
		itemBox.setAttribute("data-category", item.category);
		itemBox.innerHTML = `
            <div class="overlay flex-center">
                <button class="download" title="دانلود عکس" aria-label="دانلود عکس">
					<i class="material-symbols-outlined text-3xl">file_download</i>
                </button>

            </div>
			<img src="${item.imgSrc}" alt="${item.category}" loading="lazy" />
		`;
		gallery.appendChild(itemBox);

		itemBox.addEventListener("click", (e) => {
			if (!e.target.closest(".download")) {
				document.body.classList.add("overflow-hidden");
				itemBox.classList.add("blur-xs");
				lightBox.innerHTML = `
                    <img src="${item.imgSrc}" alt="${item.category}" />
                `;
				lightBox.classList.replace("hidden", "flex-center");
				lightBox.querySelector("img").classList.add("lightbox-animation-in");
			}
		});

		itemBox.querySelector(".download").addEventListener("click", () => {
			const downloadLink = document.createElement("a");
			downloadLink.href = item.imgSrc;
			downloadLink.download = item.imgSrc;
			downloadLink.click();
		});
	});
}

if (lightBox) {
	lightBox.addEventListener("click", (e) => {
		if (!e.target.closest("img")) {
			document.body.classList.remove("overflow-hidden");
			document.querySelectorAll(".img-box").forEach((item) => item.classList.remove("blur-xs"));
			lightBox.querySelector("img").classList.remove("lightbox-animation-in");
			lightBox.classList.replace("flex-center", "hidden");
		}
	});
}

if (categoryList) {
	categoryList.addEventListener("click", (e) => {
		const validTarget = e.target.closest("button");

		if (validTarget) {
			if (categoryList.querySelector(".active")) {
				categoryList.querySelector(".active").classList.remove("active");
			}

			validTarget.classList.add("active");
			document.querySelector(".title-container").scrollIntoView({ behavior: "smooth" });
			currentCategory = validTarget.dataset.category;
			renderGallery(currentCategory);
		}
	});
}

renderGallery(currentCategory);
