AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

AOS.init();


var toggled = false;
var switchHolder = document.getElementById("outer-div");
var switchButton = document.getElementById("inner-div");
var logo = document.getElementById("logo");
var logo2 = document.getElementById("logo2");



document.querySelector(".option-wrapper").addEventListener('click',function () {
    document.body.classList.toggle("dark");
    if(!toggled){
    switchButton.style.transition =".4s all ease-in-out";
    switchButton.style.transform ="translateX(26px)";
    
    logo.src = './images/logo-white.png'
    logo2.src = './images/logo-white.png'
    toggled = true;
    }else{

    switchButton.style.transition =".4s all ease-in-out";
    switchButton.style.transform ="translateX(-1px)";
  
    
    logo.src = './images/logo.png'
    logo2.src = './images/logo.png'

    toggled = false;
    }
});


var openHam = document.body.querySelector("#hamburger-open")
var closeHam = document.body.querySelector("#hamburger-close")
var navLinks = document.body.querySelector(".nav-links")

openHam.addEventListener("click",function(){
  document.body.classList.toggle("active");
})
closeHam.addEventListener("click",function(){
  document.body.classList.toggle("active");
})

const checkbox = document.getElementById("checkbox");
const professional = document.getElementById("professional");
const master = document.getElementById("master");
const basic = document.getElementById("basic");

checkbox.addEventListener("click", () => {
  basic.textContent = basic.textContent === "$19/mo" ? "$15/mo" : "$19/mo";
  
  master.textContent = master.textContent === "$49/mo" ? "$45/mo" : "$49/mo";
});

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));