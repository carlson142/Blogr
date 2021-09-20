//DESKTOP MENU
//BUTTONS
const btnProduct = document.querySelector(".product");
const btnCompany = document.querySelector(".company");
const btnConnect = document.querySelector(".connect");
const allBtns = document.querySelectorAll(".header__menu--link");

//CONTAINERS
const contProduct = document.querySelector(".openMenu__product");
const contCompany = document.querySelector(".openMenu__company");
const contConnect = document.querySelector(".openMenu__connect");
const allContainers = document.querySelectorAll(".openMenu");

const iconProduct = document.querySelector(".icon1");
const iconCompany = document.querySelector(".icon2");
const iconConnect = document.querySelector(".icon3");

// FUNCTIONS
function active(cont, icon) {
  cont.classList.toggle("active__menu");
  icon.classList.toggle("active__icon");
}

// EVENTS
allBtns.forEach((value) => {
  value.addEventListener("click", () => {
    if (value.id == 1) {
      active(contProduct, iconProduct);
    }
    if (value.id == 2) {
      active(contCompany, iconCompany);
    }
    if (value.id == 3) {
      active(contConnect, iconConnect);
    }
  });
});

////////////////////////////////////////////////////////////
//MOBILE MENU
const mobMenuBtn = document.querySelector(".mobMenuBtn");
//const mobMenuCont = document.querySelector(".mobMenuContainer");
const mobMenuCont = document.querySelector(".zzz");

const prodB = document.querySelector(".prodBtn");
const prodC = document.querySelector(".prodLinks");

const compB = document.querySelector(".compBtn");
const compC = document.querySelector(".compLinks");

const conB = document.querySelector(".conBtn");
const conC = document.querySelector(".conLinks");

const arr1 = document.querySelector(".arr1");
const arr2 = document.querySelector(".arr2");
const arr3 = document.querySelector(".arr3");

//TOGGLE MENU
mobMenuBtn.addEventListener("click", () => {
  if (mobMenuCont.style.display == "flex") {
    mobMenuCont.style.display = "none";
  } else mobMenuCont.style.display = "flex";
  //mobMenuCont.classList.toggle("mobMenuContainer__active");

  console.log("tap");
});

//TOGGLE LINKS
prodB.addEventListener("click", () => {
  prodC.classList.toggle("prodLinks__active");
  arr1.classList.toggle("arrDown");
});

compB.addEventListener("click", () => {
  compC.classList.toggle("compLinks__active");
  arr2.classList.toggle("arrDown");
});

conB.addEventListener("click", () => {
  conC.classList.toggle("conLinks__active");
  arr3.classList.toggle("arrDown");
});
