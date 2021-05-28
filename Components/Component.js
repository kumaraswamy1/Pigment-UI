const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");
const emailLabel = document.querySelector(".email-label");
const passwordLabel = document.querySelector(".password-label");
const navToggle = document.querySelector(".nav-toggle");
const navClose = document.querySelector(".nav-hide");
const modal = document.querySelector(".modal-btn");
const modalShow = document.querySelector(".modal-hide");
const toastBtn = document.querySelector(".toast-btn");
const toastHide = document.querySelector(".toast-hide");

emailInput.addEventListener("click", function () {
	emailLabel.classList.add("label-resize");
});

passwordInput.addEventListener("click", function () {
	passwordLabel.classList.add("label-resize");
});

navToggle.addEventListener("click", function () {
	navClose.classList.toggle("nav-mobile");
});

modal.addEventListener("click", function () {
	modalShow.classList.add("modal");
});
const modalClose = document.querySelector(".modal-close");

modalClose.addEventListener("click", function () {
	modalShow.classList.remove("modal");
});

toastBtn.addEventListener("click", function () {
	toastHide.classList.toggle("toast-show");

	setTimeout(function () {
		toastHide.classList.remove("toast-show");
	}, 5000);
});
