/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{

  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/




// =====gasp
gsap.to("#header", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "70px",
    scrollTrigger: {
      trigger: "#header",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });
  
  gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      // markers: true,
      start: "top -25%",
      end: "top -70%",
      scrub: 2,
    },
  });
  gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from(".about__img", {
    x: -150,
    opacity:0,
    scrollTrigger: {
      trigger: ".about__img",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 70%",
      scrub: 3,
    },
  });

  gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
  });



  // =============================Audio
  const audio_div = document.querySelector("#audio-btn");
  const audio = document.getElementById('audio-s');
//console.log(audio);
 let isPlay = true;

function togglePlay(){
  isPlay = !isPlay;
  isPlay===true ? audio.play() : audio.pause()
}

/*=============== NEW SWIPER ===============*/
const progressCircle = document.querySelectorAll(".autoplay-progress");
const progressBar = document.querySelectorAll(".autoplay-progress-bar");

const swiper = new Swiper(".swiper", {
	lazy: true,
	slidesPerView: 1,
	spaceBetween: 0,
	grabCursor: true,
	effect: "coverflow",
	speed: 1500,
	coverflowEffect: {
		rotate: 100,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: false,
	},
	mousewheel: true,
	keyboard: {
		enabled: true,
	},
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
	},
	pagination: {
		el: ".swiper-pagination",
		dynamicBullets: false,
		clickable: true,
	},
	navigation: {
		nextEl: ".slider-button-next",
		prevEl: ".slider-button-prev",
	},
	on: {
		autoplayTimeLeft(s, time, progress) {
			progressCircle.forEach((progressCircle) => {
				progressCircle
					.querySelector("svg")
					.style.setProperty("--progress", 1 - progress);
				progressCircle.querySelector("span").textContent = `${Math.ceil(
					time / 1000
				)}s`;
			});
			progressBar.forEach((progressBar) => {
				progressBar.style.setProperty("--progress", `${(1 - progress) * 100}%`);
			});
		},
		init() {
			changeBackground(this);
		},
		slideChange() {
			changeBackground(this);
		},
	},
});

function changeBackground(slide) {
	const getBackground =
		slide.slides[slide.activeIndex].getAttribute("data-bg-color");

	const getProgressColor = slide.slides[slide.activeIndex].getAttribute(
		"data-progress-color"
	);

	document.body.style.backgroundColor = `${getBackground}`;

	document.body.style.setProperty("--progress-color", `${getProgressColor}`);
	document.body.style.setProperty("--theme-color", `${getBackground}`);
}