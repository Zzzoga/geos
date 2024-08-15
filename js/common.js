// Doc done scripts
document.addEventListener('DOMContentLoaded', () => {

	// MODAL NAV
	document.querySelector('.burger').addEventListener('click', e => {
		e.preventDefault()
		if (!e.target.closest('.burger').classList.contains('active')) {
			e.target.closest('.burger').classList.add('active')
			document.querySelector('.modal__nav').classList.add('active')
			document.querySelector('body').classList.add('hidden')
			if (window.pageYOffset < 10) {
				document.querySelector('header').classList.add('fixed')
			}
		} else {
			e.target.closest('.burger').classList.remove('active')
			document.querySelector('.modal__nav').classList.remove('active')
			document.querySelector('body').classList.remove('hidden')
			if (window.pageYOffset < 10) {
				document.querySelector('header').classList.remove('fixed')
			}
		}
	})

	// FIXED HEADER ON SCROLL
	document.addEventListener('scroll', e => {
		if (this.pageYOffset > 10) {
			document.querySelector('header').classList.add('fixed')
		} else {
			document.querySelector('header').classList.remove('fixed')
		}
	})
	
	// Smooth scroll when link clicked
	const $page = $('html, body');
	$('a[href*="#"]').click(function() {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 100
		}, 800);
		return false;
	});

	// Phone mask
	function maskPhone(selector, masked = '+7 (___) ___-__-__') {
		const elems = document.querySelectorAll(selector);
	
		function mask(event) {
			const keyCode = event.keyCode;
			const template = masked,
				def = template.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, "");
			console.log(template);
			let i = 0,
				newValue = template.replace(/[_\d]/g, function (a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
				});
			i = newValue.indexOf("_");
			if (i !== -1) {
				newValue = newValue.slice(0, i);
			}
			let reg = template.substr(0, this.value.length).replace(/_+/g,
				function (a) {
					return "\\d{1," + a.length + "}";
				}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
				this.value = newValue;
			}
			if (event.type === "blur" && this.value.length < 5) {
				this.value = "";
			}
	
		}
	
		for (const elem of elems) {
			elem.addEventListener("input", mask);
			elem.addEventListener("focus", mask);
			elem.addEventListener("blur", mask);
		}
		
	}
		
	maskPhone('input[type="tel"]')

	// ACCORDEON FUNC
	document.querySelectorAll('.accordeon__header').forEach(header => {
		header.addEventListener('click', e => {
			e.preventDefault()
			if (!e.target.classList.contains('active')) {
				e.target.closest('.accordeon').querySelectorAll('.accordeon__header').forEach(header => header.classList.remove('active'))
				e.target.closest('.accordeon').querySelectorAll('.accordeon__body').forEach(body => body.classList.remove('active'))
				e.target.classList.add('active')
				e.target.closest('.accordeon').querySelector(`.accordeon__body[data-num="${e.target.dataset.num}"]`).classList.add('active')
			}
		})
	})

	// TOP BTN FUNC
	document.querySelector('.top__btn').addEventListener('click', e => {
		e.preventDefault()
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	})

	// VIEW ALL ACCORDEON BTN
	if (document.querySelector('.view__all')) {
		document.querySelectorAll('.view__all').forEach(btn => {
			btn.addEventListener('click', e => {
				e.preventDefault()
				if (!e.target.closest('.view__all').classList.contains('active')) {
					e.target.closest('.view__all').classList.add('active')
					e.target.closest('.view__all').querySelector('span').innerHTML = 'Скрыть'
					e.target.closest('.view__all__container').querySelector('.view__all__wrapper').classList.add('active')
				} else {
					e.target.closest('.view__all').classList.remove('active')
					e.target.closest('.view__all').querySelector('span').innerHTML = 'Показать все'
					e.target.closest('.view__all__container').querySelector('.view__all__wrapper').classList.remove('active')
				}
			})
		})
	}

	document.querySelectorAll('.arrow').forEach(arrow => {
		arrow.addEventListener('click', e => {
			document.querySelectorAll('.view__all').forEach(btn => {
				btn.closest('.view__all').classList.remove('active')
				btn.closest('.view__all').querySelector('span').innerHTML = 'Показать все'
				btn.closest('.view__all__container').querySelector('.view__all__wrapper').classList.remove('active')
			})
		})
	})

})


