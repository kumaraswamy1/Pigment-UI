const navToggle = document.querySelector(".nav-toggle");

const navClose = document.querySelector(".nav-hide");

navToggle.addEventListener("click", function () {
	navClose.classList.toggle("nav-mobile");
});
