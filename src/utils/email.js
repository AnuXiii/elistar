import emailjs from "@emailjs/browser";
import { customAlert, colors } from "../components/alert";

const EMAILJSINFORMATION = {
	service_id: "service_eppxog9",
	template_id_1: "template_zkzalkt",
	template_id_2: "template_hu7tu05",
	public_key: "7i8VB5bxsQT8JgeCY",
	private_key: "jsIdkeBZ9ZYv9x4XHsIlQ",
};

document.addEventListener("DOMContentLoaded", () => {
	emailjs.init(EMAILJSINFORMATION.public_key);

	initTelForm();
	initContactForm();
});

function initTelForm() {
	const telForm = document.getElementById("send-tel");

	if (telForm) {
		const telInput = telForm.querySelector(".input");
		const sendBtn = telForm.querySelector(".submit");

		telForm.addEventListener("submit", (e) => {
			e.preventDefault();

			if (telInput.value.trim() === "") {
				customAlert("لطفا شماره را وارد نمایید", colors.danger);
			} else {
				sendBtn.classList.add("loading");
				emailjs.sendForm(EMAILJSINFORMATION.service_id, EMAILJSINFORMATION.template_id_1, telForm).then(() => {
					sendBtn.classList.remove("loading");
					telInput.value = "";
					customAlert("شماره شما ارسال شد", colors.success);
				});
			}
		});
	}
}

function initContactForm() {
	const contactUs = document.getElementById("contact-us");

	if (contactUs) {
		const inputs = contactUs.querySelectorAll("input, textarea");
		const submitBtn = contactUs.querySelector(".submit");

		contactUs.addEventListener("submit", (e) => {
			e.preventDefault();
		});

		submitBtn.addEventListener("click", () => {
			let hasError = false;

			inputs.forEach((input) => {
				if (input.value.trim() === "") {
					input.focus();
					input.classList.add("border-rose-500");
					hasError = true;
				} else {
					input.classList.remove("border-rose-500");
				}
			});

			if (hasError) return;

			submitBtn.classList.add("loading");

			emailjs
				.sendForm(EMAILJSINFORMATION.service_id, EMAILJSINFORMATION.template_id_2, contactUs)
				.then(() => {
					inputs.forEach((input) => (input.value = ""));
					submitBtn.classList.remove("loading");
					customAlert("فرم شما با موفقیت ارسال شد", colors.success);
				})
				.catch((error) => {
					customAlert("خطایی رخ داد. لطفا دوباره تلاش کنید", colors.danger);
					console.log(error);
				});
		});
	}
}
