const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");
const emailLabel = document.querySelector(".email-label");

const passwordLabel = document.querySelector(".password-label");

emailInput.addEventListener("click", function () {
	emailLabel.classList.add("label-resize");
});

passwordInput.addEventListener("click", function () {
	passwordLabel.classList.add("label-resize");
});
