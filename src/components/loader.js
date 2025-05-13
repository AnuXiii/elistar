class Loader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <div id="loader" class="flex-center flex-col fixed inset-0 bg-black/95 min-h-screen z-[90]">
                <div class="w-24 h-24 border-4 border-solid border-blue-50 border-l-transparent rounded-full blur-[2px] animate-spin"></div>
            </div>
        `;
	}
}

customElements.define("el-loader", Loader);

export function isLoading(isLoading = true) {
	document.body.classList.add("overflow-hidden");

	if (!isLoading) {
		document.getElementById("loader").classList.add("fade-out");
		document.body.classList.remove("overflow-hidden");
	}
}
