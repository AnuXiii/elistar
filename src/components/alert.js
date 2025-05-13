import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export function customAlert(msg, type) {
	Toastify({
		text: msg,
		duration: 3000,
		position: "right",
		style: {
			background: type,
			boxShadow: "none",
		},
	}).showToast();
}

export const colors = {
	danger: "#ff2056",
	success: "#00c951",
};
