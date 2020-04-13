var headerWrap = document.querySelector(".page-header__wrap");
var navToggle = document.querySelector(".main-nav__toggle");

headerWrap.classList.remove("page-header__wrap--nojs");

navToggle.addEventListener('click', function() {
  if (headerWrap.classList.contains("page-header__wrap--closed")) {
    headerWrap.classList.remove("page-header__wrap--closed");
    headerWrap.classList.add("page-header__wrap--opened");
  } else {
    headerWrap.classList.add("page-header__wrap--closed");
    headerWrap.classList.remove("page-header__wrap--opened");
  }
});