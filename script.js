const form = document.getElementById('myform');
const email = document.getElementById('email');
const btn = document.getElementById('Subscribe');
const errorMessage = document.getElementById("errorMessage");
const more = document.getElementById("more");
const paragraph = document.getElementById("paragraph");

form.onsubmit = function (e) {
  if (!email.value) {
    e.preventDefault();
    errorMessage.style.display = "block";
    errorMessage.textContent = "Email is required!";
  }
}; 

email.oninput = function () {
    if (email.value === "%@%.com") {
      username.setCustomValidity("Email must be in the format 'example@email.com'");
    } else {
      username.setCustomValidity("");
    }
  }; 
more.onclick = function () {
    const new_item = document.createElement("span");
    new_item.textContent = " this content can be further extended ";
    paragraph.appendChild(new_item);
};

email.onmouseover = function () {
  email.style.backgroundColor = "lightgray";
};
email.onmouseout = function () {
  email.style.backgroundColor = "white";
};

const slides = document.querySelectorAll('.slides img');
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 4000);
  }
};

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  }
  else if (index < 0) {
    slideIndex = slides.length - 1;
  } 
slides.forEach(slide => {
  slide.classList.remove("displaySlide");
});
slides[slideIndex].classList.add("displaySlide");
};

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
  clearInterval(intervalId);
};

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
};