import './style.css'
import { noccoCanArray, categories } from './drinksArray.js'


const menuBtn = document.querySelector('.menuBtn');
const closeBtn = document.querySelector('.closeBtn');
const cookiesBtn = document.querySelector(".cookiesBtn");
menuBtn.addEventListener("click", openCloseMenu);
closeBtn.addEventListener("click", openCloseMenu);
cookiesBtn.addEventListener("click", closeCookies);

document.querySelector(".cookies").classList.remove("hidden");
const cookies = document.querySelector(".cookies")



function renderProducts() {
for (let j = 0; j < noccoCanArray.length; j++) {
    document.querySelector('.assortment').innerHTML += `
		<h2>${noccoCanArray[j].category[0]}</h2>
        <p>${noccoCanArray[j].categoryDesc}</p>
		<br/>
          <div class="img">
			<img id="imageOne-${j}" src="${noccoCanArray[j].img[0]}" width="75" height="200" loading="lazy" alt="${noccoCanArray[j].alt[0]}"/>
			<img id="imageTwo-${j}" src="${noccoCanArray[j].img[1]}" width="75" height="200" loading="lazy" alt="${noccoCanArray[j].alt[1]}"/>		
			</div>
		`
	}
}

document.querySelector('.slideShow').innerHTML = `
<div class="imgSlider">
<img name=slider src="Assets/Slideshow/cola.png"></img><br>
<button class="material-symbols-outlined arrow_left">
arrow_left
</button>
<button class="material-symbols-outlined arrow_right">
arrow_right
</button>
</div>
`



const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
arrowLeft.addEventListener("click", imageSliderMinus);
arrowRight.addEventListener("click", imageSliderPlus);

let i = 0;
let images = [];
images[0] = "assets/Slideshow/cola.png";
images[1] = "assets/Slideshow/focus.png";
images[2] = "assets/Slideshow/frame.png";

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
console.log('Stäng och öppna menyn');

	menuBtn.classList.toggle('hidden');
	closeBtn.classList.toggle('show');
	hamburger.classList.toggle('hidden');
	hamburger.style.zIndex="100"
}
function closeCookies(){
	console.log('Stänga cookiebaren');
	cookies.classList.add('hidden');

  }
  renderProducts();
  /* SLASK

  document.querySelector(".noccoLogo").classList.remove("hidden");
document.querySelector(".logo").classList.remove("hidden");

  	cookiesBtn.classList.toggle('show');
	hamburger.classList.toggle('hidden');
	hamburger.style.zIndex="100" 

  */