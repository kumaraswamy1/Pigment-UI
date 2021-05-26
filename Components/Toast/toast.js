const toastBtn = document.querySelector(".toast-btn");
const toastHide = document.querySelector(".toast-hide");

toastBtn.addEventListener("click", function () {
	toastHide.classList.toggle("toast-show");

	setTimeout(function () {
		toastHide.classList.remove("toast-show");
	}, 5000);
});
