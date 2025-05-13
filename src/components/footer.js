import { links } from "../index";

class Footer extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        	<footer class="footer bg-black-50 z-10 relative overflow-hidden">
				<div class="footer-bg"></div>
				<div class="section flex flex-col gap-20">
					<div class="flex-between gap-4">
						<div>
							<a
								href="#app"
								title="بازگشت به بالا"
								aria-label="بازگشت به بالا"
								class="flex items-center gap-4 text-lg duration-400 ease-custom hover:text-blue-50">
								<i class="material-symbols-outlined text-xl animate-bounce">arrow_upward</i>
								<span>بازگشت به بالا</span>
							</a>
						</div>
						<div class="flex items-center gap-4">
							<h2 class="text-xl font-medium text-white/90 max-md:hidden">ال ایستر در شبکه های اجتماعی</h2>
							<ul class="flex justify-end items-center gap-4">
								<li>
									<a
										href="https://www.instagram.com/elistarstudio/"
										target="_blank"
										title="instagram page"
										aria-label="instagram page"
										class="flex-center w-12 h-12 relative border border-solid border-white/20 rounded-lg overflow-hidden group">
										<img
											src="/images/icons/instagram.svg"
											alt="instagram"
											class="absolute scale-80 w-full h-full duration-400 opacity-100 ease-custom left-0 group-hover:opacity-0 group-hover:left-full" />
										<img
											src="/images/icons/instagram.svg"
											alt="instagram"
											class="absolute scale-80 w-full h-full duration-400 opacity-0 ease-custom group-hover:opacity-100 right-full group-hover:right-0" />
									</a>
								</li>
								<li>
									<a
										href="https://wa.me/989122859399?text=سلام وقت بخیر"
										target="_blank"
										title="whatsapp"
										aria-label="whatsapp"
										class="flex-center w-12 h-12 relative border border-solid border-white/20 rounded-lg overflow-hidden group">
										<img
											src="/images/icons/whatsapp.svg"
											alt="whatsapp"
											class="absolute scale-80 w-full h-full duration-400 opacity-100 ease-custom left-0 group-hover:opacity-0 group-hover:left-full" />
										<img
											src="/images/icons/whatsapp.svg"
											alt="whatsapp"
											class="absolute scale-80 w-full h-full duration-400 opacity-0 ease-custom group-hover:opacity-100 right-full group-hover:right-0" />
									</a>
								</li>
								<li>
									<a
										href="https://balad.ir/p/PxoQYSkJaFYK4x"
										target="_blank"
										title="location"
										aria-label="location"
										class="flex-center w-12 h-12 relative border border-solid border-white/20 rounded-lg overflow-hidden group">
										<img
											src="/images/icons/balad.png"
											alt="location"
											class="absolute scale-80 w-full h-full duration-400 opacity-100 ease-custom left-0 group-hover:opacity-0 group-hover:left-full" />
										<img
											src="/images/icons/balad.png"
											alt="location"
											class="absolute scale-80 w-full h-full duration-400 opacity-0 ease-custom group-hover:opacity-100 right-full group-hover:right-0" />
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="grid grid-cols-2 gap-20 max-sm:grid-cols-1">
						<div class="flex gap-20 max-sm:justify-between">
							<div class="flex flex-col">
								<h2 class="text-xl mb-10 font-semibold text-white/80">ناوبری</h2>
								<ul class="flex flex-col gap-8">
									${links
										.map(
											(link) =>
												`
									<li>
										<a href="${link.path}" title="${link.text}" aria-label="${link.text}" class="py-2 text-white/70 duration-200 ease-custom hover:text-blue-50">
											${link.text}
										</a>										
									</li>	
									`
										)
										.join("")}
								</ul>
							</div>
							<!--  -->
							<div class="flex flex-col">
								<h2 class="text-xl mb-10 font-semibold text-white/80">تماس سریع</h2>
								<ul class="flex flex-col gap-8">
									<li>
										<a
											href="https://www.instagram.com/elistarstudio/"
											target="_blank"
											title="instagram page"
											aria-label="instagram page"
											class="py-2 text-white/70 duration-200 ease-custom hover:text-blue-50"
											>اینستاگرام</a
										>
									</li>
									<li>
										<a
											href="https://wa.me/989122859399?text=سلام وقت بخیر"
											target="_blank"
											title="whatsapp"
											aria-label="whatsapp"
											class="py-2 text-white/70 duration-200 ease-custom hover:text-blue-50"
											>واتس اپ</a
										>
									</li>
									<li>
										<a
											href="https://balad.ir/p/PxoQYSkJaFYK4x"
											target="_blank"
											title="location"
											aria-label="location"
											class="py-2 text-white/70 duration-200 ease-custom hover:text-blue-50"
											>نقشه بلد</a
										>
									</li>
									<li>
										<a
											href="https://elistarstudio.blogfa.com/"
											target="_blank"
											title="blog"
											aria-label="blog"
											class="py-2 text-white/70 duration-200 ease-custom hover:text-blue-50"
											>وبلاگ</a
										>
									</li>
								</ul>
							</div>
						</div>
						<div class="flex gap-20">
							<div class="flex flex-col">
								<h2 class="text-xl mb-10 font-semibold text-white/80">درباره ما</h2>
								<p class="text-white/70 text-sm leading-8 text-justify">
									پایه های آتلیه تخصصی عکس و فیلم ال ایستر در سال <strong>1384</strong> با مجوز رسمی از اتحادیه عکاسان و
									فیلمبرداران پاکدشت و به همت مدیریت جوان آن آقای مهدی قدرتی بنا نهاده شده است که فعالیت ایشان برمیگردد
									به سال <strong>1380</strong> که توانست با کار ،تلاش، همت و دیدن دوره های حرفه ای و تخصصی در این زمینه
									به فعالیت خود ادامه دهد و اینک پس از سالها تلاش و تجربه مفید در زمینه عکاسی و فیلم برداری از مراسم ها
									و مجالس شما مشتریان عزیز در مجموعه های باغ و عمارت های لاکچری، لوکس و کاملا شیک و با تجهیزات به روز و
									دکوراسیونی جدید و با کادری مجرب در این زمینه فعالیت کند.
								</p>
								<a
									href="/pages/about.html"
									title="ادامه مطلب"
									aria-label="ادامه مطلب"
									class="btn mr-auto mt-2"
									>ادامه مطلب</a
								>
							</div>
						</div>
					</div>
					<div class="flex-between gap-6 text-center text-sm text-white/90 max-sm:flex-col-reverse">
						<p>طراحی و توسعه توسط <a class="text-blue-50 font-semibold duration-200 ease-custom hover:opacity-80" href="https://www.instagram.com/mahdirs.696/" target="_blank" title="صفحه اینستاگرام">مهدی رستمی</a></p>
						<p>تمامی حقوق برای مجموعه <span class="text-blue-50 font-semibold">ال ایستر</span> محفوظ می باشد. <span>${new Date().getFullYear()} &copy;</span></p>
					</div>
				</div>
			</footer>
        `;
	}
}

customElements.define("el-footer", Footer);
