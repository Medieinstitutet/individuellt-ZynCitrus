import './style.css'


document.querySelector('#slideShow').innerHTML = `
<div class="imgSlider">
<img name=slider src="Assets/Slideshow/cola.png"></img><br>
<button class="material-symbols-outlined" id="arrow_left">
arrow_left
</button>
<button class="material-symbols-outlined" id="arrow_right">
arrow_right
</button>
</div>
`
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const arrowLeft = document.getElementById('arrow_left');
const arrowRight = document.getElementById('arrow_right');
const cookiesBtn = document.getElementById("cookiesBtn");
menuBtn.addEventListener("click", openCloseMenu);
closeBtn.addEventListener("click", openCloseMenu);
arrowLeft.addEventListener("click", imageSliderMinus);
arrowRight.addEventListener("click", imageSliderPlus);
cookiesBtn.addEventListener("click", closeCookies);
document.querySelector(".noccoLogo").classList.remove("hidden");
document.querySelector(".logo").classList.remove("hidden");
document.querySelector(".cookies").classList.remove("hidden");
const cookies = document.querySelector(".cookies")

let i = 0;
let images = [];
images[0] = "Assets/Slideshow/cola.png";
images[1] = "Assets/Slideshow/focus.png";
images[2] = "Assets/Slideshow/frame.png";

function imageSliderPlus(){
	document.slider.src = images[i]; 
	if(i < images.length - 1){
	  i++; 
	} else { 
		i = 0;
	}
}

function imageSliderMinus(){
	document.slider.src = images[i]; 
	if(i < 1){
		i = images.length -1;
	}else {
	  i--; 
  }
}

imageSliderPlus()

function openCloseMenu(){
console.log('hej');

	menuBtn.classList.toggle('hidden');
	closeBtn.classList.toggle('show');
	hamburger.classList.toggle('hidden');
	hamburger.style.zIndex="100"
}
function closeCookies(){
	console.log('hej');
	cookies.classList.add('hidden');

  }

  /* SLASK



  	cookiesBtn.classList.toggle('show');
	hamburger.classList.toggle('hidden');
	hamburger.style.zIndex="100" 

  */