class Contact extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <section
				id="contact"
				class="relative overflow-hidden">
				<div
					class="absolute w-full h-full left-[-50%] top-[-30%] bg-[url('/images/backgrounds/black-dots.svg')] -rotate-45"></div>
				<div class="absolute w-full h-full inset-0 bg-black-50/50"></div>
				<div class="section section-gap">
					<div class="title-container">
						<p class="sub-title">
							<span>ثبت سفارش و مشاوره</span>
							<i>📞</i>
						</p>
						<h2 class="title">مشاوره</h2>
					</div>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						<figure>
							<img
								src="/images/backgrounds/globe.svg"
								alt="globe"
								loading="lazy"
								class="w-full h-full" />
						</figure>
						<div class="flex flex-col gap-8">
							<h3 class="text-xl text-white/80 max-md:text-center">برای دریافت مشاوره شماره خود را وارد کنید.</h3>
							<form
								id="send-tel"
								class="flex justify-center items-center gap-4">
								<button
									type="submit"
									title="ارسال"
									aria-label="ارسال"
									class="submit">
									<span>ارسال</span>
									<span
										class="w-5.5 h-5.5 border-2 border-solid border-violet-600 border-r-transparent rounded-full animate-spin"></span>
								</button>
								<input
									type="number"
									placeholder="شماره تماس"
									aria-placeholder="شماره تماس"
									id="tel"
									name="tel"
									class="input" />
							</form>
							<div class="flex items-center gap-4 w-full my-8">
								<div class="w-full h-0.5 bg-white/10"></div>
								<span class="text-white/50">یا</span>
								<div class="w-full h-0.5 bg-white/10"></div>
							</div>
							<a
								href="/pages/contact.html"
								class="btn mx-auto text-xl bg-black-50">
								با ما در ارتباط باشید
							</a>
						</div>
					</div>
				</div>
			</section>
        `;
	}
}

customElements.define("el-contact", Contact);
