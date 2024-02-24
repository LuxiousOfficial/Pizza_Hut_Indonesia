const navigasiNav = document.querySelector('.navigasi-nav');

document.querySelector('#humberger-menu').onclick = (e) => {
	navigasiNav.classList.toggle('active');
	e.preventDefault();
};

const humberger = document.querySelector('#humberger-menu');

document.addEventListener('click', function(e) {
	if (!humberger.contains(e.target) && !navigasiNav.contains(e.target)) {
		navigasiNav.classList.remove('active');
	}
});

var imageno =1;
		displayimg(imageno);

		function nextimg(n) {
			displayimg(imageno += n)
		}

		function currentSlide(n) {
			displayimg(imageno = n)
		}

		function displayimg(n) {
			var i;
			var image = document.getElementsByClassName("image");
			var dots = document.getElementsByClassName("dot");

			if(n > image.length) {
				imageno = 1;
			}

			if (n < 1) {
				imageno = image.length; 
			}

			for(i=0; i < image.length; i++) {
				image[i].style.display = "none";
			}

			for(i=0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(" active", "");
			}

			image[imageno - 1].style.display ="block";
			dots[imageno - 1].className += " active";
		}

// start scroll reveal
ScrollReveal({
	reset:true, 
	distance: '105px',
	duration: 1800,
	delay: 200 
});


ScrollReveal().reveal('.home-background .container .title, .home-about h2, .menu p, .kontak h2, .home-menu h2, .home-menu .pizza h3, .home-menu .pasta h3, .home-menu .rice h3, .home-menu .snack h3, .home-rate h2, .ourcontact h2', {origin: 'top'});
ScrollReveal().reveal('.home-background .container .image-company, .home-about .company, .home-about .company .about-company, .home-image, .home-menu .pizza .card, .home-menu .pasta .card, .home-menu .rice .card, .home-menu .snack .card, .home-rate .rate, .ourcontact .contact', {origin: 'bottom'});
ScrollReveal().reveal('', {origin: 'left'});
ScrollReveal().reveal('', {origin: 'right'});

// end scroll reveal


// start multiple text

const typed = new Typed('.multiple-text', {
	strings: ['Pizza Hut Indonesia',],
	typedSpeed: 130,
	backSpeed: 130,
	backDelay: 1300,
	loop: true
});

// end multiple text
