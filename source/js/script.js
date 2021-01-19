let navtoggle = document.querySelector(".main-nav__toggle");
let nav = document.querySelector(".main-nav");
let itemslide1 = document.querySelector(".reviews__item--1");
let itemslide2 = document.querySelector(".reviews__item--2");
let itemslide3 = document.querySelector(".reviews__item--3");
let sldidebtn1 = document.querySelector(".slider__toggle--1");
let sldidebtn2 = document.querySelector(".slider__toggle--2");
let sldidebtn3 = document.querySelector(".slider__toggle--3");
let price = document.querySelector(".price__list");
let prisebtn1 = document.querySelector(".price__button--1");
let prisebtn2 = document.querySelector(".price__button--2");
let prisebtn3 = document.querySelector(".price__button--3");



nav.classList.remove('main-nav--opened');

navtoggle.onclick = function() {
  nav.classList.toggle('main-nav--opened');
};

navtoggle.onclick = function() {
  nav.classList.toggle('main-nav--opened');
};

sldidebtn2.onclick = function() {
  itemslide2.classList.add('reviews__item--active');
  itemslide1.classList.remove('reviews__item--active');
  itemslide3.classList.remove('reviews__item--active');
};

sldidebtn3.onclick = function() {
  itemslide3.classList.add('reviews__item--active');
  itemslide1.classList.remove('reviews__item--active');
  itemslide2.classList.remove('reviews__item--active');
};

sldidebtn1.onclick = function() {
  itemslide1.classList.add('reviews__item--active');
  itemslide2.classList.remove('reviews__item--active');
  itemslide3.classList.remove('reviews__item--active');
};

prisebtn1.onclick = function() {
  price.classList.add('price__list--base');
  price.classList.remove('price__list--standart');
  price.classList.remove('price__list--no-limit');
};

prisebtn2.onclick = function() {
  price.classList.add('price__list--standart');
  price.classList.remove('price__list--base');
  price.classList.remove('price__list--no-limit');
};

prisebtn3.onclick = function() {
  price.classList.add('price__list--no-limit');
  price.classList.remove('price__list--base');
  price.classList.remove('price__list--standart');
};
