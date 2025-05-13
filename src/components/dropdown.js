const dropdownButton = document.querySelector(".dropdown");
const dropdownItems = document.querySelector(".dropdown-items");
const subject = document.getElementById("subject");

dropdownButton?.addEventListener("click", Drowdown);
export function Drowdown() {
	const isOpen = dropdownItems.classList.toggle("active");
	dropdownButton.querySelector("i").classList.toggle("rotate-180");

	if (isOpen) {
		dropdownItems.style.height = dropdownItems.scrollHeight + "px";
	} else {
		dropdownItems.style.height = 0;
	}
}

dropdownItems?.addEventListener("click", (e) => {
	const validTarget = e.target.closest(".item");

	if (validTarget) {
		dropdownButton.querySelector("span").innerHTML = validTarget.innerHTML;
		subject.value = validTarget.dataset.value;
	}
});

document.addEventListener("click", (e) => {
	if (dropdownButton) {
		if (!e.target.closest(".dropdown")) {
			dropdownItems.classList.remove("active");
			dropdownItems.style.height = 0;
			dropdownButton.querySelector("i").classList.remove("rotate-180");
		}
	}
});
